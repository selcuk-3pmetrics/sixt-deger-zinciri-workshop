
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type OpportunityItem = {
  category: string;
  items: string[];
};

const opportunityItems: OpportunityItem[] = [
  {
    category: "Çalışan",
    items: [
      "Adil ücretlendirme ve iyi çalışma koşullarıyla etik iş kültürünü güçlendirmek, itibar riskini azaltmak.",
      "Çalışan çeşitliliği ve kapsayıcılığı ile inovasyonu ve müşteri odaklı hizmet kalitesini artırmak.",
      "Diğer",
      "Esnek çalışma modelleri ile çalışan bağlılığını artırarak iş gücü devrini azaltmak.",
      "Yetkinlik geliştirme ve eğitim programları ile sigorta uzmanlarının risk analiz yetkinliklerini güçlendirmek."
    ]
  },
  {
    category: "Çevre",
    items: [
      "Diğer",
      "Doğal afetlerin sıklığı artarken, afet teminatlı poliçelerle risk yönetimi hizmetlerini çeşitlendirmek.",
      "İklim değişikliği risklerine karşı yeşil sigorta ürünleri geliştirerek yeni pazarlar yaratmak.",
      "Karbon ayak izini azaltan operasyonel uygulamalarla yatırımcı ve müşteri güvenini artırmak.",
      "Sürdürülebilirlik temelli sigorta çözümleriyle kurumsal müşterilere çevresel performans iyileştirme danışmanlığı sunmak."
    ]
  },
  {
    category: "Doğal Afet",
    items: [
      "Afet dayanıklılığı artıran eğitim ve bilinçlendirme programlarıyla toplumda risk farkındalığını yükseltmek.",
      "Afet risk modellerini geliştirerek risk fiyatlamasında rekabet avantajı sağlamak.",
      "Afet risklerini azaltan erken uyarı sistemleriyle entegre sigorta çözümleri sunmak.",
      "Afet sonrası hızlı tazminat süreçleri ve destek hizmetleriyle müşteri sadakatini artırmak.",
      "Diğer"
    ]
  },
  {
    category: "Düzenlemeler ve Uyum",
    items: [
      "Diğer",
      "Hukuki riskleri azaltmak için proaktif risk değerlendirme ve danışmanlık hizmetleri sunmak.",
      "Raporlama standartlarına tam uyum sağlayarak yatırımcı ve regülatörlerle güçlü ilişkiler kurmak.",
      "Sürdürülebilirlik ve ESG standartlarını entegre eden ürünler geliştirerek pazar avantajı sağlamak.",
      "Yeni düzenlemeleri yakından takip ederek uyum süreçlerini hızlandırmak ve uyumsuzluk kaynaklı cezaları önlemek."
    ]
  },
  {
    category: "Ekonomi",
    items: [
      "Diğer",
      "Ekonomik dalgalanmalara karşı finansal dayanıklılığı artıran yeni sigorta ürünleri geliştirmek.",
      "Ekonomik durgunluk dönemlerinde müşterilerin ihtiyaçlarına uygun mikro sigorta ve esnek ödeme çözümleri sunmak.",
      "Ekonomik istikrarsızlıklardan doğan yeni risklere yönelik danışmanlık ve risk yönetimi hizmetleri sunmak.",
      "Enflasyon ve likidite risklerine karşı esnek prim ve tazminat modelleri tasarlamak."
    ]
  },
  {
    category: "Tedarik Zinciri Yönetimi",
    items: [
      "Dijital araçlarla tedarik zinciri görünürlüğünü artırarak risk yönetimini etkinleştirmek.",
      "Diğer",
      "Tedarik zinciri çeşitliliği ile operasyonel kesintilere karşı dayanıklılığı artırmak.",
      "Tedarikçilerle sürdürülebilirlik kriterlerine dayalı iş birlikleri kurarak tedarik zinciri risklerini azaltmak.",
      "Yerel tedarikçilerle çalışarak toplumsal ve çevresel fayda sağlamak ve marka değerini yükseltmek."
    ]
  },
  {
    category: "Teknoloji",
    items: [
      "Dijital kanallar ve otomasyon ile operasyonel maliyetleri azaltıp müşteri deneyimini iyileştirmek.",
      "Diğer",
      "Siber güvenlik sigortaları ile artan siber saldırı risklerine karşı müşterilere koruma sağlamak.",
      "Yanlış bilgi ve dezenformasyonla mücadele için şeffaf iletişim stratejileri geliştirerek müşteri güvenini artırmak.",
      "Yapay zeka ve veri analitiği kullanarak müşteri risk profillerini daha doğru belirlemek ve kişiselleştirilmiş poliçeler sunmak."
    ]
  },
  {
    category: "Toplum",
    items: [
      "Diğer",
      "Sosyal inovasyon projeleriyle yeni müşteri segmentlerine ulaşmak ve piyasa payını genişletmek.",
      "Sosyal sorumluluk projeleri ve eğitim programları ile marka bağlılığını ve toplumsal güveni artırmak.",
      "Toplumsal dayanıklılığı artıracak mikro ve afet sigortaları ile sosyal fayda yaratmak.",
      "Zorunlu göç ve politik risklere karşı esnek ve kapsayıcı sigorta ürünleri sunmak."
    ]
  },
  {
    category: "Yönetişim",
    items: [
      "Diğer",
      "İş kazalarını ve müşteri şikayetlerini minimize edecek risk önleyici programlar geliştirmek.",
      "Sürdürülebilirlik stratejilerini kurumsal yönetim süreçlerine entegre ederek uzun vadeli değer yaratmak.",
      "Şeffaf raporlama ve güçlü yönetişim uygulamaları ile yatırımcı güvenini ve piyasa itibarını artırmak.",
      "Yolsuzluk ve etik risklere karşı sıkı denetim mekanizmaları kurarak yasal uyumu güçlendirmek."
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
