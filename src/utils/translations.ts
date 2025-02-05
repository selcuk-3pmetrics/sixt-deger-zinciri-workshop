
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
