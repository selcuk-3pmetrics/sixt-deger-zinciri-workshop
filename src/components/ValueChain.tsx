import { cn } from "@/lib/utils";

export const valueChainSteps = [
  {
    id: "raw-materials",
    name: "Hammadde Temini",
    description: "Hammadde tedarik ve yönetim süreçleri",
  },
  {
    id: "production",
    name: "Üretim Süreci",
    description: "Mal ve hizmetlerin üretim süreçleri",
  },
  {
    id: "quality",
    name: "Kalite Kontrol",
    description: "Kalite kontrol ve güvence süreçleri",
  },
  {
    id: "storage",
    name: "Depolama",
    description: "Ürün ve malzeme depolama süreçleri",
  },
  {
    id: "logistics",
    name: "Lojistik",
    description: "Tedarik zinciri ve dağıtım süreçleri",
  },
  {
    id: "sales-marketing",
    name: "Satış ve Pazarlama",
    description: "Ürünlerin müşteriyle buluşturulması",
  },
  {
    id: "r-and-d",
    name: "Ar-Ge",
    description: "Araştırma ve geliştirme faaliyetleri",
  },
  {
    id: "customer-relations",
    name: "Müşteri İlişkileri",
    description: "Müşteri ilişkileri yönetimi",
  },
  {
    id: "finance-legal",
    name: "Finans ve Hukuk",
    description: "Finansal ve hukuki süreçler",
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
              selectedStep === step.id ? "bg-gray-100" : "hover:bg-gray-50"
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