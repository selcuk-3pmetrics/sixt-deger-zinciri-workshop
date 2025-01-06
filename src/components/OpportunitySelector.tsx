import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type OpportunityItem = {
  category: string;
  items: string[];
};

const opportunityItems: OpportunityItem[] = [
  {
    category: "Çevre",
    items: [
      "Düşük Karbonlu Üretim Teknolojileri",
      "Atıkların Yeniden Kullanılması",
      "Enerji Verimli Tesisler",
      "Geri Dönüştürülebilir Ürün Kullanımı",
      "Su Arıtma Teknolojileri",
      "Yeşil Finansmanlardan Yararlanmak",
      "Ürün Ömrünü Uzatmak",
      "Yenilebilir Enerji Kullanımı",
      "Atık İyileşltirme Projeleri",
      "Su Geri Kazanımı",
      "Emisyon Azaltım Amaçları",
      "Yeşil Ürün Sertifikaları",
      "Enerji Yönetim Sistemleri",
      "Enerji Tasarrufu Yatırımları",
      "Tür Spesifik Çalışmalar",
      "Doğa Dostu Şirket Olma",
      "Doğal Koruma Alanları Oluşturma"
    ]
  },
  {
    category: "Sosyal",
    items: [
      "Esnek Çalışma Modelleri",
      "Eğitim ve Gelişim Programları",
      "İnsan Haklarına Olumlu Katkı Veren Şirket Olmak",
      "İş Sağlığı ve Güvenliğinde İnovasyon",
      "Gönüllülük Projeleri",
      "Teşvik ve Ödül Sistemleri",
      "Mentorluk ve Koçluk",
      "Fırsat Eşitliği Programları",
      "İş Güvenliği Kültürü",
      "Eğitimler ve Burs İmkanları",
      "STK'larla İşbirlikleri",
      "Atölye Çalışmaları"
    ]
  },
  {
    category: "Yönetişim",
    items: [
      "Veri Sağlayıcılara Bağımlı Olmama",
      "Kişiselleştirilmiş Hizmet",
      "Yeşil Tedarik Zinciri Oluşturma",
      "Yüksek Kalite Standartları ve Sertifikaları",
      "Sürdürülebilir Yatırımlar",
      "Paydaş ve Müşteri Gözünde Güçlü Şirket Olmak",
      "Güçlü İç Kontrol Sistemleri",
      "Kamuoyu Güveni",
      "Dijitalleşmiş İş Süreçleri",
      "İtibar ve Müşteri Güveni",
      "Yasal Düzenleme Uyumlu Şirket Olma",
      "Siber Güvenlik Eğitim ve Farkındalığı",
      "Zorluklara Karşı Güçlü Şirket",
      "Yasal Uyumluluk",
      "Tedarikçi Denetimleri",
      "İzleme, Geri Çekme ve İyileştirme Prosedürleri",
      "Yatırımcı Güveni Oluşturma",
      "Uzun Süreli Değer Yaratan Şirket Olmak",
      "Lokal Uygulamalar",
      "Teknolojik Gelişmelere Uyum Sağlama",
      "Rakabet Avantajı",
      "İnovasyon Kültürü"
    ]
  }
];

interface OpportunitySelectorProps {
  selectedMainCategory: string | null;
  selectedOpportunityItem: string | null;
  onMainCategorySelect: (category: string) => void;
  onOpportunityItemSelect: (item: string) => void;
}

export const OpportunitySelector = ({
  selectedMainCategory,
  selectedOpportunityItem,
  onMainCategorySelect,
  onOpportunityItemSelect,
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
      </div>
    </div>
  );
};