
export const departments = {
  management: "Yönetim-Strateji",
  accounting: "Muhasebe",
  finance: "Finans",
  budgeting: "Bütçe ve Raporlama",
  investor: "Yatırımcı İlişkileri",
  marketing: "Pazarlama",
  hr: "İnsan Kaynakları ve İdari İşler",
  it: "Bilgi Tekonolojileri",
  vehicle: "Araç Satın Alma",
  used: "2.El Araç Yönetimi",
  maintenance: "Araç Bakım & Hasar Yönetimi",
  sales: "Satış ve İş Geliştirme"
} as const;

export const valueChainSteps = {
  "product-development": "Ürün Geliştirme",
  "marketing": "Pazarlama", 
  "insurance-sales": "Sigorta Alımı/Satışı",
  "risk-analysis": "Risk Analizi ve Yönetimi",
  "customer-service": "Müşteri Hizmetleri",
  "technology-it": "Teknoloji ve Bilgi Sistemleri",
  "legal-compliance": "Hukuk ve Uyumluluk",
  "finance-accounting": "Finans ve Muhasebe"
} as const;

export const getDepartmentName = (departmentId: string): string => {
  return departments[departmentId as keyof typeof departments] || departmentId;
};

export const getValueChainStepName = (stepId: string): string => {
  return valueChainSteps[stepId as keyof typeof valueChainSteps] || stepId;
};
