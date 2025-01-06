import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as XLSX from 'xlsx';
import { ValueChain, valueChainSteps } from "./ValueChain";
import { OpportunitySelector } from "./OpportunitySelector";

export type OpportunityData = {
  department: string;
  mainCategory: string;
  opportunityItem: string;
  valueChainStep: string;
  date: string;
};

interface OpportunityAnalysisProps {
  selectedDepartment: string | null;
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
  const step = valueChainSteps.find(s => s.id === stepId);
  return step ? step.name : stepId;
};

export const OpportunityAnalysis = ({ selectedDepartment }: OpportunityAnalysisProps) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedOpportunityItem, setSelectedOpportunityItem] = useState<string | null>(null);
  const [customOpportunityItem, setCustomOpportunityItem] = useState<string>("");
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [savedAssessments, setSavedAssessments] = useState<OpportunityData[]>([]);

  useState(() => {
    const savedData = localStorage.getItem('opportunityAssessments');
    if (savedData) {
      setSavedAssessments(JSON.parse(savedData));
    }
  });

  const handleSave = () => {
    if (!selectedDepartment || !selectedMainCategory || !selectedStep) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }

    const assessmentsToSave: OpportunityData[] = [];

    // Save selected opportunity item if it exists and is not "Diğer"
    if (selectedOpportunityItem && selectedOpportunityItem !== "Diğer") {
      assessmentsToSave.push({
        department: selectedDepartment,
        mainCategory: selectedMainCategory,
        opportunityItem: selectedOpportunityItem,
        valueChainStep: selectedStep,
        date: new Date().toISOString(),
      });
    }

    // Save custom opportunity item if it exists
    if (customOpportunityItem.trim()) {
      assessmentsToSave.push({
        department: selectedDepartment,
        mainCategory: selectedMainCategory,
        opportunityItem: customOpportunityItem.trim(),
        valueChainStep: selectedStep,
        date: new Date().toISOString(),
      });
    }

    if (assessmentsToSave.length === 0) {
      toast.error("En az bir fırsat maddesi girilmelidir");
      return;
    }

    const newAssessments = [...savedAssessments, ...assessmentsToSave];
    setSavedAssessments(newAssessments);
    localStorage.setItem('opportunityAssessments', JSON.stringify(newAssessments));
    toast.success("Fırsat analizi kaydedildi");
  };

  const handleDelete = (index: number) => {
    setSavedAssessments(prev => {
      const newAssessments = prev.filter((_, i) => i !== index);
      localStorage.setItem('opportunityAssessments', JSON.stringify(newAssessments));
      return newAssessments;
    });
    toast.success("Kayıt silindi");
  };

  const handleExport = () => {
    if (savedAssessments.length === 0) {
      toast.error("Dışa aktarılacak değerlendirme bulunamadı");
      return;
    }

    const ws = XLSX.utils.json_to_sheet(savedAssessments);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Fırsat Analizleri");
    XLSX.writeFile(wb, "firsat_analizleri.xlsx");
    toast.success("Değerlendirmeler Excel dosyası olarak indirildi");
  };

  return (
    <div className="p-4 space-y-4">
      <OpportunitySelector
        selectedMainCategory={selectedMainCategory}
        selectedOpportunityItem={selectedOpportunityItem}
        onMainCategorySelect={setSelectedMainCategory}
        onOpportunityItemSelect={setSelectedOpportunityItem}
        customOpportunityItem={customOpportunityItem}
        onCustomOpportunityItemChange={setCustomOpportunityItem}
      />

      {(selectedMainCategory && selectedOpportunityItem) && (
        <ValueChain
          selectedStep={selectedStep}
          onSelect={setSelectedStep}
        />
      )}

      <div className="flex gap-2">
        <Button onClick={handleSave} className="flex-1">
          Kaydet
        </Button>
        <Button onClick={handleExport} variant="outline">
          Excel'e Aktar
        </Button>
      </div>

      {savedAssessments.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Kaydedilen Analizler</h3>
          <div className="space-y-4">
            {savedAssessments.map((assessment, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{assessment.opportunityItem}</p>
                  <p className="text-sm text-gray-600">
                    {getDepartmentName(assessment.department)} - {assessment.mainCategory}
                  </p>
                  <p className="text-sm text-gray-600">
                    Değer Zinciri: {getValueChainStepName(assessment.valueChainStep)}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(index)}
                >
                  Sil
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};