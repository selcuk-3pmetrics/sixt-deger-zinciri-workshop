
import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type ClimateRiskMapping = {
  area: string;
  risk: string;
};

const climateRiskMappings: ClimateRiskMapping[] = [
  { area: "İklim Fiziksel Riskleri", risk: "Aşırı Hava Olayları" },
  { area: "İklim Fiziksel Riskleri", risk: "Deniz Seviyesinde Yükselme" },
  { area: "İklim Fiziksel Riskleri", risk: "Heyelan" },
  { area: "İklim Fiziksel Riskleri", risk: "Meterolojik Kuraklık" },
  { area: "İklim Fiziksel Riskleri", risk: "Orman Yangınları" },
  { area: "İklim Fiziksel Riskleri", risk: "Ortalama Sıcaklık Artışı" },
  { area: "İklim Geçiş Riskleri", risk: "Düzenleyici Riskler" },
  { area: "İklim Geçiş Riskleri", risk: "Paydaş Beklentilerindeki Değişimler" },
  { area: "İklim Fiziksel Riskleri", risk: "Sıcak Hava Dalgaları" },
  { area: "İklim Geçiş Riskleri", risk: "Sürdürülebilir Finansman" },
  { area: "İklim Fiziksel Riskleri", risk: "Şiddetli Rüzgarlar" },
  { area: "İklim Fiziksel Riskleri", risk: "Şiddetli Yağışlar ve Sel" },
  { area: "İklim Fiziksel Riskleri", risk: "Tarım Üzerindeki Etkiler" },
  { area: "İklim Geçiş Riskleri", risk: "Yeşil Sertifikalar" }
];

const terms = [
  { value: "short", label: "Kısa (0-5 Yıl)" },
  { value: "medium", label: "Orta (5-10 Yıl)" },
  { value: "long", label: "Uzun (10-25)" }
];

interface ClimateRiskSelectorProps {
  selectedRisk: string | null;
  selectedTerm: string | null;
  onSelect: (risk: string) => void;
  onTermSelect: (term: string) => void;
}

export const ClimateRiskSelector = ({ 
  selectedRisk, 
  selectedTerm,
  onSelect,
  onTermSelect
}: ClimateRiskSelectorProps) => {
  const [selectedArea, setSelectedArea] = React.useState<string | null>(null);

  const filteredRisks = selectedArea
    ? climateRiskMappings.filter(rm => rm.area === selectedArea).map(rm => rm.risk).sort()
    : [];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">İklim Riski Seçimi</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Risk Alanı</label>
          <Select value={selectedArea || undefined} onValueChange={setSelectedArea}>
            <SelectTrigger className={cn("w-full")}>
              <SelectValue placeholder="Risk alanı seçiniz" />
            </SelectTrigger>
            <SelectContent>
              {Array.from(new Set(climateRiskMappings.map(rm => rm.area))).sort().map((area) => (
                <SelectItem key={area} value={area}>
                  {area}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedArea && (
          <div>
            <label className="text-sm font-medium mb-2 block">Risk</label>
            <Select value={selectedRisk || undefined} onValueChange={onSelect}>
              <SelectTrigger className={cn("w-full")}>
                <SelectValue placeholder="Risk seçiniz" />
              </SelectTrigger>
              <SelectContent>
                {filteredRisks.map((risk) => (
                  <SelectItem key={risk} value={risk}>
                    {risk}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {selectedRisk && (
          <div>
            <label className="text-sm font-medium mb-2 block">Vade</label>
            <Select value={selectedTerm || undefined} onValueChange={onTermSelect}>
              <SelectTrigger className={cn("w-full")}>
                <SelectValue placeholder="Vade seçiniz" />
              </SelectTrigger>
              <SelectContent>
                {terms.map((term) => (
                  <SelectItem key={term.value} value={term.value}>
                    {term.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};
