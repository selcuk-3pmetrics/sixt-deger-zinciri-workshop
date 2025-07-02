export const departments = {
  "top-management": "Üst Yönetim",
  "internal-audit": "İç Denetim",
  "risk-compliance": "Risk Yönetimi ve Uyum",
  "actuarial": "Aktüerya",
  "internal-control": "İç kontrol",
  "auto-technical": "Oto Teknik Genel",
  "non-auto-technical": "Oto Dışı Teknik ve Reasürans",
  "damage-legal": "Hasar, Hukuk ve Rucu",
  "financial": "Mali İşler",
  "corporate-sales": "Kurumsal Satış ve Alternatif Dağıtım Kanalları",
  "it": "Bilgi Tekonolojileri",
  "continuous-improvement": "Sürekli İyileştirme ve Operasyonel Mükemmellik",
  "hr-admin": "İnsan Kaynakları&İdari İşler",
  "reporting": "Raporlama",
  "bank-reinsurance": "Banka Reasürans",
  "business-development": "İş Geliştirme ve Strateji",
  "turkey-regions": "Türkiye Bölgeler Acenteler Satış ve Pazarlama"
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
