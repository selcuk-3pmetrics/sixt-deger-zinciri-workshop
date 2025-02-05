
export const departments = {
  management: "Yönetim-Strateji",
  audit: "İç Denetim",
  factory: "Fabrika Yönetimi",
  quality: "Kalite",
  sales: "Satış",
  purchasing: "Satın Alma",
  logistics: "Lojistik",
  finance: "Finans",
  hr: "İnsan Kaynakları",
  it: "Bilgi Teknolojileri",
  communications: "Kurumsal İletişim",
  environment: "Çevre Yönetimi"
} as const;

export const valueChainSteps = {
  "vehicle-supply": "Araç Tedariği",
  "fleet-management": "Filo Yönetimi",
  "reservation-rental": "Rezervasyon ve Kiralama",
  "customer-service": "Müşteri Hizmetleri",
  "marketing-sales": "Pazarlama ve Satış",
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
