import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as XLSX from 'xlsx';
import { ValueChain } from "./ValueChain";
import { DepartmentSelector } from "./DepartmentSelector";
import { MaterialitySelector } from "./MaterialitySelector";

export type MaterialityData = {
  department: string;
  mainCategory: string;
  materialityItem: string;
  valueChainStep: string;
  date: string;
};

interface MaterialityAnalysisProps {
  selectedDepartment: string | null;
}

export const MaterialityAnalysis = ({ selectedDepartment }: MaterialityAnalysisProps) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedMaterialityItem, setSelectedMaterialityItem] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [savedAssessments, setSavedAssessments] = useState<MaterialityData[]>([]);

  // Load saved assessments from localStorage on component mount
  useState(() => {
    const savedData = localStorage.getItem('materialityAssessments');
    if (savedData) {
      setSavedAssessments(JSON.parse(savedData));
    }
  });

  const handleSave = () => {
    if (!selectedDepartment || !selectedMainCategory || !selectedMaterialityItem || !selectedStep) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }

    const newAssessment: MaterialityData = {
      department: selectedDepartment,
      mainCategory: selectedMainCategory,
      materialityItem: selectedMaterialityItem,
      valueChainStep: selectedStep,
      date: new Date().toISOString(),
    };

    setSavedAssessments(prev => [...prev, newAssessment]);
    localStorage.setItem('materialityAssessments', JSON.stringify([...savedAssessments, newAssessment]));
    toast.success("Önemlilik analizi kaydedildi");
  };

  const handleDelete = (index: number) => {
    setSavedAssessments(prev => {
      const newAssessments = prev.filter((_, i) => i !== index);
      localStorage.setItem('materialityAssessments', JSON.stringify(newAssessments));
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
    XLSX.utils.book_append_sheet(wb, ws, "Önemlilik Analizleri");
    XLSX.writeFile(wb, "onemlilik_analizleri.xlsx");
    toast.success("Değerlendirmeler Excel dosyası olarak indirildi");
  };

  return (
    <div className="p-4 space-y-4">
      <MaterialitySelector
        selectedMainCategory={selectedMainCategory}
        selectedMaterialityItem={selectedMaterialityItem}
        onMainCategorySelect={setSelectedMainCategory}
        onMaterialityItemSelect={setSelectedMaterialityItem}
      />

      {selectedMainCategory && selectedMaterialityItem && (
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
                  <p className="font-medium">{assessment.materialityItem}</p>
                  <p className="text-sm text-gray-600">
                    {assessment.department} - {assessment.mainCategory}
                  </p>
                  <p className="text-sm text-gray-600">
                    Değer Zinciri: {assessment.valueChainStep}
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