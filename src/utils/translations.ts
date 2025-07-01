export const departments = {
  damage: "Hasar (Tazminat) Departmanı",
  underwriting: "Underwriting (Risk Değerlendirme) Departmanı",
  actuarial: "Aktüerya Departmanı",
  "sales-marketing": "Satış ve Pazarlama Departmanı",
  "customer-service": "Müşteri Hizmetleri Departmanı",
  "finance-accounting": "Finans ve Muhasebe Departmanı",
  it: "Bilgi Tekonolojileri (IT) Departmanı",
  "risk-compliance": "Risk Yönetimi ve Uyum (Compliance) Departmanı",
  "product-development": "Ürün Geliştirme Departmanı",
  hr: "İnsan Kaynakları (İK) Departmanı"
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
