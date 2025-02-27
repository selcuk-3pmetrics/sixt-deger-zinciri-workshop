
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type MaterialityItem = {
  category: string;
  items: string[];
};

const materialityItems: MaterialityItem[] = [
  {
    category: "Çevre",
    items: [
      "Emisyon Yönetimi",
      "İklim Değişikliği",
      "Enerji Verimliliği ve Yönetimi",
      "Temiz Filo Teknolojisi",
      "Paylaşımcı Yolculuk",
      "Su Yönetimi",
      "Atık Yönetimi",
      "Ulaşımın Elektrifikasyonu",
      "Biyoçeşitlilik",
      "Çevresel Yatırımlar"
    ]
  },
  {
    category: "Sosyal",
    items: [
      "Çalışan Memnuniyeti ve Bağlılığı",
      "Çeşitlilik ve Cinsiyet Eşitliliği",
      "Yetenek Gelişimi",
      "İnsan Hakları",
      "İş Sağlığı ve Güvenliği",
      "Kurumsal Sosyal Sorumluluk",
      "Gönüllülük",
      "Toplumsal Yatırımlar",
      "Örgütlenme Özgürlüğü"
    ]
  },
  {
    category: "Yönetişim",
    items: [
      "Etik Uyum ve Yolsuzlukla Mücadele",
      "Şeffaflık ve İzlenebilirlik",
      "Araç ve Yol Güvenliği",
      "Tedarik Zincirinde Sürdürülebilirlik",
      "Marka İtibarı ve Bağlılığı",
      "Kurumsal Yönetişim",
      "Kurumsal Risk Yönetimi",
      "Müşteri Memnuniyeti",
      "Dijitalleşme",
      "Veri Gizliliği ve Sibergüvenlik"
    ]
  }
];

interface MaterialitySelectorProps {
  selectedMainCategory: string | null;
  selectedMaterialityItem: string | null;
  onMainCategorySelect: (category: string) => void;
  onMaterialityItemSelect: (item: string) => void;
}

export const MaterialitySelector = ({
  selectedMainCategory,
  selectedMaterialityItem,
  onMainCategorySelect,
  onMaterialityItemSelect,
}: MaterialitySelectorProps) => {
  const filteredItems = selectedMainCategory
    ? materialityItems.find(cat => cat.category === selectedMainCategory)?.items || []
    : [];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Önemlilik Analizi</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Ana Kategori</label>
          <Select value={selectedMainCategory || undefined} onValueChange={onMainCategorySelect}>
            <SelectTrigger className={cn("w-full")}>
              <SelectValue placeholder="Ana kategori seçiniz" />
            </SelectTrigger>
            <SelectContent>
              {materialityItems.map((category) => (
                <SelectItem key={category.category} value={category.category}>
                  {category.category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedMainCategory && (
          <div>
            <label className="text-sm font-medium mb-2 block">Önemlilik Maddesi</label>
            <Select value={selectedMaterialityItem || undefined} onValueChange={onMaterialityItemSelect}>
              <SelectTrigger className={cn("w-full")}>
                <SelectValue placeholder="Önemlilik maddesi seçiniz" />
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
