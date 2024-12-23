import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const risks = [
  "Aşırı Hava Olayları", "Deniz Seviyesinde Yükselme", "Enerji Maliyetlerinde Artış",
  "Heyelan", "Meterolojik Kuraklık", "Orman Yangınları", "Ortalama Sıcaklık Artışı",
  "Sıcak Hava Dalgaları", "Su Kirliliği", "Su Stresi ve Kıtlığı", "Şiddetli Rüzgarlar",
  "Şiddetli Yağışlar ve Sel", "Düşük Karbonlu Üretim Sistemleri", "ETS (Emisyon Ticaret Sistemi)",
  "Karbon Vergisi", "Paydaş Beklentilerindeki Değişimler", "Sürdürülebilir Finansman",
  "Sürdürülebilir Ürün Talebi", "Yeşil Sertifikalar", "Yüksek Başlangıç Yatırımları",
  "İklim Değişikliği", "Atık Yönetimi", "Doğal Kaynak Kıtlığı", "Emisyon Yönetimi",
  "Enerji Yönetimi", "Karbon Ayak İzi", "Kritik Düzeyde Küresel Sistem Değişimi",
  "Sürdürülebilirlik", "Temiz Enerji Fırsatları", "Temiz ve Kaliteli Suya Erişim",
  "Toksik Emisyonlar", "Eşitlik, Çeşitlik ve Kapsayıcılık", "Çalışan Hakları",
  "İşgücü Yönetimi", "Yetenek Kaybı", "Adil Ücretlendirme", "Ürün Etiketleme",
  "Örgütlenme Özgürlüğü", "Çalışan Memnuniyeti", "Alım gücünde azalma/daralma",
  "Ekonomik Durgunluk ve Eflasyon", "Likidite Riski", "Kur Farkı Riski",
  "Politik ve Ekonomik İstikrarsızlık", "Yanlış bilgi ve dezenformasyon", "Siber güvensizlik",
  "Teknolojik gelişmelere uyum sağlayamama", "Mevcut Yenilikler ve Gelişen Teknoloji",
  "Dijital kapasite", "Yönetişim Gereksinimleri", "Şeffaflık ve İzlenebilirlik",
  "İtibar Riskleri", "İş Kazaları", "Müşteri Memnuniyeti", "Ürün Kalitesi",
  "Taşeronların İSG riskleri", "Yolsuzlukla ve rüşvetle mücadele",
  "Yeni Çalışma Düzeni ve Beklentiler", "Stratejik Marka Algısı ve Pazar Payı Kaybı",
  "Tedarik Zinciri Yönetimi", "Tedarik Zinciri Çeşitliliği",
  "Tedarik Zinciri Çevresel Uygunluk", "Tedarik Zinciri Sosyal Uygunluk",
  "Raporlama Standartları ve Regülasyonlar", "İhracat kotaları/yasakları",
  "Yasal uyuşmazlık", "Yasal Kısıtlamalar ve Vergiler", "Ekonomik fırsat eksikliği",
  "Zorunlu göç", "Politik kutuplaşma", "Uluslararası silahlı çatışma", "Deprem", "Yangın"
];

interface RiskSelectorProps {
  selectedRisk: string | null;
  onSelect: (risk: string) => void;
}

export const RiskSelector = ({ selectedRisk, onSelect }: RiskSelectorProps) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Risk Seçimi</h2>
      <Select value={selectedRisk || undefined} onValueChange={onSelect}>
        <SelectTrigger className={cn("w-full")}>
          <SelectValue placeholder="Risk seçiniz" />
        </SelectTrigger>
        <SelectContent>
          {risks.map((risk) => (
            <SelectItem key={risk} value={risk}>
              {risk}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};