import { Circle, Triangle, Hexagon, Square, Star, Leaf, RectangleHorizontal, RectangleVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export type Department = {
  id: string;
  name: string;
  icon: typeof Circle;
  color: string;
};

const departments: Department[] = [
  { id: "management", name: "Yönetim-Strateji", icon: Hexagon, color: "text-[#9b87f5]" },
  { id: "audit", name: "İç Denetim", icon: Triangle, color: "text-[#7E69AB]" },
  { id: "factory", name: "Fabrika Yönetimi", icon: Square, color: "text-[#F97316]" },
  { id: "quality", name: "Kalite", icon: Circle, color: "text-[#0EA5E9]" },
  { id: "sales", name: "Satış", icon: Star, color: "text-[#D946EF]" },
  { id: "purchasing", name: "Satın Alma", icon: RectangleVertical, color: "text-[#8B5CF6]" },
  { id: "logistics", name: "Lojistik", icon: RectangleHorizontal, color: "text-[#1EAEDB]" },
  { id: "finance", name: "Finans", icon: Triangle, color: "text-[#221F26]" },
  { id: "hr", name: "İnsan Kaynakları", icon: Square, color: "text-[#D946EF]" },
  { id: "it", name: "Bilgi Teknolojileri", icon: Circle, color: "text-[#403E43]" },
  { id: "communications", name: "Kurumsal İletişim", icon: Star, color: "text-[#FEC6A1]" },
  { id: "environment", name: "Çevre Yönetimi", icon: Leaf, color: "text-[#FDE1D3]" }
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