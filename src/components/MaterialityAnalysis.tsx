import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ValueChain, valueChainSteps } from "./ValueChain";
import { DepartmentSelector } from "./DepartmentSelector";
import { MaterialitySelector } from "./MaterialitySelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type MaterialityData = {
  department: string;
  mainCategory: string;
  materialityItem: string;
  valueChainStep: string;
  materialityDegree: number;
  date: string;
};

interface MaterialityAnalysisProps {
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

export const MaterialityAnalysis = ({ selectedDepartment }: MaterialityAnalysisProps) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedMaterialityItem, setSelectedMaterialityItem] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [materialityDegree, setMaterialityDegree] = useState<number | null>(null);
  const [savedAssessments, setSavedAssessments] = useState<MaterialityData[]>([]);

  useState(() => {
    const savedData = localStorage.getItem('materialityAssessments');
    if (savedData) {
      setSavedAssessments(JSON.parse(savedData));
    }
  });

  const handleSave = () => {
    if (!selectedDepartment || !selectedMainCategory || !selectedMaterialityItem || !selectedStep || !materialityDegree) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }

    const newAssessment: MaterialityData = {
      department: selectedDepartment,
      mainCategory: selectedMainCategory,
      materialityItem: selectedMaterialityItem,
      valueChainStep: selectedStep,
      materialityDegree: materialityDegree,
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

  return (
    <div className="p-4 space-y-4">
      <MaterialitySelector
        selectedMainCategory={selectedMainCategory}
        selectedMaterialityItem={selectedMaterialityItem}
        onMainCategorySelect={setSelectedMainCategory}
        onMaterialityItemSelect={setSelectedMaterialityItem}
      />

      {selectedMainCategory && selectedMaterialityItem && (
        <>
          <ValueChain
            selectedStep={selectedStep}
            onSelect={setSelectedStep}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Önemlilik Derecesi (1-10)</label>
            <Select
              value={materialityDegree?.toString()}
              onValueChange={(value) => setMaterialityDegree(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Önemlilik derecesi seçin" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <div className="flex gap-2">
        <Button onClick={handleSave} className="flex-1">
          Kaydet
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
                    {getDepartmentName(assessment.department)} - {assessment.mainCategory}
                  </p>
                  <p className="text-sm text-gray-600">
                    Değer Zinciri: {getValueChainStepName(assessment.valueChainStep)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Önemlilik Derecesi: {assessment.materialityDegree}
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