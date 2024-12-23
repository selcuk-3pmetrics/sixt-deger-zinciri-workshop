import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Welcome = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "erciyas") {
      navigate("/dashboard");
    } else {
      toast.error("Yanlış şifre!");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-teal/5 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="flex justify-center space-x-12 items-center mb-8">
          <img src="/lovable-uploads/8b04f4f2-1c97-4519-b46d-a4397467636c.png" alt="3P Metrics Logo" className="h-16" />
          <img src="/lovable-uploads/37adfbb6-28a2-4ded-90a9-5ebb5e096e54.png" alt="Erciyas Logo" className="h-16" />
        </div>
        
        <h1 className="text-4xl font-bold text-center text-brand-teal mb-6">
          Değer Zinciri Çalışmasına Hoşgeldiniz
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Merhabalar, Hoş Geldiniz!<br/><br/>
            Bu çalışmada, Erciyas Çelik Boru Değer Zinciri Adımları ile risk, fırsat ve önemlilik konularını eşleştirerek kapsamlı bir analiz gerçekleştireceğiz. Her bir değer zinciri adımını detaylı şekilde ele alarak, süreçlerdeki olası riskleri tanımlayacak, bu risklerin derecelerini ortaya koyacak ve fırsatları belirleyeceğiz. Ayrıca, her adımın şirketin sürdürülebilirliği ve stratejik hedefleri açısından önemlilik derecesini değerlendireceğiz.<br/><br/>
            Bu analiz, hem operasyonel süreçlerin iyileştirilmesine hem de uzun vadeli büyüme ve başarı hedeflerinin daha sağlam temellere oturtulmasına katkı sağlayacaktır.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Şifre
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi giriniz"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Giriş Yap
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;