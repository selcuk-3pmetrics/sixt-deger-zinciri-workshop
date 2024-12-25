import { Button } from "@/components/ui/button";
import { RiskAssessmentData } from "./RiskAssessment";

interface SavedAssessmentsProps {
  assessments: RiskAssessmentData[];
  onDelete: (index: number) => void;
}

const getDepartmentName = (departmentId: string): string => {
  const departments = {
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
  };
  return departments[departmentId as keyof typeof departments] || departmentId;
};

const getValueChainStepName = (stepId: string): string => {
  const steps = {
    "raw-materials": "Hammadde Temini",
    "production": "Üretim Süreci",
    "quality": "Kalite Kontrol",
    "storage": "Depolama",
    "logistics": "Lojistik",
    "sales-marketing": "Satış ve Pazarlama",
    "r-and-d": "Ar-Ge",
    "customer-relations": "Müşteri İlişkileri",
    "finance-legal": "Finans ve Hukuk"
  };
  return steps[stepId as keyof typeof steps] || stepId;
};

export const SavedAssessments = ({ assessments, onDelete }: SavedAssessmentsProps) => {
  if (assessments.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Kaydedilen Değerlendirmeler</h3>
      <div className="space-y-4">
        {assessments.map((assessment, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{assessment.risk}</p>
              <p className="text-sm text-gray-600">
                {getDepartmentName(assessment.department)} - {getValueChainStepName(assessment.valueChainStep)}
              </p>
              <p className="text-sm text-gray-600">
                Risk Skoru: {assessment.riskScore.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                Finansal Etki: {assessment.financialImpact}
              </p>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(index)}
            >
              Sil
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};