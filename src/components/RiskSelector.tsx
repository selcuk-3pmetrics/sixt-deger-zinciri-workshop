
import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type RiskMapping = {
  area: string;
  risk: string;
};

const riskMappings: RiskMapping[] = [
  { area: "Çalışan", risk: "Adil Ücretlendirme" },
  { area: "Ekonomi", risk: "Alım gücünde azalma/daralma" },
  { area: "Çalışan", risk: "Çalışan Hakları" },
  { area: "Çalışan", risk: "Çalışan Memnuniyeti" },
  { area: "Çalışan", risk: "Çalışma Saatleri" },
  { area: "Doğal Afet", risk: "Deprem" },
  { area: "Teknoloji", risk: "Dijital kapasite" },
  { area: "Çevre", risk: "Doğal Kaynak Kıtlığı" },
  { area: "Toplum", risk: "Ekonomik fırsat eksikliği" },
  { area: "Ekonomi", risk: "Ekonomik Durgunluk ve Eflasyon" },
  { area: "Çalışan", risk: "Eşitlik, Çeşitlik ve Kapsayıcılık" },
  { area: "Çevre", risk: "İklim Değişikliği" },
  { area: "Çalışan", risk: "İşgücü Yönetimi" },
  { area: "Yönetişim", risk: "İş Kazaları" },
  { area: "Yönetişim", risk: "İtibar Riskleri" },
  { area: "Ekonomi", risk: "Kur Farkı Riski" },
  { area: "Çevre", risk: "Kritik Düzeyde Küresel Sistem Değişimi" },
  { area: "Ekonomi", risk: "Likidite Riski" },
  { area: "Teknoloji", risk: "Mevcut Yenilikler ve Gelişen Teknoloji" },
  { area: "Yönetişim", risk: "Müşteri Memnuniyeti" },
  { area: "Toplum", risk: "Politik kutuplaşma" },
  { area: "Ekonomi", risk: "Politik ve Ekonomik İstikrarsızlık" },
  { area: "Düzenlemeler ve Uyum", risk: "Raporlama Standartları ve Regülasyonlar" },
  { area: "Çalışan", risk: "Satış Uygulamaları" },
  { area: "Teknoloji", risk: "Siber güvensizlik" },
  { area: "Yönetişim", risk: "Stratejik Marka Algısı ve Pazar Payı Kaybı" },
  { area: "Çevre", risk: "Sürdürülebilirlik" },
  { area: "Yönetişim", risk: "Şeffaflık ve İzlenebilirlik" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Çeşitliliği" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Yönetimi" },
  { area: "Teknoloji", risk: "Teknolojik gelişmelere uyum sağlayamama" },
  { area: "Toplum", risk: "Uluslararası silahlı çatışma" },
  { area: "Çalışan", risk: "Yetenek Kaybı" },
  { area: "Yönetişim", risk: "Yeni Çalışma Düzeni ve Beklentiler" },
  { area: "Teknoloji", risk: "Yanlış bilgi ve dezenformasyon" },
  { area: "Doğal Afet", risk: "Yangın" },
  { area: "Teknoloji", risk: "Yapay Zeka Yönetimi" },
  { area: "Düzenlemeler ve Uyum", risk: "Yasal Kısıtlamalar ve Vergiler" },
  { area: "Düzenlemeler ve Uyum", risk: "Yasal uyuşmazlık" },
  { area: "Yönetişim", risk: "Yolsuzlukla ve rüşvetle mücadele" },
  { area: "Yönetişim", risk: "Yönetişim Gereksinimleri" },
  { area: "Toplum", risk: "Zorunlu göç" },
  { area: "Yönetişim", risk: "Ürün Kalitesi" }
];

const uniqueAreas = Array.from(new Set(riskMappings.map(rm => rm.area))).sort();

interface RiskSelectorProps {
  selectedRisk: string | null;
  onSelect: (risk: string) => void;
}

export const RiskSelector = ({ selectedRisk, onSelect }: RiskSelectorProps) => {
  const [selectedArea, setSelectedArea] = React.useState<string | null>(null);

  const filteredRisks = selectedArea
    ? riskMappings.filter(rm => rm.area === selectedArea).map(rm => rm.risk).sort()
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
