
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type OpportunityItem = {
  category: string;
  items: string[];
};

const opportunityItems: OpportunityItem[] = [
  {
    category: "Çevre",
    items: [
      "İklim değişikliği risklerine karşı yeşil sigorta ürünleri geliştirerek yeni pazarlar yaratmak.",
      "Doğal afetlerin sıklığı artarken, afet teminatlı poliçelerle risk yönetimi hizmetlerini çeşitlendirmek.",
      "Sürdürülebilirlik temelli sigorta çözümleriyle kurumsal müşterilere çevresel performans iyileştirme danışmanlığı sunmak.",
      "Karbon ayak izini azaltan operasyonel uygulamalarla yatırımcı ve müşteri güvenini artırmak.",
      "Diğer"
    ]
  },
  {
    category: "Çalışan",
    items: [
      "Çalışan çeşitliliği ve kapsayıcılığı ile inovasyonu ve müşteri odaklı hizmet kalitesini artırmak.",
      "Yetkinlik geliştirme ve eğitim programları ile sigorta uzmanlarının risk analiz yetkinliklerini güçlendirmek.",
      "Esnek çalışma modelleri ile çalışan bağlılığını artırarak iş gücü devrini azaltmak.",
      "Adil ücretlendirme ve iyi çalışma koşullarıyla etik iş kültürünü güçlendirmek, itibar riskini azaltmak.",
      "Diğer"
    ]
  },
  {
    category: "Ekonomi",
    items: [
      "Ekonomik dalgalanmalara karşı finansal dayanıklılığı artıran yeni sigorta ürünleri geliştirmek.",
      "Enflasyon ve likidite risklerine karşı esnek prim ve tazminat modelleri tasarlamak.",
      "Ekonomik durgunluk dönemlerinde müşterilerin ihtiyaçlarına uygun mikro sigorta ve esnek ödeme çözümleri sunmak.",
      "Ekonomik istikrarsızlıklardan doğan yeni risklere yönelik danışmanlık ve risk yönetimi hizmetleri sunmak.",
      "Diğer"
    ]
  },
  {
    category: "Teknoloji",
    items: [
      "Yapay zeka ve veri analitiği kullanarak müşteri risk profillerini daha doğru belirlemek ve kişiselleştirilmiş poliçeler sunmak.",
      "Siber güvenlik sigortaları ile artan siber saldırı risklerine karşı müşterilere koruma sağlamak.",
      "Dijital kanallar ve otomasyon ile operasyonel maliyetleri azaltıp müşteri deneyimini iyileştirmek.",
      "Yanlış bilgi ve dezenformasyonla mücadele için şeffaf iletişim stratejileri geliştirerek müşteri güvenini artırmak.",
      "Diğer"
    ]
  },
  {
    category: "Yönetişim",
    items: [
      "Şeffaf raporlama ve güçlü yönetişim uygulamaları ile yatırımcı güvenini ve piyasa itibarını artırmak.",
      "Yolsuzluk ve etik risklere karşı sıkı denetim mekanizmaları kurarak yasal uyumu güçlendirmek.",
      "Sürdürülebilirlik stratejilerini kurumsal yönetim süreçlerine entegre ederek uzun vadeli değer yaratmak.",
      "İş kazalarını ve müşteri şikayetlerini minimize edecek risk önleyici programlar geliştirmek.",
      "Diğer"
    ]
  },
  {
    category: "Tedarik Zinciri Yönetimi",
    items: [
      "Tedarikçilerle sürdürülebilirlik kriterlerine dayalı iş birlikleri kurarak tedarik zinciri risklerini azaltmak.",
      "Tedarik zinciri çeşitliliği ile operasyonel kesintilere karşı dayanıklılığı artırmak.",
      "Dijital araçlarla tedarik zinciri görünürlüğünü artırarak risk yönetimini etkinleştirmek.",
      "Yerel tedarikçilerle çalışarak toplumsal ve çevresel fayda sağlamak ve marka değerini yükseltmek.",
      "Diğer"
    ]
  },
  {
    category: "Düzenlemeler ve Uyum",
    items: [
      "Yeni düzenlemeleri yakından takip ederek uyum süreçlerini hızlandırmak ve uyumsuzluk kaynaklı cezaları önlemek.",
      "Raporlama standartlarına tam uyum sağlayarak yatırımcı ve regülatörlerle güçlü ilişkiler kurmak.",
      "Sürdürülebilirlik ve ESG standartlarını entegre eden ürünler geliştirerek pazar avantajı sağlamak.",
      "Hukuki riskleri azaltmak için proaktif risk değerlendirme ve danışmanlık hizmetleri sunmak.",
      "Diğer"
    ]
  },
  {
    category: "Toplum",
    items: [
      "Toplumsal dayanıklılığı artıracak mikro ve afet sigortaları ile sosyal fayda yaratmak.",
      "Sosyal sorumluluk projeleri ve eğitim programları ile marka bağlılığını ve toplumsal güveni artırmak.",
      "Zorunlu göç ve politik risklere karşı esnek ve kapsayıcı sigorta ürünleri sunmak.",
      "Sosyal inovasyon projeleriyle yeni müşteri segmentlerine ulaşmak ve piyasa payını genişletmek.",
      "Diğer"
    ]
  },
  {
    category: "Doğal Afet",
    items: [
      "Afet risklerini azaltan erken uyarı sistemleriyle entegre sigorta çözümleri sunmak.",
      "Afet sonrası hızlı tazminat süreçleri ve destek hizmetleriyle müşteri sadakatini artırmak.",
      "Afet risk modellerini geliştirerek risk fiyatlamasında rekabet avantajı sağlamak.",
      "Afet dayanıklılığı artıran eğitim ve bilinçlendirme programlarıyla toplumda risk farkındalığını yükseltmek.",
      "Diğer"
    ]
  }
];

interface OpportunitySelectorProps {
  selectedMainCategory: string | null;
  selectedOpportunityItem: string | null;
  onMainCategorySelect: (category: string) => void;
  onOpportunityItemSelect: (item: string) => void;
  customOpportunityItem: string;
  onCustomOpportunityItemChange: (value: string) => void;
}

export const OpportunitySelector = ({
  selectedMainCategory,
  selectedOpportunityItem,
  onMainCategorySelect,
  onOpportunityItemSelect,
  customOpportunityItem,
  onCustomOpportunityItemChange,
}: OpportunitySelectorProps) => {
  const filteredItems = selectedMainCategory
    ? opportunityItems.find(cat => cat.category === selectedMainCategory)?.items || []
    : [];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Fırsat Analizi</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Ana Kategori</label>
          <Select value={selectedMainCategory || undefined} onValueChange={onMainCategorySelect}>
            <SelectTrigger className={cn("w-full")}>
              <SelectValue placeholder="Ana kategori seçiniz" />
            </SelectTrigger>
            <SelectContent>
              {opportunityItems.map((category) => (
                <SelectItem key={category.category} value={category.category}>
                  {category.category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedMainCategory && (
          <div>
            <label className="text-sm font-medium mb-2 block">Fırsat Maddesi</label>
            <Select value={selectedOpportunityItem || undefined} onValueChange={onOpportunityItemSelect}>
              <SelectTrigger className={cn("w-full")}>
                <SelectValue placeholder="Fırsat maddesi seçiniz" />
              </SelectTrigger>
              <SelectContent>
                {filteredItems.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {selectedOpportunityItem === "Diğer" && (
          <div>
            <label className="text-sm font-medium mb-2 block">Özel Fırsat Maddesi</label>
            <Input
              placeholder="Kendi fırsat maddenizi yazınız..."
              className="w-full"
              value={customOpportunityItem}
              onChange={(e) => onCustomOpportunityItemChange(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
