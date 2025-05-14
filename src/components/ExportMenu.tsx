
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Image, FileDown, Maximize2, Minimize2, FileType } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ExportMenuProps {
  onExport: (format: string) => void;
  isVisible: boolean;
  toggleVisibility: () => void;
}

const ExportMenu = ({ onExport, isVisible, toggleVisibility }: ExportMenuProps) => {
  const [exportFormat, setExportFormat] = useState<"png" | "pdb" | "csv">("png");
  const [showSurface, setShowSurface] = useState(false);
  const [spinModel, setSpinModel] = useState(false);
  const [displayStyle, setDisplayStyle] = useState<"cartoon" | "stick" | "sphere" | "line">("cartoon");
  const [highQualityExport, setHighQualityExport] = useState(false);
  const [includeAnalysisData, setIncludeAnalysisData] = useState(false);
  
  const handleExport = () => {
    onExport(exportFormat);
    
    toast({
      title: `Export ${exportFormat.toUpperCase()} Successful`,
      description: "Your protein model has been exported successfully.",
    });
  };
  
  const displayOptions = [
    { id: "cartoon", label: "Cartoon" },
    { id: "stick", label: "Stick" },
    { id: "sphere", label: "Sphere" },
    { id: "line", label: "Line" },
  ];
  
  return (
    <div className="relative">
      <Button 
        variant="outline" 
        className="absolute top-4 right-4 z-10 bg-white"
        onClick={toggleVisibility}
      >
        {isVisible ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
      </Button>
      
      {isVisible && (
        <Card className="absolute top-16 right-4 w-64 shadow-lg z-10 bg-white border border-gray-200">
          <CardContent className="p-4">
            <h4 className="text-lg font-medium mb-3">Display Style</h4>
            <div className="space-y-2 mb-6">
              {displayOptions.map((option) => (
                <div key={option.id} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center ${displayStyle === option.id ? "bg-indigo-600 border-indigo-600" : "border-gray-400"}`}>
                    {displayStyle === option.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <label 
                    className="text-sm cursor-pointer"
                    onClick={() => setDisplayStyle(option.id as any)}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="show-surface" 
                  checked={showSurface} 
                  onCheckedChange={(checked) => setShowSurface(!!checked)} 
                />
                <label htmlFor="show-surface" className="text-sm cursor-pointer">
                  Show Surface
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="spin-model" 
                  checked={spinModel} 
                  onCheckedChange={(checked) => setSpinModel(!!checked)} 
                />
                <label htmlFor="spin-model" className="text-sm cursor-pointer">
                  Spin Model
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="high-quality" 
                  checked={highQualityExport} 
                  onCheckedChange={(checked) => setHighQualityExport(!!checked)} 
                />
                <label htmlFor="high-quality" className="text-sm cursor-pointer">
                  High Quality Export
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="include-analysis" 
                  checked={includeAnalysisData} 
                  onCheckedChange={(checked) => setIncludeAnalysisData(!!checked)} 
                />
                <label htmlFor="include-analysis" className="text-sm cursor-pointer">
                  Include Analysis Data
                </label>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <h4 className="text-sm font-medium mb-2">Export Format</h4>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant={exportFormat === "png" ? "default" : "outline"} 
                  size="sm"
                  className={exportFormat === "png" ? "bg-indigo-600" : ""}
                  onClick={() => setExportFormat("png")}
                >
                  <Image className="h-4 w-4 mr-1" />
                  PNG
                </Button>
                <Button 
                  variant={exportFormat === "pdb" ? "default" : "outline"} 
                  size="sm"
                  className={exportFormat === "pdb" ? "bg-indigo-600" : ""}
                  onClick={() => setExportFormat("pdb")}
                >
                  <FileDown className="h-4 w-4 mr-1" />
                  PDB
                </Button>
                <Button 
                  variant={exportFormat === "csv" ? "default" : "outline"} 
                  size="sm"
                  className={exportFormat === "csv" ? "bg-indigo-600" : ""}
                  onClick={() => setExportFormat("csv")}
                >
                  <FileType className="h-4 w-4 mr-1" />
                  CSV
                </Button>
              </div>
            </div>
            
            <Button className="w-full" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export {exportFormat.toUpperCase()}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ExportMenu;
