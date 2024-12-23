import { useState } from "react";
import { DepartmentSelector } from "@/components/DepartmentSelector";
import { RiskSelector } from "@/components/RiskSelector";
import { ValueChain } from "@/components/ValueChain";
import { RiskAssessment } from "@/components/RiskAssessment";

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [financialImpact, setFinancialImpact] = useState<string>("");

  const handleRiskCalculation = (score: number, impact: string) => {
    setRiskScore(score);
    setFinancialImpact(impact);
  };

  const getRiskDegree = (score: number): string => {
    if (score > 400) return "Çok Yüksek";
    if (score > 200) return "Yüksek";
    if (score > 70) return "Orta";
    if (score > 20) return "Düşük";
    return "Çok Düşük";
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-brand-teal">Risk Değerlendirme Sistemi</h1>
      
      <div className="space-y-8">
        <DepartmentSelector
          selectedDepartment={selectedDepartment}
          onSelect={setSelectedDepartment}
        />
        
        {selectedDepartment && (
          <RiskSelector
            selectedRisk={selectedRisk}
            onSelect={setSelectedRisk}
          />
        )}
        
        {selectedDepartment && selectedRisk && (
          <ValueChain
            selectedStep={selectedStep}
            onSelect={setSelectedStep}
          />
        )}
        
        {selectedRisk && selectedDepartment && (
          <RiskAssessment 
            onCalculate={handleRiskCalculation}
            selectedDepartment={selectedDepartment}
            selectedRisk={selectedRisk}
            selectedStep={selectedStep}
          />
        )}
        
        {riskScore !== null && (
          <div className="p-4 bg-gradient-to-r from-brand-mint/10 to-brand-teal/10 rounded-lg border border-brand-teal/20">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-brand-teal">Risk Skoru</h3>
                <p className="text-2xl font-bold text-brand-teal">
                  {riskScore.toFixed(2)}
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-brand-teal">Risk Derecesi</h3>
                <p className="text-lg text-brand-mint">
                  {getRiskDegree(riskScore)}
                </p>
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-2 text-brand-teal">Finansal Etki</h3>
                <p className="text-lg text-brand-mint">{financialImpact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;