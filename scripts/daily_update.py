import json, os, datetime, pathlib
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "live.json"
CONFIG = ROOT / "config.json"

def call_openai(prompt):
    api_key = os.environ["OPENAI_API_KEY"]
    body = {
        "model": os.environ.get("OPENAI_MODEL","gpt-5"),
        "tools": [{"type":"web_search_preview"}],
        "input": prompt
    }
    req = Request(
        "https://api.openai.com/v1/responses",
        data=json.dumps(body).encode(),
        headers={"Authorization":"Bearer "+api_key,"Content-Type":"application/json"},
        method="POST"
    )
    with urlopen(req, timeout=180) as r:
        return json.loads(r.read().decode())

def text_from_response(obj):
    if "output_text" in obj:
        return obj["output_text"]
    parts=[]
    for item in obj.get("output",[]):
        for c in item.get("content",[]):
            if isinstance(c,dict) and c.get("type")=="output_text":
                parts.append(c.get("text",""))
    return "\n".join(parts)

config=json.loads(CONFIG.read_text(encoding="utf-8"))
old=json.loads(DATA.read_text(encoding="utf-8"))
today=datetime.datetime.now(datetime.timezone.utc).astimezone(
    datetime.timezone(datetime.timedelta(hours=8))
)
cutoff=(today-datetime.timedelta(hours=config["lookback_hours"])).isoformat()

prompt=f"""
You are the daily competitive-intelligence analyst for CENTOGENE APAC.
Research public information published/announced since {cutoff} for these competitors:
{", ".join(config["competitors"])}

Prioritize developments relevant to:
{", ".join(config["product_battles"])}

Search broadly but prioritize official competitor websites, product pages, newsrooms,
investor materials, regulatory sources, publications and regional/APAC sources.
Use LinkedIn and other social media as market signals, but do not use them alone to
establish an important product capability when stronger evidence is available.

Return ONLY valid JSON with this shape:
{{
  "updates":[
    {{
      "date":"YYYY-MM-DD",
      "company":"...",
      "impact":"High|Medium|Low",
      "confidence":"High|Medium|Low",
      "area":"...",
      "title":"...",
      "summary":"...",
      "why":"...",
      "sales":"...",
      "source":"https://...",
      "source_type":"primary|secondary|social",
      "fact_or_inference":"fact|inference"
    }}
  ]
}}

Rules:
- Include only developments that are new/materially changed within the lookback window.
- Do not invent or guess.
- If a claim cannot be verified, omit it.
- Prefer primary sources for competitor product claims.
- Do not call a company a direct competitor unless the evidence supports meaningful overlap.
- Avoid duplicates.
- Include source URLs for every update.
"""
raw=text_from_response(call_openai(prompt))
raw=raw.strip()
if raw.startswith("```"):
    raw=raw.split("```",2)[1]
    raw=raw.replace("json","",1).strip()
new=json.loads(raw)

# Keep a rolling 90-day history and remove exact duplicate URLs.
existing=old.get("updates",[])
by_url={u.get("source"):u for u in existing if u.get("source")}
for u in new.get("updates",[]):
    if u.get("source"):
        by_url[u["source"]]=u
merged=list(by_url.values())
merged.sort(key=lambda x:(x.get("date",""),x.get("company","")), reverse=True)
merged=merged[:500]

out={
    "generated_at":today.isoformat(),
    "cutoff":today.strftime("%Y-%m-%d"),
    "status":"live",
    "updates":merged,
    "competitors":old.get("competitors",[]),
    "products":old.get("products",[])
}
DATA.write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding="utf-8")
print(f"Updated {len(new.get('updates',[]))} new signals; retained {len(merged)} total.")
