import { useState } from "react";
import { DepartmentSelector } from "@/components/DepartmentSelector";
import { RiskSelector } from "@/components/RiskSelector";
import { ValueChain } from "@/components/ValueChain";
import { RiskAssessment } from "@/components/RiskAssessment";
import { MaterialityAnalysis } from "@/components/MaterialityAnalysis";
import { OpportunityAnalysis } from "@/components/OpportunityAnalysis";
import { ClimateRiskSelector } from "@/components/ClimateRiskSelector";
import { ClimateRiskAssessment } from "@/components/ClimateRiskAssessment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import * as XLSX from 'xlsx';
import { toast } from "sonner";
import { getDepartmentName, getValueChainStepName } from "@/utils/translations";

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedClimateRisk, setSelectedClimateRisk] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [financialImpact, setFinancialImpact] = useState<string>("");

  const handleRiskCalculation = (score: number, impact: string) => {
    setRiskScore(score);
    setFinancialImpact(impact);
  };

  const handleExportAll = () => {
    const riskData = JSON.parse(localStorage.getItem('riskAssessments') || '[]');
    const climateRiskData = JSON.parse(localStorage.getItem('climateRiskAssessments') || '[]');
    const materialityData = JSON.parse(localStorage.getItem('materialityAssessments') || '[]');
    const opportunityData = JSON.parse(localStorage.getItem('opportunityAssessments') || '[]');

    if (riskData.length === 0 && materialityData.length === 0 && opportunityData.length === 0 && climateRiskData.length === 0) {
      toast.error("Dışa aktarılacak değerlendirme bulunamadı");
      return;
    }

    const wb = XLSX.utils.book_new();

    if (riskData.length > 0) {
      const formattedRiskData = riskData.map((assessment: any) => ({
        'Departman': getDepartmentName(assessment.department),
        'Risk': assessment.risk,
        'Değer Zinciri Adımı': getValueChainStepName(assessment.valueChainStep),
        'Olasılık': assessment.probability,
        'Sıklık': assessment.frequency,
        'Şiddet': assessment.severity,
        'Risk Skoru': assessment.riskScore,
        'Finansal Etki': assessment.financialImpact,
        'Tarih': new Date(assessment.date).toLocaleDateString('tr-TR')
      }));
      const ws1 = XLSX.utils.json_to_sheet(formattedRiskData);
      XLSX.utils.book_append_sheet(wb, ws1, "Risk Değerlendirmeleri");
    }

    if (climateRiskData.length > 0) {
      const formattedClimateData = climateRiskData.map((assessment: any) => ({
        'Departman': getDepartmentName(assessment.department),
        'Risk': assessment.risk,
        'Değer Zinciri Adımı': getValueChainStepName(assessment.valueChainStep),
        'Vade': assessment.term === 'short' ? 'Kısa (0-5 Yıl)' : 
              assessment.term === 'medium' ? 'Orta (5-10 Yıl)' : 
              'Uzun (10-25 Yıl)',
        'Olasılık': assessment.probability,
        'Sıklık': assessment.frequency,
        'Şiddet': assessment.severity,
        'Risk Skoru': assessment.riskScore,
        'Finansal Etki': assessment.financialImpact,
        'Tarih': new Date(assessment.date).toLocaleDateString('tr-TR')
      }));
      const ws2 = XLSX.utils.json_to_sheet(formattedClimateData);
      XLSX.utils.book_append_sheet(wb, ws2, "İklim Riski Değerlendirmeleri");
    }

    if (materialityData.length > 0) {
      const formattedMaterialityData = materialityData.map((assessment: any) => ({
        'Departman': assessment.department,
        'Ana Kategori': assessment.mainCategory,
        'Önemlilik Maddesi': assessment.materialityItem,
        'Değer Zinciri Adımı': assessment.valueChainStep,
        'Önemlilik Derecesi': assessment.materialityDegree,
        'Tarih': new Date(assessment.date).toLocaleDateString('tr-TR')
      }));
      const ws3 = XLSX.utils.json_to_sheet(formattedMaterialityData);
      XLSX.utils.book_append_sheet(wb, ws3, "Önemlilik Analizleri");
    }

    if (opportunityData.length > 0) {
      const formattedOpportunityData = opportunityData.map((assessment: any) => ({
        'Departman': getDepartmentName(assessment.department),
        'Ana Kategori': assessment.mainCategory,
        'Fırsat Maddesi': assessment.opportunityItem,
        'Değer Zinciri Adımı': getValueChainStepName(assessment.valueChainStep),
        'Tarih': new Date(assessment.date).toLocaleDateString('tr-TR')
      }));
      const ws4 = XLSX.utils.json_to_sheet(formattedOpportunityData);
      XLSX.utils.book_append_sheet(wb, ws4, "Fırsat Analizleri");
    }

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
        <Tabs defaultValue="risk" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="risk">Risk Değerlendirmesi</TabsTrigger>
            <TabsTrigger value="climate">İklim Riskleri</TabsTrigger>
            <TabsTrigger value="opportunity">Fırsat Analizi</TabsTrigger>
            <TabsTrigger value="materiality">Önemlilik Analizi</TabsTrigger>
          </TabsList>
          
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

          <TabsContent value="climate" className="space-y-8">
            <ClimateRiskSelector
              selectedRisk={selectedClimateRisk}
              selectedTerm={selectedTerm}
              onSelect={setSelectedClimateRisk}
              onTermSelect={setSelectedTerm}
            />
            
            {selectedClimateRisk && (
              <ValueChain
                selectedStep={selectedStep}
                onSelect={setSelectedStep}
              />
            )}
            
            {selectedClimateRisk && (
              <ClimateRiskAssessment 
                onCalculate={handleRiskCalculation}
                selectedDepartment={selectedDepartment}
                selectedRisk={selectedClimateRisk}
                selectedStep={selectedStep}
                selectedTerm={selectedTerm}
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

          <TabsContent value="opportunity">
            <OpportunityAnalysis selectedDepartment={selectedDepartment} />
          </TabsContent>
          
          <TabsContent value="materiality">
            <MaterialityAnalysis selectedDepartment={selectedDepartment} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Index;
