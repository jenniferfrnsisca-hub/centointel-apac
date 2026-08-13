const COMPETITORS = [
  {
    "name": "Guardant Health",
    "region": "Global",
    "focus": "Oncology / liquid biopsy",
    "priority": "High",
    "website": "https://guardanthealth.com/",
    "news": "https://guardanthealth.com/newsroom/",
    "linkedin": "https://www.linkedin.com/company/guardanthealth/",
    "channels": {
      "website": "https://guardanthealth.com/",
      "news": "https://guardanthealth.com/newsroom/",
      "linkedin": "https://www.linkedin.com/company/guardanthealth/",
      "x": "https://x.com/GuardantHealth",
      "youtube": "https://www.youtube.com/@GuardantHealth"
    }
  },
  {
    "name": "SYNLAB",
    "region": "Global",
    "focus": "Medical diagnostics / specialty testing",
    "priority": "Medium",
    "website": "https://www.synlab.com/",
    "news": "https://www.synlab.com/news/",
    "linkedin": "https://www.linkedin.com/company/synlab-international/",
    "channels": {
      "website": "https://www.synlab.com/",
      "news": "https://www.synlab.com/news/",
      "linkedin": "https://www.linkedin.com/company/synlab-international/",
      "x": "",
      "youtube": "https://www.youtube.com/@SYNLAB"
    }
  },
  {
    "name": "Myriad Genetics",
    "region": "Global",
    "focus": "Hereditary cancer / molecular diagnostics",
    "priority": "High",
    "website": "https://www.myriad.com/",
    "news": "https://www.myriad.com/news/",
    "linkedin": "https://www.linkedin.com/company/myriad-genetics/",
    "channels": {
      "website": "https://www.myriad.com/",
      "news": "https://www.myriad.com/news/",
      "linkedin": "https://www.linkedin.com/company/myriad-genetics/",
      "x": "https://x.com/MyriadGenetics",
      "youtube": "https://www.youtube.com/@MyriadGenetics"
    }
  },
  {
    "name": "Labcorp",
    "region": "Global",
    "focus": "Laboratory diagnostics / genomics",
    "priority": "High",
    "website": "https://www.labcorp.com/",
    "news": "https://www.labcorp.com/newsroom",
    "linkedin": "https://www.linkedin.com/company/labcorp/",
    "channels": {
      "website": "https://www.labcorp.com/",
      "news": "https://www.labcorp.com/newsroom",
      "linkedin": "https://www.linkedin.com/company/labcorp/",
      "x": "https://x.com/labcorp",
      "youtube": "https://www.youtube.com/@Labcorp"
    }
  },
  {
    "name": "Igenomix / Vitrolife",
    "region": "Global",
    "focus": "Reproductive genetics",
    "priority": "Medium",
    "website": "https://www.igenomix.com/",
    "news": "https://www.vitrolife.com/news/",
    "linkedin": "https://www.linkedin.com/company/igenomix/",
    "channels": {
      "website": "https://www.igenomix.com/",
      "news": "https://www.vitrolife.com/news/",
      "linkedin": "https://www.linkedin.com/company/igenomix/",
      "x": "https://x.com/igenomix",
      "youtube": "https://www.youtube.com/@VitrolifeGroup"
    }
  },
  {
    "name": "Macrogen",
    "region": "Global",
    "focus": "NGS / genomics / precision medicine",
    "priority": "High",
    "website": "https://www.macrogen.com/",
    "news": "https://www.macrogen.com/en/news/",
    "linkedin": "https://www.linkedin.com/company/macrogen/",
    "channels": {
      "website": "https://www.macrogen.com/",
      "news": "https://www.macrogen.com/en/news/",
      "linkedin": "https://www.linkedin.com/company/macrogen/",
      "x": "",
      "youtube": "https://www.youtube.com/@macrogeninc"
    }
  },
  {
    "name": "CeGaT",
    "region": "Global",
    "focus": "Rare disease / WES / WGS / oncology",
    "priority": "High",
    "website": "https://www.cegat.com/",
    "news": "https://cegat.com/about-us/news-publications/news/",
    "linkedin": "https://www.linkedin.com/company/cegat-gmbh/",
    "channels": {
      "website": "https://www.cegat.com/",
      "news": "https://cegat.com/about-us/news-publications/news/",
      "linkedin": "https://www.linkedin.com/company/cegat-gmbh/",
      "x": "",
      "youtube": "https://www.youtube.com/@CeGaT"
    }
  },
  {
    "name": "OncoDNA",
    "region": "Global",
    "focus": "Molecular oncology / precision medicine",
    "priority": "High",
    "website": "https://oncodna.com/",
    "news": "https://oncodna.com/news/",
    "linkedin": "https://www.linkedin.com/company/oncodna/",
    "channels": {
      "website": "https://oncodna.com/",
      "news": "https://oncodna.com/news/",
      "linkedin": "https://www.linkedin.com/company/oncodna/",
      "x": "https://x.com/OncoDNA",
      "youtube": "https://www.youtube.com/@OncoDNA"
    }
  },
  {
    "name": "NeoGenomics",
    "region": "Global",
    "focus": "Oncology diagnostics",
    "priority": "High",
    "website": "https://www.neogenomics.com/",
    "news": "https://ir.neogenomics.com/news-events/news-releases",
    "linkedin": "https://www.linkedin.com/company/neogenomics/",
    "channels": {
      "website": "https://www.neogenomics.com/",
      "news": "https://ir.neogenomics.com/news-events/news-releases",
      "linkedin": "https://www.linkedin.com/company/neogenomics/",
      "x": "https://x.com/NeoGenomics",
      "youtube": "https://www.youtube.com/@NeoGenomics"
    }
  },
  {
    "name": "Fulgent Genetics",
    "region": "Global",
    "focus": "Rare disease / WGS / oncology",
    "priority": "High",
    "website": "https://www.fulgentgenetics.com/",
    "news": "https://ir.fulgentgenetics.com/news-events/news-releases",
    "linkedin": "https://www.linkedin.com/company/fulgentgenetics/",
    "channels": {
      "website": "https://www.fulgentgenetics.com/",
      "news": "https://ir.fulgentgenetics.com/news-events/news-releases",
      "linkedin": "https://www.linkedin.com/company/fulgentgenetics/",
      "x": "https://x.com/FulgentGenetics",
      "youtube": "https://www.youtube.com/@FulgentGenetics"
    }
  },
  {
    "name": "GeneDx",
    "region": "Global",
    "focus": "Rare disease / exome / genome",
    "priority": "High",
    "website": "https://www.genedx.com/",
    "news": "https://www.genedx.com/news/",
    "linkedin": "https://www.linkedin.com/company/genedx/",
    "channels": {
      "website": "https://www.genedx.com/",
      "news": "https://www.genedx.com/news/",
      "linkedin": "https://www.linkedin.com/company/genedx/",
      "x": "",
      "youtube": "https://www.youtube.com/@GeneDx"
    }
  },
  {
    "name": "Invitae",
    "region": "Global",
    "focus": "Inherited disease / genetic testing",
    "priority": "High",
    "website": "https://www.invitae.com/",
    "news": "https://www.invitae.com/en/news/",
    "linkedin": "https://www.linkedin.com/company/invitae/",
    "channels": {
      "website": "https://www.invitae.com/",
      "news": "https://www.invitae.com/en/news/",
      "linkedin": "https://www.linkedin.com/company/invitae/",
      "x": "https://x.com/invitae",
      "youtube": "https://www.youtube.com/@Invitae"
    }
  },
  {
    "name": "SOPHiA GENETICS",
    "region": "Global",
    "focus": "Clinical genomics / bioinformatics",
    "priority": "High",
    "website": "https://www.sophiagenetics.com/",
    "news": "https://www.sophiagenetics.com/news/",
    "linkedin": "https://www.linkedin.com/company/sophiagenetics/",
    "channels": {
      "website": "https://www.sophiagenetics.com/",
      "news": "https://www.sophiagenetics.com/news/",
      "linkedin": "https://www.linkedin.com/company/sophiagenetics/",
      "x": "https://x.com/SOPHiAGENETICS",
      "youtube": "https://www.youtube.com/@SOPHiAGENETICS"
    }
  },
  {
    "name": "Natera",
    "region": "Global",
    "focus": "cfDNA / oncology / women’s health",
    "priority": "High",
    "website": "https://www.natera.com/",
    "news": "https://www.natera.com/company/news/",
    "linkedin": "https://www.linkedin.com/company/natera/",
    "channels": {
      "website": "https://www.natera.com/",
      "news": "https://www.natera.com/company/news/",
      "linkedin": "https://www.linkedin.com/company/natera/",
      "x": "https://x.com/Natera",
      "youtube": "https://www.youtube.com/@NateraInc"
    }
  },
  {
    "name": "10x Genomics",
    "region": "Global / adjacent",
    "focus": "Single-cell / spatial / multiomics platform",
    "priority": "Medium",
    "website": "https://www.10xgenomics.com/",
    "news": "https://investors.10xgenomics.com/news/default.aspx",
    "linkedin": "https://www.linkedin.com/company/10xgenomics/",
    "channels": {
      "website": "https://www.10xgenomics.com/",
      "news": "https://investors.10xgenomics.com/news/default.aspx",
      "linkedin": "https://www.linkedin.com/company/10xgenomics/",
      "x": "https://x.com/10xGenomics",
      "youtube": "https://www.youtube.com/@10xGenomics"
    }
  },
  {
    "name": "23andMe",
    "region": "Global / adjacent",
    "focus": "Consumer genetics / data",
    "priority": "Medium",
    "website": "https://www.23andme.com/",
    "news": "https://investors.23andme.com/news-releases/",
    "linkedin": "https://www.linkedin.com/company/23andme/",
    "channels": {
      "website": "https://www.23andme.com/",
      "news": "https://investors.23andme.com/news-releases/",
      "linkedin": "https://www.linkedin.com/company/23andme/",
      "x": "https://x.com/23andMe",
      "youtube": "https://www.youtube.com/@23andMe"
    }
  },
  {
    "name": "ACT Genomics / ACT Gene",
    "region": "Taiwan / APAC",
    "focus": "Precision oncology / NGS",
    "priority": "High",
    "website": "https://www.actgenomics.com/",
    "news": "https://www.actgenomics.com/news/",
    "linkedin": "https://www.linkedin.com/company/actgenomics/",
    "channels": {
      "website": "https://www.actgenomics.com/",
      "news": "https://www.actgenomics.com/news/",
      "linkedin": "https://www.linkedin.com/company/actgenomics/",
      "x": "https://x.com/ACTGenomics",
      "youtube": "https://www.youtube.com/@ACTGenomics"
    }
  },
  {
    "name": "TGIA / 台基盟生技",
    "region": "Taiwan / APAC",
    "focus": "WGS / rare disease / genomic data",
    "priority": "High",
    "website": "https://www.tgiainc.com/",
    "news": "https://www.tgiainc.com/news",
    "linkedin": "https://www.linkedin.com/company/tgia/",
    "channels": {
      "website": "https://www.tgiainc.com/",
      "news": "https://www.tgiainc.com/news",
      "linkedin": "https://www.linkedin.com/company/tgia/",
      "x": "",
      "youtube": ""
    }
  },
  {
    "name": "Gene Health / 台灣基康",
    "region": "Taiwan",
    "focus": "Genetic health / reproductive / preventive",
    "priority": "Medium",
    "website": "https://www.genehealth.com.tw/",
    "news": "https://www.genehealth.com.tw/news/",
    "linkedin": "https://www.linkedin.com/company/gene-health/",
    "channels": {
      "website": "https://www.genehealth.com.tw/",
      "news": "https://www.genehealth.com.tw/news/",
      "linkedin": "https://www.linkedin.com/company/gene-health/",
      "x": "",
      "youtube": ""
    }
  },
  {
    "name": "KimForest / 金萬林",
    "region": "Taiwan",
    "focus": "NGS / oncology / molecular diagnostics",
    "priority": "High",
    "website": "https://www.kimforest.com/",
    "news": "https://www.kimforest.com/news/",
    "linkedin": "https://www.linkedin.com/company/kimforest/",
    "channels": {
      "website": "https://www.kimforest.com/",
      "news": "https://www.kimforest.com/news/",
      "linkedin": "https://www.linkedin.com/company/kimforest/",
      "x": "",
      "youtube": "https://www.youtube.com/@kimforest"
    }
  },
  {
    "name": "GGA",
    "region": "Taiwan",
    "focus": "Genomics / genetic testing",
    "priority": "Medium",
    "website": "https://www.gga.asia/",
    "news": "https://www.gga.asia/news/",
    "linkedin": "https://www.linkedin.com/search/results/companies/?keywords=GGA%20Taiwan%20genomics",
    "channels": {
      "website": "https://www.gga.asia/",
      "news": "https://www.gga.asia/news/",
      "linkedin": "https://www.linkedin.com/search/results/companies/?keywords=GGA%20Taiwan%20genomics",
      "x": "",
      "youtube": ""
    }
  },
  {
    "name": "Sofiva Genomics / 慧智基因",
    "region": "Taiwan / APAC",
    "focus": "Genetic testing / oncology / reproductive",
    "priority": "High",
    "website": "https://www.sofiva.com/",
    "news": "https://www.sofiva.com/news/",
    "linkedin": "https://www.linkedin.com/company/sofiva-genomics/",
    "channels": {
      "website": "https://www.sofiva.com/",
      "news": "https://www.sofiva.com/news/",
      "linkedin": "https://www.linkedin.com/company/sofiva-genomics/",
      "x": "",
      "youtube": ""
    }
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
const UPDATES = [];
