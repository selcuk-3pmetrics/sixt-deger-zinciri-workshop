import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const RISK_VALUES = [0.1, 1, 3, 6, 8, 10];

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
        <Label htmlFor="severity">Şiddet (0.1-100)</Label>
        <Input
          id="severity"
          type="number"
          step="0.1"
          min="0.1"
          max="100"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        />
      </div>
    </div>
  );
};