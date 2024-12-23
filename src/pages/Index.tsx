import { useState } from "react";
import { DepartmentSelector } from "@/components/DepartmentSelector";
import { ValueChain } from "@/components/ValueChain";
import { RiskAssessment } from "@/components/RiskAssessment";

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [riskScore, setRiskScore] = useState<number | null>(null);

  const handleRiskCalculation = (score: number) => {
    setRiskScore(score);
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Risk Değerlendirme Sistemi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <DepartmentSelector
            selectedDepartment={selectedDepartment}
            onSelect={setSelectedDepartment}
          />
          
          <RiskAssessment onCalculate={handleRiskCalculation} />
        </div>
        
        <div>
          <ValueChain
            selectedStep={selectedStep}
            onSelect={setSelectedStep}
          />
          
          {riskScore !== null && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Risk Skoru</h3>
              <p className="text-2xl font-bold">
                {riskScore.toFixed(2)}
                <span className="text-sm font-normal ml-2">
                  ({riskScore > 400 ? 'Çok Yüksek' :
                    riskScore > 200 ? 'Yüksek' :
                    riskScore > 70 ? 'Orta' :
                    riskScore > 20 ? 'Düşük' : 'Çok Düşük'})
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;