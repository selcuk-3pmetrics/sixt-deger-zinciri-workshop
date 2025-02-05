
import { cn } from "@/lib/utils";

export const valueChainSteps = [
  {
    id: "vehicle-supply",
    name: "Araç Tedariği",
    description: "Araç tedarik ve yönetim süreçleri",
  },
  {
    id: "fleet-management",
    name: "Filo Yönetimi",
    description: "Filo operasyon ve bakım süreçleri",
  },
  {
    id: "reservation-rental",
    name: "Rezervasyon ve Kiralama",
    description: "Rezervasyon ve kiralama süreçleri",
  },
  {
    id: "customer-service",
    name: "Müşteri Hizmetleri",
    description: "Müşteri ilişkileri yönetimi",
  },
  {
    id: "marketing-sales",
    name: "Pazarlama ve Satış",
    description: "Pazarlama ve satış stratejileri",
  },
  {
    id: "technology-it",
    name: "Teknoloji ve Bilgi Sistemleri",
    description: "Teknolojik altyapı ve sistemler",
  },
  {
    id: "legal-compliance",
    name: "Hukuk ve Uyumluluk",
    description: "Yasal süreçler ve uyum yönetimi",
  },
  {
    id: "finance-accounting",
    name: "Finans ve Muhasebe",
    description: "Finansal yönetim ve muhasebe süreçleri",
  },
];

interface ValueChainProps {
  selectedStep: string | null;
  onSelect: (id: string) => void;
}

export const ValueChain = ({ selectedStep, onSelect }: ValueChainProps) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Değer Zinciri Adımları</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {valueChainSteps.map((step) => (
          <button
            key={step.id}
            onClick={() => onSelect(step.id)}
            className={cn(
              "value-chain-step text-left",
              selectedStep === step.id 
                ? "bg-brand-teal/10 border-brand-teal shadow-md transform scale-105" 
                : "hover:bg-gray-50"
            )}
          >
            <h3 className="font-medium mb-2">{step.name}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
