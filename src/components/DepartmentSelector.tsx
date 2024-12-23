import { Circle, Triangle, Hexagon, Square, Star, Leaf, Rectangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type Department = {
  id: string;
  name: string;
  icon: typeof Circle;
  color: string;
};

const departments: Department[] = [
  { id: "it", name: "IT", icon: Circle, color: "text-blue-500" },
  { id: "finance", name: "Finans", icon: Triangle, color: "text-green-500" },
  { id: "management", name: "Üst Yönetim", icon: Hexagon, color: "text-gray-500" },
  { id: "hr", name: "İnsan Kaynakları", icon: Rectangle, color: "text-yellow-500" },
  { id: "risk", name: "Risk Yönetimi", icon: Star, color: "text-red-500" },
  { id: "sustainability", name: "Sürdürülebilirlik", icon: Leaf, color: "text-orange-500" },
  { id: "rnd", name: "Ar-Ge", icon: Square, color: "text-purple-500" }
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <button
              key={dept.id}
              onClick={() => onSelect(dept.id)}
              className={cn(
                "department-shape flex flex-col items-center p-4 rounded-lg",
                selectedDepartment === dept.id ? "bg-gray-100" : "hover:bg-gray-50"
              )}
            >
              <Icon className={cn("w-8 h-8 mb-2", dept.color)} />
              <span className="text-sm font-medium">{dept.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};