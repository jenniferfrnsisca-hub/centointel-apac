import json, datetime, pathlib, urllib.parse, urllib.request, urllib.error, xml.etree.ElementTree as ET, html, re, time

ROOT=pathlib.Path(__file__).resolve().parents[1]
DATA=ROOT/"data"/"live.json"
CONFIG=ROOT/"config.json"

UA="CentoIntel-APAC/1.0 public-source-monitor"

def get(url, timeout=25):
    req=urllib.request.Request(url, headers={"User-Agent":UA,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"})
    try:
        with urllib.request.urlopen(req,timeout=timeout) as r:
            return r.read(), r.headers.get_content_type()
    except Exception as e:
        print("FETCH_FAIL",url,e)
        return b"", ""

def clean(x):
    x=html.unescape(re.sub(r"<[^>]+>"," ",x or ""))
    return re.sub(r"\s+"," ",x).strip()

def rss(url, source_label):
    raw,ctype=get(url)
    if not raw: return []
    try: root=ET.fromstring(raw)
    except Exception: return []
    rows=[]
    for item in root.findall(".//item"):
        title=clean(item.findtext("title"))
        link=item.findtext("link") or ""
        date=item.findtext("pubDate") or item.findtext("{http://purl.org/dc/elements/1.1/}date") or ""
        desc=clean(item.findtext("description"))
        rows.append({"title":title,"link":link,"date":date,"description":desc,"source":source_label})
    return rows

def page_signals(url, company):
    raw,ctype=get(url)
    if not raw: return []
    if "html" not in ctype and not url.endswith((".html",".htm","/")): return []
    text=clean(raw.decode("utf-8","ignore"))
    # Capture only high-signal phrases; do not pretend this is a full crawler.
    terms=[
      "launch","launched","new","update","expanded","expands","partnership","collaboration",
      "acquisition","approval","approved","FDA","IVDR","CE-IVD","whole genome","whole exome",
      "WGS","WES","NGS","rare disease","oncology","neurology","pediatric","repeat expansion",
      "reanalysis","VUS","variant interpretation","biodata","database","turnaround"
    ]
    if not any(t.lower() in text.lower() for t in terms): return []
    title=company+" official website signal"
    return [{"title":title,"link":url,"date":"","description":text[:1500],"source":"official website"}]

def google_news(q):
    url="https://news.google.com/rss/search?"+urllib.parse.urlencode({"q":q,"hl":"en-US","gl":"US","ceid":"US:en"})
    return rss(url,"Google News RSS")

config=json.loads(CONFIG.read_text(encoding="utf-8"))
old=json.loads(DATA.read_text(encoding="utf-8"))
now=datetime.datetime.now(datetime.timezone.utc).astimezone(datetime.timezone(datetime.timedelta(hours=8)))

items=[]; seen=set()
def add(row):
    key=(row.get("link") or row.get("title","")).strip()
    if key and key not in seen:
        seen.add(key); items.append(row)

for c in config["competitors"]:
    # Main website + newsroom first: these are intentionally prioritized.
    for u in [c.get("channels",{}).get("website"),c.get("channels",{}).get("news")]:
        if u:
            for r in page_signals(u,c["name"]): add(r)
            time.sleep(.15)

    # News discovery around company + relevant clinical/product themes.
    qs=[
      f'"{c["name"]}" genomics',
      f'"{c["name"]}" WGS OR WES OR NGS',
      f'"{c["name"]}" rare disease OR neurology OR pediatrics',
      f'"{c["name"]}" oncology OR molecular diagnostics',
      f'"{c["name"]}" VUS OR reanalysis OR repeat expansion',
      f'site:linkedin.com/company "{c["name"]}"',
      f'site:linkedin.com/posts "{c["name"]}" genomics',
      f'site:youtube.com "{c["name"]}" genomics',
    ]
    for q in qs:
        for r in google_news(q): add(r)
        time.sleep(.12)

# Cross-market Taiwan/APAC searches.
for q in [
  '"Taiwan" genomics NGS rare disease 2026',
  '"Taiwan precision oncology NGS 2026',
  '"APAC" whole genome sequencing rare disease 2026',
  '"Asia" genetic testing WGS WES oncology 2026',
  '"Taiwan" "ACT Genomics" 2026',
  '"Taiwan" "Sofiva Genomics" 2026',
  '"Taiwan" "TGIA" genomics 2026',
  '"Taiwan" "KimForest" genomics 2026'
]:
    for r in google_news(q): add(r)

# Conservative classification.
terms={
"CentoGenome":["whole genome","wgs","genome sequencing","genome"],
"CentoXome":["whole exome","wes","exome sequencing","exome"],
"MOx":["molecular oncology","oncology","liquid biopsy","tumor","cancer","ngs"],
"Neuro":["neurology","neuro","epilepsy","neuromuscular"],
"Pediatrics":["pediatric","paediatric","children","congenital"],
"Repeat expansion":["repeat expansion","repeat expansions","trinucleotide repeat"],
"VUS / reanalysis":["vus","variant of uncertain significance","reanalysis","reinterpretation"],
"CentoDX / data":["database","data","biodata","interpretation","bioinformatics","clinical reporting"]
}
def area(t):
    t=t.lower()
    scores={k:sum(term in t for term in v) for k,v in terms.items()}
    return max(scores,key=scores.get) if max(scores.values()) else "Genomics / market"
def company(t):
    t=t.lower()
    matches=[c["name"] for c in config["competitors"] if c["name"].lower() in t]
    return sorted(matches,key=len,reverse=True)[0] if matches else "Emerging / regional signal"
def impact(a,t):
    t=t.lower()
    if a in ["CentoGenome","CentoXome","MOx","Repeat expansion","VUS / reanalysis"]: return "High"
    if any(x in t for x in ["launch","partnership","approval","acquisition","coverage"]): return "High"
    return "Medium"

new=[]
for r in items:
    txt=(r["title"]+" "+r.get("description",""))
    co=company(txt); ar=area(txt)
    # Avoid generic website homepage signals becoming a flood.
    if r["source"]=="official website" and "official website signal" in r["title"]:
        summary="Official website page was accessible and contains relevant competitive keywords. Open the source to verify the specific current product/news claim."
    else:
        summary=r.get("description","")[:900] or "Public-source signal discovered."
    new.append({
      "date":now.strftime("%Y-%m-%d"),
      "company":co,
      "impact":impact(ar,r["title"]),
      "confidence":"Medium" if r["source"]!="official website" else "High",
      "area":ar,
      "title":r["title"],
      "summary":summary,
      "why":"Fresh public-source signal relevant to the tracked competitive landscape.",
      "sales":"Use as a discovery signal. Open the source and verify the exact claim, launch status, market availability, regulatory status and timing before customer-facing use.",
      "source":r.get("link",""),
      "source_type":r["source"],
      "fact_or_inference":"fact"
    })

by={}
for u in old.get("updates",[]):
    if u.get("source"): by[u["source"]]=u
for u in new:
    if u.get("source"): by[u["source"]]=u
merged=sorted(by.values(),key=lambda x:(x.get("date",""),x.get("company","")),reverse=True)[:800]

out={
 "generated_at":now.isoformat(),
 "cutoff":now.strftime("%Y-%m-%d"),
 "status":"free-deep-public-source-monitor",
 "new_signals_today":len(new),
 "source_channels":["Official website","Official newsroom","Google News RSS","LinkedIn discovery","YouTube discovery","Taiwan/APAC news discovery"],
 "notes":"Free daily collection layer. Direct automated access to LinkedIn/social platforms can be restricted; social results are therefore treated as discovery signals and must be verified at the source.",
 "updates":merged,
 "competitors":config["competitors"],
 "products":old.get("products",[])
}
DATA.write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding="utf-8")
print("Collected",len(items),"raw signals; wrote",len(new),"new records; retained",len(merged))
