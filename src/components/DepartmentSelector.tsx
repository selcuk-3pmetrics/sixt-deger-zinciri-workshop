
import { Circle, Triangle, Hexagon, Square, Star, Leaf, RectangleHorizontal, RectangleVertical, BarChart, Car, Wrench, Briefcase, Shield, Calculator, TrendingUp, Phone, DollarSign, Monitor, AlertTriangle, Lightbulb, Users, Crown, Search, FileCheck, Settings, Building, MapPin, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export type Department = {
  id: string;
  name: string;
  icon: typeof Circle;
  color: string;
};

const departments: Department[] = [
  { id: "top-management", name: "Üst Yönetim", icon: Crown, color: "text-[#9b87f5]" },
  { id: "internal-audit", name: "İç Denetim", icon: Search, color: "text-[#7E69AB]" },
  { id: "risk-compliance", name: "Risk Yönetimi ve Uyum", icon: AlertTriangle, color: "text-[#F97316]" },
  { id: "actuarial", name: "Aktüerya", icon: Calculator, color: "text-[#0EA5E9]" },
  { id: "internal-control", name: "İç kontrol", icon: FileCheck, color: "text-[#D946EF]" },
  { id: "auto-technical", name: "Oto Teknik Genel", icon: Car, color: "text-[#8B5CF6]" },
  { id: "non-auto-technical", name: "Oto Dışı Teknik ve Reasürans", icon: Shield, color: "text-[#1EAEDB]" },
  { id: "damage-legal", name: "Hasar, Hukuk ve Rucu", icon: Briefcase, color: "text-[#221F26]" },
  { id: "financial", name: "Mali İşler", icon: DollarSign, color: "text-[#D946EF]" },
  { id: "corporate-sales", name: "Kurumsal Satış ve Alternatif Dağıtım Kanalları", icon: TrendingUp, color: "text-[#403E43]" },
  { id: "it", name: "Bilgi Teknolojileri", icon: Monitor, color: "text-[#9b87f5]" },
  { id: "continuous-improvement", name: "Sürekli İyileştirme ve Operasyonel Mükemmellik", icon: Settings, color: "text-[#7E69AB]" },
  { id: "hr-admin", name: "İnsan Kaynakları&İdari İşler", icon: Users, color: "text-[#F97316]" },
  { id: "reporting", name: "Raporlama", icon: BarChart, color: "text-[#0EA5E9]" },
  { id: "bank-reinsurance", name: "Banka Reasürans", icon: Building, color: "text-[#D946EF]" },
  { id: "business-development", name: "İş Geliştirme ve Strateji", icon: Target, color: "text-[#8B5CF6]" },
  { id: "turkey-regions", name: "Türkiye Bölgeler Acenteler Satış ve Pazarlama", icon: MapPin, color: "text-[#1EAEDB]" }
];

interface DepartmentSelectorProps {
  selectedDepartment: string | null;
  onSelect: (id: string) => void;
}

export const DepartmentSelector = ({
  selectedDepartment,
  onSelect,
}: DepartmentSelectorProps) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Departman Seçimi</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <button
              key={dept.id}
              onClick={() => onSelect(dept.id)}
              className={cn(
                "department-shape flex flex-col items-center p-4 rounded-lg transition-all duration-200",
                selectedDepartment === dept.id ? "bg-gray-100" : "hover:bg-gray-50"
              )}
            >
              <Icon className={cn("w-8 h-8 mb-2", dept.color)} />
              <span className="text-sm font-medium text-center">{dept.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
