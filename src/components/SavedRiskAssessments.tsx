
import { Button } from "@/components/ui/button";
import { RiskAssessmentData } from "./RiskAssessment";
import { getDepartmentName, getValueChainStepName } from "@/utils/translations";

const getTermLabel = (term: string): string => {
  switch (term) {
    case "short":
      return "Kısa (0-5 Yıl)";
    case "medium":
      return "Orta (5-10 Yıl)";
    case "long":
      return "Uzun (10-25)";
    default:
      return "";
  }
};

interface SavedRiskAssessmentsProps {
  assessments: RiskAssessmentData[];
  onDelete: (index: number) => void;
}

export const SavedRiskAssessments = ({ assessments, onDelete }: SavedRiskAssessmentsProps) => {
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
                Vade: {getTermLabel(assessment.term)}
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
