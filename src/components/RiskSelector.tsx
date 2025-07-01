
import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type RiskMapping = {
  area: string;
  risk: string;
};

const riskMappings: RiskMapping[] = [
  { area: "Çevre", risk: "İklim Değişikliği" },
  { area: "Çevre", risk: "Doğal Kaynak Kıtlığı" },
  { area: "Çevre", risk: "Kritik Düzeyde Küresel Sistem Değişimi" },
  { area: "Çevre", risk: "Sürdürülebilirlik" },
  { area: "Çalışan", risk: "Eşitlik, Çeşitlik ve Kapsayıcılık" },
  { area: "Çalışan", risk: "Çalışan Hakları" },
  { area: "Çalışan", risk: "İşgücü Yönetimi" },
  { area: "Çalışan", risk: "Yetenek Kaybı" },
  { area: "Çalışan", risk: "Adil Ücretlendirme" },
  { area: "Çalışan", risk: "Satış Uygulamaları" },
  { area: "Çalışan", risk: "Çalışan Memnuniyeti" },
  { area: "Çalışan", risk: "Çalışma Saatleri" },
  { area: "Ekonomi", risk: "Alım gücünde azalma/daralma" },
  { area: "Ekonomi", risk: "Ekonomik Durgunluk ve Eflasyon" },
  { area: "Ekonomi", risk: "Likidite Riski" },
  { area: "Ekonomi", risk: "Kur Farkı Riski" },
  { area: "Ekonomi", risk: "Politik ve Ekonomik İstikrarsızlık" },
  { area: "Teknoloji", risk: "Yapay Zeka Yönetimi" },
  { area: "Teknoloji", risk: "Yanlış bilgi ve dezenformasyon" },
  { area: "Teknoloji", risk: "Siber güvensizlik" },
  { area: "Teknoloji", risk: "Teknolojik gelişmelere uyum sağlayamama" },
  { area: "Teknoloji", risk: "Mevcut Yenilikler ve Gelişen Teknoloji" },
  { area: "Teknoloji", risk: "Dijital kapasite" },
  { area: "Yönetişim", risk: "Yönetişim Gereksinimleri" },
  { area: "Yönetişim", risk: "Şeffaflık ve İzlenebilirlik" },
  { area: "Yönetişim", risk: "İtibar Riskleri" },
  { area: "Yönetişim", risk: "İş Kazaları" },
  { area: "Yönetişim", risk: "Müşteri Memnuniyeti" },
  { area: "Yönetişim", risk: "Ürün Kalitesi" },
  { area: "Yönetişim", risk: "Yolsuzlukla ve rüşvetle mücadele" },
  { area: "Yönetişim", risk: "Yeni Çalışma Düzeni ve Beklentiler" },
  { area: "Yönetişim", risk: "Stratejik Marka Algısı ve Pazar Payı Kaybı" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Yönetimi" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Çeşitliliği" },
  { area: "Düzenlemeler ve Uyum", risk: "Raporlama Standartları ve Regülasyonlar" },
  { area: "Düzenlemeler ve Uyum", risk: "Yasal uyuşmazlık" },
  { area: "Düzenlemeler ve Uyum", risk: "Yasal Kısıtlamalar ve Vergiler" },
  { area: "Toplum", risk: "Ekonomik fırsat eksikliği" },
  { area: "Toplum", risk: "Zorunlu göç" },
  { area: "Toplum", risk: "Politik kutuplaşma" },
  { area: "Toplum", risk: "Uluslararası silahlı çatışma" },
  { area: "Doğal Afet", risk: "Deprem" },
  { area: "Doğal Afet", risk: "Yangın" }
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
