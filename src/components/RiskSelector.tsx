import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const risks = [
  "Adil Ücretlendirme", "Alım gücünde azalma/daralma", "Atık Yönetimi", "Aşırı Hava Olayları",
  "Çalışan Hakları", "Çalışan Memnuniyeti", "Deniz Seviyesinde Yükselme", "Deprem",
  "Dijital kapasite", "Doğal Kaynak Kıtlığı", "Düşük Karbonlu Üretim Sistemleri",
  "Ekonomik Durgunluk ve Eflasyon", "Ekonomik fırsat eksikliği", "Emisyon Yönetimi",
  "Enerji Maliyetlerinde Artış", "Enerji Yönetimi", "ETS (Emisyon Ticaret Sistemi)",
  "Eşitlik, Çeşitlik ve Kapsayıcılık", "Heyelan", "İhracat kotaları/yasakları",
  "İklim Değişikliği", "İş Kazaları", "İşgücü Yönetimi", "İtibar Riskleri",
  "Karbon Ayak İzi", "Karbon Vergisi", "Kritik Düzeyde Küresel Sistem Değişimi",
  "Kur Farkı Riski", "Likidite Riski", "Meterolojik Kuraklık", "Mevcut Yenilikler ve Gelişen Teknoloji",
  "Müşteri Memnuniyeti", "Orman Yangınları", "Ortalama Sıcaklık Artışı",
  "Örgütlenme Özgürlüğü", "Paydaş Beklentilerindeki Değişimler", "Politik kutuplaşma",
  "Politik ve Ekonomik İstikrarsızlık", "Raporlama Standartları ve Regülasyonlar",
  "Siber güvensizlik", "Stratejik Marka Algısı ve Pazar Payı Kaybı", "Su Kirliliği",
  "Su Stresi ve Kıtlığı", "Sürdürülebilir Finansman", "Sürdürülebilir Ürün Talebi",
  "Sürdürülebilirlik", "Şeffaflık ve İzlenebilirlik", "Şiddetli Rüzgarlar",
  "Şiddetli Yağışlar ve Sel", "Taşeronların İSG riskleri", "Teknolojik gelişmelere uyum sağlayamama",
  "Tedarik Zinciri Çevresel Uygunluk", "Tedarik Zinciri Çeşitliliği",
  "Tedarik Zinciri Sosyal Uygunluk", "Tedarik Zinciri Yönetimi", "Temiz Enerji Fırsatları",
  "Temiz ve Kaliteli Suya Erişim", "Toksik Emisyonlar", "Uluslararası silahlı çatışma",
  "Ürün Etiketleme", "Ürün Kalitesi", "Yangın", "Yasal Kısıtlamalar ve Vergiler",
  "Yasal uyuşmazlık", "Yeşil Sertifikalar", "Yetenek Kaybı", "Yeni Çalışma Düzeni ve Beklentiler",
  "Yolsuzlukla ve rüşvetle mücadele", "Yüksek Başlangıç Yatırımları", "Zorunlu göç"
].sort();

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