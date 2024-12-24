import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as XLSX from 'xlsx';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

type RiskData = {
  department: string;
  risk: string;
  valueChainStep: string;
  riskScore: number;
  financialImpact: string;
  date: string;
};

const DataVisualization = () => {
  const [data, setData] = useState<RiskData[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const workbook = XLSX.read(e.target?.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as RiskData[];
        setData(jsonData);
        toast.success('Veriler başarıyla yüklendi');
      } catch (error) {
        toast.error('Dosya yüklenirken bir hata oluştu');
        console.error('Error reading file:', error);
      }
    };
    reader.readAsBinaryString(file);
  };

  const getDepartmentData = () => {
    const departmentRisks = data.reduce((acc: { [key: string]: number }, curr) => {
      acc[curr.department] = (acc[curr.department] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(departmentRisks).map(([department, count]) => ({
      department,
      riskCount: count,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-brand-teal">Risk Değerlendirme Grafikleri</h1>
      
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4">
          <label className="relative cursor-pointer bg-brand-teal text-white px-4 py-2 rounded hover:bg-brand-teal/90 transition-colors">
            <span>Excel Dosyası Yükle</span>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
        </div>
      </div>

      {data.length > 0 && (
        <div className="space-y-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Departmanlara Göre Risk Dağılımı</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getDepartmentData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="riskCount" fill="#008080" name="Risk Sayısı" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataVisualization;