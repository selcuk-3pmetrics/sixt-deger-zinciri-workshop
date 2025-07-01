
import { Circle, Triangle, Hexagon, Square, Star, Leaf, RectangleHorizontal, RectangleVertical, BarChart, Car, Wrench, Briefcase, Shield, Calculator, TrendingUp, Phone, DollarSign, Monitor, AlertTriangle, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export type Department = {
  id: string;
  name: string;
  icon: typeof Circle;
  color: string;
};

const departments: Department[] = [
  { id: "damage", name: "Hasar (Tazminat) Departmanı", icon: Shield, color: "text-[#9b87f5]" },
  { id: "underwriting", name: "Underwriting (Risk Değerlendirme) Departmanı", icon: Triangle, color: "text-[#7E69AB]" },
  { id: "actuarial", name: "Aktüerya Departmanı", icon: Calculator, color: "text-[#F97316]" },
  { id: "sales-marketing", name: "Satış ve Pazarlama Departmanı", icon: TrendingUp, color: "text-[#0EA5E9]" },
  { id: "customer-service", name: "Müşteri Hizmetleri Departmanı", icon: Phone, color: "text-[#D946EF]" },
  { id: "finance-accounting", name: "Finans ve Muhasebe Departmanı", icon: DollarSign, color: "text-[#8B5CF6]" },
  { id: "it", name: "Bilgi Teknolojileri (IT) Departmanı", icon: Monitor, color: "text-[#1EAEDB]" },
  { id: "risk-compliance", name: "Risk Yönetimi ve Uyum (Compliance) Departmanı", icon: AlertTriangle, color: "text-[#221F26]" },
  { id: "product-development", name: "Ürün Geliştirme Departmanı", icon: Lightbulb, color: "text-[#D946EF]" },
  { id: "hr", name: "İnsan Kaynakları (İK) Departmanı", icon: Users, color: "text-[#403E43]" }
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
