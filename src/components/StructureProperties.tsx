
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, Share2, Copy, Check, FileText, BarChart2, Dna, FlaskConical } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const StructureProperties = () => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const handleDownload = () => {
    setDownloading(true);
    
    setTimeout(() => {
      setDownloading(false);
      toast({
        title: "Report Downloaded",
        description: "The protein analysis report has been downloaded successfully."
      });
    }, 1500);
  };
  
  const handleCopyReport = () => {
    // In a real app, this would copy the report data
    setCopied(true);
    toast({
      title: "Report Copied",
      description: "The protein analysis report has been copied to clipboard."
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hemoglobin Beta (HBB) Analysis</CardTitle>
        <CardDescription>Analysis results for the hemoglobin beta chain protein</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Structure Summary</h3>
            <p className="text-gray-500 mb-3">
              AlphaFold predicted structure with 92% confidence. Four alpha-helical domains
              identified with central heme-binding pocket.
            </p>
            
            <h3 className="font-medium mb-2 mt-4">Domains</h3>
            <ul className="list-disc list-inside text-gray-500 space-y-1 ml-2">
              <li>N-terminal domain (residues 1-31)</li>
              <li>Heme-binding domain (residues 32-99)</li>
              <li>Alpha-helical bundle (residues 100-145)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Stability Score</h3>
            <div className="flex items-center">
              <span className="text-gray-500">76.2 (Stable)</span>
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">High Confidence</span>
            </div>
            
            <h3 className="font-medium mb-2 mt-4">Mutation Analysis</h3>
            <p className="text-gray-500 mb-1">
              E101K mutation shows significant impact on oxygen binding affinity and protein stability.
            </p>
            
            <h3 className="font-medium mb-2 mt-4">Research Insights</h3>
            <p className="text-gray-500">
              Recent studies suggest potential for small molecule stabilizers as therapeutic approach.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <h3 className="font-medium mb-3">Protein Properties</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="bg-gray-50 p-3 rounded-lg text-center cursor-help">
                  <p className="text-xs text-gray-500">Residues</p>
                  <p className="font-medium">287</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Amino Acid Residues</h4>
                    <p className="text-sm">
                      This protein contains 287 amino acid residues making up its primary structure.
                    </p>
                  </div>
                  <Dna className="h-14 w-14 text-gray-300" />
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="bg-gray-50 p-3 rounded-lg text-center cursor-help">
                  <p className="text-xs text-gray-500">Molecular Weight</p>
                  <p className="font-medium">15.8 kDa</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Molecular Weight</h4>
                    <p className="text-sm">
                      The estimated mass of the protein at 15.8 kDa, which is typical for the beta chain of hemoglobin.
                    </p>
                  </div>
                  <BarChart2 className="h-14 w-14 text-gray-300" />
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="bg-gray-50 p-3 rounded-lg text-center cursor-help">
                  <p className="text-xs text-gray-500">Isoelectric Point</p>
                  <p className="font-medium">7.2</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Isoelectric Point (pI)</h4>
                    <p className="text-sm">
                      The pH at which the protein carries no net electrical charge. This affects its solubility and electrophoretic mobility.
                    </p>
                  </div>
                  <FlaskConical className="h-14 w-14 text-gray-300" />
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="bg-gray-50 p-3 rounded-lg text-center cursor-help">
                  <p className="text-xs text-gray-500">Binding Sites</p>
                  <p className="font-medium">2</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Active Binding Sites</h4>
                    <p className="text-sm">
                      The protein has 2 predicted binding sites, including the heme-binding pocket responsible for oxygen transport.
                    </p>
                  </div>
                  <FileText className="h-14 w-14 text-gray-300" />
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <h3 className="font-medium mb-3">Secondary Structure Composition</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Alpha Helix</span>
              <span className="text-sm">68%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
            </div>
            
            <div className="flex justify-between items-center mt-4 mb-3">
              <span className="text-sm font-medium">Beta Sheet</span>
              <span className="text-sm">12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '12%' }}></div>
            </div>
            
            <div className="flex justify-between items-center mt-4 mb-3">
              <span className="text-sm font-medium">Loops/Coils</span>
              <span className="text-sm">20%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" className="w-full sm:w-auto" onClick={handleDownload}>
          {downloading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Downloading...
            </>
          ) : (
            <>
              <FileDown className="mr-2 h-4 w-4" />
              Download Full Report
            </>
          )}
        </Button>
        <Button variant="outline" className="w-full sm:w-auto" onClick={handleCopyReport}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Report
            </>
          )}
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StructureProperties;
