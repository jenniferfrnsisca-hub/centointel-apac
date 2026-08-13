const COMPETITORS = [
  {
    "name": "Guardant Health",
    "region": "Global",
    "focus": "Oncology / liquid biopsy",
    "priority": "High",
    "website": "https://guardanthealth.com/",
    "news": "https://guardanthealth.com/newsroom/",
    "linkedin": "https://www.linkedin.com/company/guardanthealth/"
  },
  {
    "name": "SYNLAB",
    "region": "Global",
    "focus": "Medical diagnostics / specialty testing",
    "priority": "Medium",
    "website": "https://www.synlab.com/",
    "news": "https://www.synlab.com/news/",
    "linkedin": "https://www.linkedin.com/company/synlab-international/"
  },
  {
    "name": "Myriad Genetics",
    "region": "Global",
    "focus": "Hereditary cancer / molecular diagnostics",
    "priority": "High",
    "website": "https://www.myriad.com/",
    "news": "https://www.myriad.com/news/",
    "linkedin": "https://www.linkedin.com/company/myriad-genetics/"
  },
  {
    "name": "Labcorp",
    "region": "Global",
    "focus": "Laboratory diagnostics / genomics",
    "priority": "High",
    "website": "https://www.labcorp.com/",
    "news": "https://www.labcorp.com/newsroom",
    "linkedin": "https://www.linkedin.com/company/labcorp/"
  },
  {
    "name": "Igenomix / Vitrolife",
    "region": "Global",
    "focus": "Reproductive genetics",
    "priority": "Medium",
    "website": "https://www.igenomix.com/",
    "news": "https://www.vitrolife.com/news/",
    "linkedin": "https://www.linkedin.com/company/igenomix/"
  },
  {
    "name": "Macrogen",
    "region": "Global",
    "focus": "NGS / genomics / precision medicine",
    "priority": "High",
    "website": "https://www.macrogen.com/",
    "news": "https://www.macrogen.com/en/news/",
    "linkedin": "https://www.linkedin.com/company/macrogen/"
  },
  {
    "name": "CeGaT",
    "region": "Global",
    "focus": "Rare disease / WES / WGS / oncology",
    "priority": "High",
    "website": "https://www.cegat.com/",
    "news": "https://cegat.com/about-us/news-publications/news/",
    "linkedin": "https://www.linkedin.com/company/cegat-gmbh/"
  },
  {
    "name": "OncoDNA",
    "region": "Global",
    "focus": "Molecular oncology / precision medicine",
    "priority": "High",
    "website": "https://oncodna.com/",
    "news": "https://oncodna.com/news/",
    "linkedin": "https://www.linkedin.com/company/oncodna/"
  },
  {
    "name": "NeoGenomics",
    "region": "Global",
    "focus": "Oncology diagnostics",
    "priority": "High",
    "website": "https://www.neogenomics.com/",
    "news": "https://ir.neogenomics.com/news-events/news-releases",
    "linkedin": "https://www.linkedin.com/company/neogenomics/"
  },
  {
    "name": "Fulgent Genetics",
    "region": "Global",
    "focus": "Rare disease / WGS / oncology",
    "priority": "High",
    "website": "https://www.fulgentgenetics.com/",
    "news": "https://ir.fulgentgenetics.com/news-events/news-releases",
    "linkedin": "https://www.linkedin.com/company/fulgentgenetics/"
  },
  {
    "name": "GeneDx",
    "region": "Global",
    "focus": "Rare disease / exome / genome",
    "priority": "High",
    "website": "https://www.genedx.com/",
    "news": "https://www.genedx.com/news/",
    "linkedin": "https://www.linkedin.com/company/genedx/"
  },
  {
    "name": "Invitae",
    "region": "Global",
    "focus": "Inherited disease / genetic testing",
    "priority": "High",
    "website": "https://www.invitae.com/",
    "news": "https://www.invitae.com/en/news/",
    "linkedin": "https://www.linkedin.com/company/invitae/"
  },
  {
    "name": "SOPHiA GENETICS",
    "region": "Global",
    "focus": "Clinical genomics / bioinformatics",
    "priority": "High",
    "website": "https://www.sophiagenetics.com/",
    "news": "https://www.sophiagenetics.com/news/",
    "linkedin": "https://www.linkedin.com/company/sophiagenetics/"
  },
  {
    "name": "Natera",
    "region": "Global",
    "focus": "cfDNA / oncology / women’s health",
    "priority": "High",
    "website": "https://www.natera.com/",
    "news": "https://www.natera.com/company/news/",
    "linkedin": "https://www.linkedin.com/company/natera/"
  },
  {
    "name": "10x Genomics",
    "region": "Global / adjacent",
    "focus": "Single-cell / spatial / multiomics platform",
    "priority": "Medium",
    "website": "https://www.10xgenomics.com/",
    "news": "https://investors.10xgenomics.com/news/default.aspx",
    "linkedin": "https://www.linkedin.com/company/10xgenomics/"
  },
  {
    "name": "23andMe",
    "region": "Global / adjacent",
    "focus": "Consumer genetics / data",
    "priority": "Medium",
    "website": "https://www.23andme.com/",
    "news": "https://investors.23andme.com/news-releases/",
    "linkedin": "https://www.linkedin.com/company/23andme/"
  },
  {
    "name": "ACT Genomics / ACT Gene",
    "region": "Taiwan / APAC",
    "focus": "Precision oncology / NGS",
    "priority": "High",
    "website": "https://www.actgenomics.com/",
    "news": "https://www.actgenomics.com/news/",
    "linkedin": "https://www.linkedin.com/company/actgenomics/"
  },
  {
    "name": "TGIA / 台基盟生技",
    "region": "Taiwan / APAC",
    "focus": "WGS / rare disease / genomic data",
    "priority": "High",
    "website": "https://www.tgiainc.com/",
    "news": "https://www.tgiainc.com/news",
    "linkedin": "https://www.linkedin.com/company/tgia/"
  },
  {
    "name": "Gene Health / 台灣基康",
    "region": "Taiwan",
    "focus": "Genetic health / reproductive / preventive",
    "priority": "Medium",
    "website": "https://www.genehealth.com.tw/",
    "news": "https://www.genehealth.com.tw/news/",
    "linkedin": "https://www.linkedin.com/company/gene-health/"
  },
  {
    "name": "KimForest / 金萬林",
    "region": "Taiwan",
    "focus": "NGS / oncology / molecular diagnostics",
    "priority": "High",
    "website": "https://www.kimforest.com/",
    "news": "https://www.kimforest.com/news/",
    "linkedin": "https://www.linkedin.com/company/kimforest/"
  },
  {
    "name": "GGA",
    "region": "Taiwan",
    "focus": "Genomics / genetic testing",
    "priority": "Medium",
    "website": "https://www.gga.asia/",
    "news": "https://www.gga.asia/news/",
    "linkedin": "https://www.linkedin.com/search/results/companies/?keywords=GGA%20Taiwan%20genomics"
  },
  {
    "name": "Sofiva Genomics / 慧智基因",
    "region": "Taiwan / APAC",
    "focus": "Genetic testing / oncology / reproductive",
    "priority": "High",
    "website": "https://www.sofiva.com/",
    "news": "https://www.sofiva.com/news/",
    "linkedin": "https://www.linkedin.com/company/sofiva-genomics/"
  }
];
const PRODUCTS = [
  {
    "name": "CentoGenome",
    "focus": "Rare disease / WGS",
    "competitors": "GeneDx, Fulgent, CeGaT, Macrogen, Labcorp",
    "keywords": "Genome sequencing, interpretation, reanalysis, data"
  },
  {
    "name": "CentoXome",
    "focus": "Rare disease / WES",
    "competitors": "GeneDx, Fulgent, CeGaT, SYNLAB, Macrogen",
    "keywords": "Exome sequencing, interpretation, VUS/reanalysis"
  },
  {
    "name": "CentoDX / biodata",
    "focus": "Data / interpretation",
    "competitors": "GeneDx, ACT, TGIA, Macrogen, SOPHiA",
    "keywords": "Clinical interpretation, databases, phenotype/genotype data"
  },
  {
    "name": "MOx",
    "focus": "Molecular oncology",
    "competitors": "Guardant, NeoGenomics, OncoDNA, ACT, Natera",
    "keywords": "NGS oncology, biomarkers, monitoring, treatment guidance"
  },
  {
    "name": "Neuro",
    "focus": "Neurology / rare disease",
    "competitors": "GeneDx, CeGaT, Fulgent, Labcorp",
    "keywords": "Panels, exome/genome, phenotype-driven diagnosis"
  },
  {
    "name": "Pediatrics",
    "focus": "Pediatric genetics",
    "competitors": "GeneDx, Fulgent, CeGaT, Labcorp",
    "keywords": "Rare disease diagnosis, WES/WGS, reporting"
  },
  {
    "name": "Repeat expansion",
    "focus": "Rare disease",
    "competitors": "Fulgent, GeneDx, CeGaT",
    "keywords": "Repeat loci, expansion analysis, integrated reporting"
  },
  {
    "name": "VUS / reanalysis",
    "focus": "Interpretation",
    "competitors": "CeGaT, GeneDx, SOPHiA, Fulgent",
    "keywords": "Reassessment, reinterpretation, longitudinal analysis"
  }
];
const UPDATES = [
  {
    "date": "2026-08-12",
    "company": "Fulgent Genetics",
    "impact": "High",
    "confidence": "High",
    "area": "CentoGenome / repeat expansion",
    "title": "FulGenome publicly highlighted with 64 repeat expansions in a single assay",
    "summary": "Fulgent's current LinkedIn positioning highlights FulGenome with 64 repeat expansions in one assay, plus RISE and TruPath Genome offerings.",
    "why": "Directly relevant to rare-disease WGS differentiation and repeat-expansion conversations.",
    "sales": "Do not compete only on the number of loci. Ask whether the customer's priority is breadth, phenotype-driven interpretation, difficult-to-diagnose cases, reanalysis, or a broader genomic diagnostic workflow.",
    "source": "https://www.linkedin.com/company/fulgentgenetics/"
  },
  {
    "date": "2026-08-01",
    "company": "GeneDx",
    "impact": "High",
    "confidence": "High",
    "area": "CentoGenome / CentoXome / data",
    "title": "GeneDx continues positioning GenomeDx and ExomeDx around a large rare-disease dataset",
    "summary": "GeneDx publicly positions GenomeDx and ExomeDx alongside GeneDx Infinity, described by the company as a large rare-disease genomic dataset.",
    "why": "This is a direct competitive narrative against CENTOGENE's data and interpretation positioning.",
    "sales": "Emphasize the clinical value of genomic interpretation, rare-disease expertise, phenotype integration, reanalysis and the broader CENTOGENE ecosystem rather than making unsupported dataset-size comparisons.",
    "source": "https://www.linkedin.com/company/genedx/"
  },
  {
    "date": "2026-07-27",
    "company": "Labcorp",
    "impact": "Medium",
    "confidence": "High",
    "area": "Genetic health / screening",
    "title": "Labcorp launched Marker by Labcorp genetic health panel",
    "summary": "Labcorp announced a consumer genetic health panel covering hereditary genetic risk testing.",
    "why": "Shows continued expansion of large laboratory networks into genetic risk testing and direct-to-consumer access.",
    "sales": "Watch how large reference laboratories bundle genetic testing with existing healthcare relationships, access and distribution.",
    "source": "https://www.labcorp.com/newsroom"
  },
  {
    "date": "2026-07-22",
    "company": "Natera",
    "impact": "Medium",
    "confidence": "High",
    "area": "Oncology / cfDNA",
    "title": "Natera reported new Signatera evidence in Merkel cell carcinoma",
    "summary": "Natera announced new clinical evidence for Signatera MRD in a JAMA Dermatology study.",
    "why": "Reinforces the importance of clinical evidence and longitudinal monitoring in molecular oncology.",
    "sales": "For MOx discussions, ask whether the customer needs diagnostic profiling, treatment selection, monitoring, or MRD; these are different competitive use cases.",
    "source": "https://www.natera.com/company/news/"
  },
  {
    "date": "2026-07-28",
    "company": "Guardant Health",
    "impact": "High",
    "confidence": "High",
    "area": "MOx / screening",
    "title": "Guardant continues expanding liquid-biopsy and screening adoption",
    "summary": "Guardant's newsroom shows recent activity around Shield coverage and Guardant360 CDx regulatory expansion.",
    "why": "High visibility in blood-based oncology and screening can shape customer expectations around access, turnaround and clinical evidence.",
    "sales": "Position CENTOGENE according to the clinical question: broad genomic diagnosis and interpretation versus Guardant's strong liquid-biopsy and oncology-specific positioning.",
    "source": "https://guardanthealth.com/newsroom/"
  },
  {
    "date": "2026-06-09",
    "company": "10x Genomics",
    "impact": "Low",
    "confidence": "High",
    "area": "Adjacent technology",
    "title": "10x Genomics acquired Proteintech Genomics",
    "summary": "10x reported acquisition activity and continues to expand single-cell and spatial biology capabilities.",
    "why": "Not a direct clinical-testing competitor, but relevant as an adjacent technology and multiomics market signal.",
    "sales": "Track for future shifts toward integrated multiomic workflows and clinically linked data ecosystems.",
    "source": "https://investors.10xgenomics.com/news/default.aspx"
  },
  {
    "date": "2026-01-01",
    "company": "CeGaT",
    "impact": "High",
    "confidence": "High",
    "area": "VUS / reanalysis / WGS",
    "title": "CeGaT has been commercializing reassessment and whole-genome diagnostic capabilities",
    "summary": "CeGaT's public news and product positioning include reassessment of unresolved findings and whole-genome diagnostics.",
    "why": "Directly relevant to unresolved variants, reanalysis and WGS competitive conversations.",
    "sales": "Ask customers how unresolved findings are handled after the initial report and whether they expect structured reassessment over time.",
    "source": "https://cegat.com/about-us/news-publications/news/"
  }
];
