import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const risks = [
  "Adil Ücretlendirme", "Alım gücünde azalma/daralma", "Aşırı Hava Olayları", "Atık Yönetimi",
  "Çalışan Hakları", "Çalışan Memnuniyeti", "Deniz Seviyesinde Yükselme", "Deprem",
  "Dijital kapasite", "Doğal Kaynak Kıtlığı", "Düşük Karbonlu Üretim Sistemleri",
  "Ekonomik Durgunluk ve Eflasyon", "Ekonomik fırsat eksikliği", "Emisyon Yönetimi",
  "Enerji Maliyetlerinde Artış", "Enerji Yönetimi", "Eşitlik, Çeşitlik ve Kapsayıcılık",
  "ETS (Emisyon Ticaret Sistemi)", "Heyelan", "İhracat kotaları/yasakları", "İklim Değişikliği",
  "İş Kazaları", "İşgücü Yönetimi", "İtibar Riskleri", "Karbon Ayak İzi", "Karbon Vergisi",
  "Kritik Düzeyde Küresel Sistem Değişimi", "Kur Farkı Riski", "Likidite Riski",
  "Meterolojik Kuraklık", "Mevcut Yenilikler ve Gelişen Teknoloji", "Müşteri Memnuniyeti",
  "Örgütlenme Özgürlüğü", "Orman Yangınları", "Ortalama Sıcaklık Artışı",
  "Paydaş Beklentilerindeki Değişimler", "Politik kutuplaşma", "Politik ve Ekonomik İstikrarsızlık",
  "Raporlama Standartları ve Regülasyonlar", "Şeffaflık ve İzlenebilirlik", "Siber güvensizlik",
  "Şiddetli Rüzgarlar", "Şiddetli Yağışlar ve Sel", "Sıcak Hava Dalgaları",
  "Stratejik Marka Algısı ve Pazar Payı Kaybı", "Su Kirliliği", "Su Stresi ve Kıtlığı",
  "Sürdürülebilir Finansman", "Sürdürülebilir Ürün Talebi", "Sürdürülebilirlik",
  "Taşeronların İSG riskleri", "Tedarik Zinciri Çeşitliliği", "Tedarik Zinciri Çevresel Uygunluk",
  "Tedarik Zinciri Sosyal Uygunluk", "Tedarik Zinciri Yönetimi",
  "Teknolojik gelişmelere uyum sağlayamama", "Temiz Enerji Fırsatları",
  "Temiz ve Kaliteli Suya Erişim", "Toksik Emisyonlar", "Uluslararası silahlı çatışma",
  "Ürün Etiketleme", "Ürün Kalitesi", "Yangın", "Yanlış bilgi ve dezenformasyon",
  "Yasal Kısıtlamalar ve Vergiler", "Yasal uyuşmazlık", "Yeni Çalışma Düzeni ve Beklentiler",
  "Yeşil Sertifikalar", "Yetenek Kaybı", "Yolsuzlukla ve rüşvetle mücadele",
  "Yönetişim Gereksinimleri", "Yüksek Başlangıç Yatırımları", "Zorunlu göç"
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