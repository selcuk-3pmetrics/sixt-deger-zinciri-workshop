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
      "Atık İyileşltirme Projeleri",
      "Atıkların Yeniden Kullanılması",
      "Doğa Dostu Şirket Olma",
      "Doğal Koruma Alanları Oluşturma",
      "Düşük Karbonlu Üretim Teknolojileri",
      "Emisyon Azaltım Amaçları",
      "Enerji Tasarrufu Yatırımları",
      "Enerji Verimli Tesisler",
      "Enerji Yönetim Sistemleri",
      "Geri Dönüştürülebilir Ürün Kullanımı",
      "Su Arıtma Teknolojileri",
      "Su Geri Kazanımı",
      "Tür Spesifik Çalışmalar",
      "Ürün Ömrünü Uzatmak",
      "Yenilebilir Enerji Kullanımı",
      "Yeşil Finansmanlardan Yararlanmak",
      "Yeşil Ürün Sertifikaları",
      "Diğer (Lütfen Belirtiniz)"
    ]
  },
  {
    category: "Sosyal",
    items: [
      "Atölye Çalışmaları",
      "Eğitim ve Gelişim Programları",
      "Eğitimler ve Burs İmkanları",
      "Esnek Çalışma Modelleri",
      "Fırsat Eşitliği Programları",
      "Gönüllülük Projeleri",
      "İnsan Haklarına Olumlu Katkı Veren Şirket Olmak",
      "İş Güvenliği Kültürü",
      "İş Sağlığı ve Güvenliğinde İnovasyon",
      "Mentorluk ve Koçluk",
      "STK'larla İşbirlikleri",
      "Teşvik ve Ödül Sistemleri",
      "Diğer (Lütfen Belirtiniz)"
    ]
  },
  {
    category: "Yönetişim",
    items: [
      "Dijitalleşmiş İş Süreçleri",
      "Güçlü İç Kontrol Sistemleri",
      "İnovasyon Kültürü",
      "İtibar ve Müşteri Güveni",
      "İzleme, Geri Çekme ve İyileştirme Prosedürleri",
      "Kamuoyu Güveni",
      "Kişiselleştirilmiş Hizmet",
      "Lokal Uygulamalar",
      "Paydaş ve Müşteri Gözünde Güçlü Şirket Olmak",
      "Rakabet Avantajı",
      "Siber Güvenlik Eğitim ve Farkındalığı",
      "Sürdürülebilir Yatırımlar",
      "Tedarikçi Denetimleri",
      "Teknolojik Gelişmelere Uyum Sağlama",
      "Uzun Süreli Değer Yaratan Şirket Olmak",
      "Veri Sağlayıcılara Bağımlı Olmama",
      "Yasal Düzenleme Uyumlu Şirket Olma",
      "Yasal Uyumluluk",
      "Yatırımcı Güveni Oluşturma",
      "Yeşil Tedarik Zinciri Oluşturma",
      "Yüksek Kalite Standartları ve Sertifikaları",
      "Zorluklara Karşı Güçlü Şirket",
      "Diğer (Lütfen Belirtiniz)"
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