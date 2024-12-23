import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type RiskMapping = {
  area: string;
  risk: string;
};

const riskMappings: RiskMapping[] = [
  { area: "Çalışan", risk: "Adil Ücretlendirme" },
  { area: "Ekonomi", risk: "Alım gücünde azalma/daralma" },
  { area: "İklim Fiziksel Riskleri", risk: "Aşırı Hava Olayları" },
  { area: "Çevre", risk: "Atık Yönetimi" },
  { area: "Çalışan", risk: "Çalışan Hakları" },
  { area: "Çalışan", risk: "Çalışan Memnuniyeti" },
  { area: "İklim Fiziksel Riskleri", risk: "Deniz Seviyesinde Yükselme" },
  { area: "Doğal Afet", risk: "Deprem" },
  { area: "Teknoloji", risk: "Dijital kapasite" },
  { area: "Çevre", risk: "Doğal Kaynak Kıtlığı" },
  { area: "İklim Geçiş Riskleri", risk: "Düşük Karbonlu Üretim Sistemleri" },
  { area: "Ekonomi", risk: "Ekonomik Durgunluk ve Eflasyon" },
  { area: "Toplum", risk: "Ekonomik fırsat eksikliği" },
  { area: "Çevre", risk: "Emisyon Yönetimi" },
  { area: "İklim Fiziksel Riskleri", risk: "Enerji Maliyetlerinde Artış" },
  { area: "Çevre", risk: "Enerji Yönetimi" },
  { area: "Çalışan", risk: "Eşitlik, Çeşitlik ve Kapsayıcılık" },
  { area: "İklim Geçiş Riskleri", risk: "ETS (Emisyon Ticaret Sistemi)" },
  { area: "İklim Fiziksel Riskleri", risk: "Heyelan" },
  { area: "Düzenlemeler ve Uyum", risk: "İhracat kotaları/yasakları" },
  { area: "Çevre", risk: "İklim Değişikliği" },
  { area: "Yönetişim", risk: "İş Kazaları" },
  { area: "Çalışan", risk: "İşgücü Yönetimi" },
  { area: "Yönetişim", risk: "İtibar Riskleri" },
  { area: "Çevre", risk: "Karbon Ayak İzi" },
  { area: "İklim Geçiş Riskleri", risk: "Karbon Vergisi" },
  { area: "Çevre", risk: "Kritik Düzeyde Küresel Sistem Değişimi" },
  { area: "Ekonomi", risk: "Kur Farkı Riski" },
  { area: "Ekonomi", risk: "Likidite Riski" },
  { area: "İklim Fiziksel Riskleri", risk: "Meterolojik Kuraklık" },
  { area: "Teknoloji", risk: "Mevcut Yenilikler ve Gelişen Teknoloji" },
  { area: "Yönetişim", risk: "Müşteri Memnuniyeti" },
  { area: "Çalışan", risk: "Örgütlenme Özgürlüğü" },
  { area: "İklim Fiziksel Riskleri", risk: "Orman Yangınları" },
  { area: "İklim Fiziksel Riskleri", risk: "Ortalama Sıcaklık Artışı" },
  { area: "İklim Geçiş Riskleri", risk: "Paydaş Beklentilerindeki Değişimler" },
  { area: "Toplum", risk: "Politik kutuplaşma" },
  { area: "Ekonomi", risk: "Politik ve Ekonomik İstikrarsızlık" },
  { area: "Düzenlemeler ve Uyum", risk: "Raporlama Standartları ve Regülasyonlar" },
  { area: "Yönetişim", risk: "Şeffaflık ve İzlenebilirlik" },
  { area: "Teknoloji", risk: "Siber güvensizlik" },
  { area: "İklim Fiziksel Riskleri", risk: "Şiddetli Rüzgarlar" },
  { area: "İklim Fiziksel Riskleri", risk: "Şiddetli Yağışlar ve Sel" },
  { area: "İklim Fiziksel Riskleri", risk: "Sıcak Hava Dalgaları" },
  { area: "Yönetişim", risk: "Stratejik Marka Algısı ve Pazar Payı Kaybı" },
  { area: "İklim Fiziksel Riskleri", risk: "Su Kirliliği" },
  { area: "İklim Fiziksel Riskleri", risk: "Su Stresi ve Kıtlığı" },
  { area: "İklim Geçiş Riskleri", risk: "Sürdürülebilir Finansman" },
  { area: "İklim Geçiş Riskleri", risk: "Sürdürülebilir Ürün Talebi" },
  { area: "Çevre", risk: "Sürdürülebilirlik" },
  { area: "Yönetişim", risk: "Taşeronların İSG riskleri" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Çeşitliliği" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Çevresel Uygunluk" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Sosyal Uygunluk" },
  { area: "Tedarik Zinciri Yönetimi", risk: "Tedarik Zinciri Yönetimi" },
  { area: "Teknoloji", risk: "Teknolojik gelişmelere uyum sağlayamama" },
  { area: "Çevre", risk: "Temiz Enerji Fırsatları" },
  { area: "Çevre", risk: "Temiz ve Kaliteli Suya Erişim" },
  { area: "Çevre", risk: "Toksik Emisyonlar" },
  { area: "Toplum", risk: "Uluslararası silahlı çatışma" },
  { area: "Çalışan", risk: "Ürün Etiketleme" },
  { area: "Yönetişim", risk: "Ürün Kalitesi" },
  { area: "Doğal Afet", risk: "Yangın" },
  { area: "Teknoloji", risk: "Yanlış bilgi ve dezenformasyon" },
  { area: "Düzenlemeler ve Uyum", risk: "Yasal Kısıtlamalar ve Vergiler" },
  { area: "Düzenlemeler ve Uyum", risk: "Yasal uyuşmazlık" },
  { area: "Yönetişim", risk: "Yeni Çalışma Düzeni ve Beklentiler" },
  { area: "İklim Geçiş Riskleri", risk: "Yeşil Sertifikalar" },
  { area: "Çalışan", risk: "Yetenek Kaybı" },
  { area: "Yönetişim", risk: "Yolsuzlukla ve rüşvetle mücadele" },
  { area: "Yönetişim", risk: "Yönetişim Gereksinimleri" },
  { area: "İklim Geçiş Riskleri", risk: "Yüksek Başlangıç Yatırımları" },
  { area: "Toplum", risk: "Zorunlu göç" }
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