import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface RiskAssessmentProps {
  onCalculate: (riskScore: number) => void;
}

export const RiskAssessment = ({ onCalculate }: RiskAssessmentProps) => {
  const [probability, setProbability] = useState("");
  const [frequency, setFrequency] = useState("");
  const [severity, setSeverity] = useState("");

  const handleCalculate = () => {
    const p = Number(probability);
    const f = Number(frequency);
    const s = Number(severity);

    if (!p || !f || !s) {
      toast.error("Lütfen tüm değerleri girin");
      return;
    }

    const riskScore = p * f * s;
    onCalculate(riskScore);
    toast.success("Risk değerlendirmesi hesaplandı");
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Risk Değerlendirmesi</h2>
      
      <div className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="probability">Olasılık (0.1-10)</Label>
          <Input
            id="probability"
            type="number"
            step="0.1"
            min="0.1"
            max="10"
            value={probability}
            onChange={(e) => setProbability(e.target.value)}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="frequency">Frekans (0.1-10)</Label>
          <Input
            id="frequency"
            type="number"
            step="0.1"
            min="0.1"
            max="10"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
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

        <Button onClick={handleCalculate} className="w-full">
          Hesapla
        </Button>
      </div>
    </div>
  );
};