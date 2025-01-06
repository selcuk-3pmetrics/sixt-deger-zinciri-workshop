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
  "raw-materials": "Hammadde Temini",
  "production": "Üretim Süreci",
  "quality": "Kalite Kontrol",
  "storage": "Depolama",
  "logistics": "Lojistik",
  "sales-marketing": "Satış ve Pazarlama",
  "r-and-d": "Ar-Ge",
  "customer-relations": "Müşteri İlişkileri",
  "finance-legal": "Finans ve Hukuk"
} as const;

export const getDepartmentName = (departmentId: string): string => {
  return departments[departmentId as keyof typeof departments] || departmentId;
};

export const getValueChainStepName = (stepId: string): string => {
  return valueChainSteps[stepId as keyof typeof valueChainSteps] || stepId;
};