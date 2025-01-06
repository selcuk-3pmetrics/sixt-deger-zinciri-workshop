import { useState } from "react";
import { DepartmentSelector } from "@/components/DepartmentSelector";
import { RiskSelector } from "@/components/RiskSelector";
import { ValueChain } from "@/components/ValueChain";
import { RiskAssessment } from "@/components/RiskAssessment";
import { MaterialityAnalysis } from "@/components/MaterialityAnalysis";
import { OpportunityAnalysis } from "@/components/OpportunityAnalysis";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import * as XLSX from 'xlsx';
import { toast } from "sonner";

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

  const handleExportAll = () => {
    // Get data from localStorage
    const riskData = JSON.parse(localStorage.getItem('riskAssessments') || '[]');
    const materialityData = JSON.parse(localStorage.getItem('materialityAssessments') || '[]');
    const opportunityData = JSON.parse(localStorage.getItem('opportunityAssessments') || '[]');

    if (riskData.length === 0 && materialityData.length === 0 && opportunityData.length === 0) {
      toast.error("Dışa aktarılacak değerlendirme bulunamadı");
      return;
    }

    // Create workbook with multiple sheets
    const wb = XLSX.utils.book_new();

    // Add Risk Assessment sheet if there's data
    if (riskData.length > 0) {
      const ws1 = XLSX.utils.json_to_sheet(riskData);
      XLSX.utils.book_append_sheet(wb, ws1, "Risk Değerlendirmeleri");
    }

    // Add Materiality Analysis sheet if there's data
    if (materialityData.length > 0) {
      const ws2 = XLSX.utils.json_to_sheet(materialityData);
      XLSX.utils.book_append_sheet(wb, ws2, "Önemlilik Analizleri");
    }

    // Add Opportunity Analysis sheet if there's data
    if (opportunityData.length > 0) {
      const ws3 = XLSX.utils.json_to_sheet(opportunityData);
      XLSX.utils.book_append_sheet(wb, ws3, "Fırsat Analizleri");
    }

    // Export the workbook
    XLSX.writeFile(wb, "tum_degerlendirmeler.xlsx");
    toast.success("Tüm değerlendirmeler Excel dosyası olarak indirildi");
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center text-brand-teal">Değerlendirme Sistemi</h1>
        <Button onClick={handleExportAll} variant="outline" className="ml-auto">
          Excel'e Aktar
        </Button>
      </div>
      
      <DepartmentSelector
        selectedDepartment={selectedDepartment}
        onSelect={setSelectedDepartment}
      />

      {selectedDepartment && (
        <Tabs defaultValue="opportunity" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunity">Fırsat Analizi</TabsTrigger>
            <TabsTrigger value="materiality">Önemlilik Analizi</TabsTrigger>
            <TabsTrigger value="risk">Risk Değerlendirmesi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="opportunity">
            <OpportunityAnalysis selectedDepartment={selectedDepartment} />
          </TabsContent>

          <TabsContent value="materiality">
            <MaterialityAnalysis selectedDepartment={selectedDepartment} />
          </TabsContent>

          <TabsContent value="risk" className="space-y-8">
            <RiskSelector
              selectedRisk={selectedRisk}
              onSelect={setSelectedRisk}
            />
            
            {selectedRisk && (
              <ValueChain
                selectedStep={selectedStep}
                onSelect={setSelectedStep}
              />
            )}
            
            {selectedRisk && (
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
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Index;