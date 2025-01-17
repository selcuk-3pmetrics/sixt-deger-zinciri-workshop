import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type RiskMapping = {
  area: string;
  risk: string;
};

const riskMappings: RiskMapping[] = [
  { area: "İklim Fiziksel Riskleri", risk: "Enerji Maliyetlerinde Artış" },
  { area: "İklim Fiziksel Riskleri", risk: "Su Stresi ve Kıtlığı" },
  { area: "İklim Fiziksel Riskleri", risk: "Aşırı Hava Olayları" },
  { area: "İklim Fiziksel Riskleri", risk: "Tarım Üzerindeki Etkiler" },
  { area: "İklim Fiziksel Riskleri", risk: "Ortalama Sıcaklık Artışı" },
  { area: "İklim Fiziksel Riskleri", risk: "Meterolojik Kuraklık" },
  { area: "İklim Fiziksel Riskleri", risk: "Şiddetli Rüzgarlar" },
  { area: "İklim Fiziksel Riskleri", risk: "Sıcak Hava Dalgaları" },
  { area: "İklim Fiziksel Riskleri", risk: "Orman Yangınları" },
  { area: "İklim Fiziksel Riskleri", risk: "Şiddetli Yağışlar ve Sel" },
  { area: "İklim Fiziksel Riskleri", risk: "Heyelan" },
  { area: "İklim Fiziksel Riskleri", risk: "Deniz Seviyesinde Yükselme" },
  { area: "İklim Fiziksel Riskleri", risk: "Su Kirliliği" },
  { area: "İklim Fiziksel Riskleri", risk: "Biyoçeşitlilik" },
  { area: "İklim Geçiş Riskleri", risk: "Karbon Vergisi" },
  { area: "İklim Geçiş Riskleri", risk: "ETS (Emisyon Ticaret Sistemi)" },
  { area: "İklim Geçiş Riskleri", risk: "Sürdürülebilir Ürün Talebi" },
  { area: "İklim Geçiş Riskleri", risk: "Sürdürülebilir Finansman" },
  { area: "İklim Geçiş Riskleri", risk: "Düşük Karbonlu Üretim Sistemleri" },
  { area: "İklim Geçiş Riskleri", risk: "Paydaş Beklentilerindeki Değişimler" },
  { area: "İklim Geçiş Riskleri", risk: "Yeşil Sertifikalar" },
  { area: "İklim Geçiş Riskleri", risk: "Yüksek Başlangıç Yatırımları" },
  { area: "İklim Geçiş Riskleri", risk: "Düzenleyici Riskler" },
  { area: "İklim Geçiş Riskleri", risk: "Ar-Ge Yatırımları" }
];

const uniqueAreas = Array.from(new Set(riskMappings.map(rm => rm.area))).sort();

interface RiskSelectorProps {
  selectedRisk: string | null;
  onSelect: (risk: string) => void;
}

export const RiskSelector = ({ selectedRisk, onSelect }: RiskSelectorProps) => {
  const [selectedArea, setSelectedArea] = React.useState<string | null>(null);

  const filteredRisks = selectedArea
    ? riskMappings.filter(rm => rm.area === selectedArea).map(rm => rm.risk)
    : [];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Risk Seçimi</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Risk Alanı</label>
          <Select value={selectedArea || undefined} onValueChange={setSelectedArea}>
            <SelectTrigger className={cn("w-full")}>
              <SelectValue placeholder="Risk alanı seçiniz" />
            </SelectTrigger>
            <SelectContent>
              {uniqueAreas.map((area) => (
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
      </div>
    </div>
  );
};