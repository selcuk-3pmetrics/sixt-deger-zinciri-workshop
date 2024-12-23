import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RISK_VALUES = [0.1, 1, 3, 6, 8, 10];
const SEVERITY_VALUES = [
  { value: 0.1, description: "Ucuz atlatma (işletme üzerinde herhangi bir etkisi yoktur)" },
  { value: 3, description: "İşletme üzerinde ölçülebilir etkisi yoktur" },
  { value: 7, description: "Çok az veya çaresi hemen bulunabilicek etki yaratır" },
  { value: 15, description: "Sınırlı veya kısa süreli tersine çevrilebilir etki yaratır" },
  { value: 40, description: "Sürekli ve çaresi hemen bulunmayacak etki yaratır" },
  { value: 100, description: "İşletme üzerinde tehlike yaratma riski vardır" },
];

interface RiskInputsProps {
  probability: string;
  setProbability: (value: string) => void;
  frequency: string;
  setFrequency: (value: string) => void;
  severity: string;
  setSeverity: (value: string) => void;
  getProbabilityDescription: (value: number) => string;
  getFrequencyDescription: (value: number) => string;
}

export const RiskInputs = ({
  probability,
  setProbability,
  frequency,
  setFrequency,
  severity,
  setSeverity,
  getProbabilityDescription,
  getFrequencyDescription,
}: RiskInputsProps) => {
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="probability">Olasılık</Label>
        <Select
          value={probability}
          onValueChange={setProbability}
        >
          <SelectTrigger>
            <SelectValue placeholder="Olasılık seçin" />
          </SelectTrigger>
          <SelectContent>
            {RISK_VALUES.map((value) => (
              <SelectItem key={value} value={value.toString()}>
                {value} - {getProbabilityDescription(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="frequency">Frekans</Label>
        <Select
          value={frequency}
          onValueChange={setFrequency}
        >
          <SelectTrigger>
            <SelectValue placeholder="Frekans seçin" />
          </SelectTrigger>
          <SelectContent>
            {RISK_VALUES.map((value) => (
              <SelectItem key={value} value={value.toString()}>
                {value} - {getFrequencyDescription(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="severity">Şiddet</Label>
        <Select
          value={severity}
          onValueChange={setSeverity}
        >
          <SelectTrigger>
            <SelectValue placeholder="Şiddet seçin" />
          </SelectTrigger>
          <SelectContent>
            {SEVERITY_VALUES.map(({ value, description }) => (
              <SelectItem key={value} value={value.toString()}>
                {value} - {description}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};