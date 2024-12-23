import { cn } from "@/lib/utils";

export const valueChainSteps = [
  {
    id: "production",
    name: "Üretim",
    description: "Mal ve hizmetlerin üretildiği süreçler",
  },
  {
    id: "logistics",
    name: "Lojistik",
    description: "Tedarik zinciri ve dağıtım süreçleri",
  },
  {
    id: "marketing",
    name: "Pazarlama ve Satış",
    description: "Ürünlerin müşteriyle buluşturulması",
  },
  {
    id: "hr",
    name: "İnsan Kaynakları",
    description: "Çalışan yönetimi ve süreçleri",
  },
  {
    id: "technology",
    name: "Teknoloji",
    description: "Teknolojik altyapı ve inovasyon adımları",
  },
  {
    id: "supply",
    name: "Tedarik",
    description: "Malzeme ve kaynak temini süreçleri",
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