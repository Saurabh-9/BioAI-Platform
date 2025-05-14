
import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FlaskConical, Upload, Repeat, RotateCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ProteinViewer from "@/components/ProteinViewer";
import StructureProperties from "@/components/StructureProperties";
import { useQueryClient } from "@tanstack/react-query";
import { useProteinAnalysis } from "@/hooks/useProteinAnalysis";
import LoadingSpinner from "@/components/LoadingSpinner";

const ProteinAnalysis = () => {
  const [proteinSequence, setProteinSequence] = useState("MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTN...");
  const [analysisOptions, setAnalysisOptions] = useState({
    domainAnalysis: true,
    bindingSite: true,
    stability: true,
    conservedMotif: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const queryClient = useQueryClient();
  const { analyzeProtein, isAnalyzing } = useProteinAnalysis();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Read the uploaded file
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setProteinSequence(content);
      
      toast({
        title: "File Uploaded",
        description: `Successfully loaded ${file.name}`,
      });
    };
    reader.readAsText(file);
  };
  
  const handleAnalyzeStructure = async () => {
    if (!proteinSequence.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a protein sequence or upload a FASTA file.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await analyzeProtein(proteinSequence, analysisOptions);
      setAnalysisComplete(true);
      queryClient.invalidateQueries({ queryKey: ["proteinStructure"] });
      
      toast({
        title: "Analysis Complete",
        description: "The protein structure has been successfully analyzed.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing the protein structure. Please try again.",
        variant: "destructive"
      });
      console.error("Error analyzing protein structure:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleResetView = () => {
    // Reset the 3D viewer to its default position
    toast({
      title: "View Reset",
      description: "The 3D viewer has been reset to the default view.",
    });
  };

  return (
    <MainLayout>
      <div className="bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Protein Structure Analysis</h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload your protein sequence or FASTA file to get detailed 3D structure
            analysis powered by AlphaFold integration.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Input Protein Sequence</CardTitle>
                <CardDescription>Enter protein sequence or upload FASTA file</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={proteinSequence}
                  onChange={(e) => setProteinSequence(e.target.value)}
                  placeholder="Enter protein sequence..."
                  className="min-h-[200px] font-mono text-sm mb-4"
                />
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Or upload FASTA file</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Input
                      type="file"
                      accept=".fasta,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label 
                      htmlFor="file-upload"
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Upload a file</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="font-medium">Analysis Options</p>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="domain-analysis"
                      checked={analysisOptions.domainAnalysis}
                      onCheckedChange={(checked) => 
                        setAnalysisOptions(prev => ({ ...prev, domainAnalysis: !!checked }))
                      }
                    />
                    <label htmlFor="domain-analysis" className="text-sm cursor-pointer">
                      Domain Analysis
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="binding-site"
                      checked={analysisOptions.bindingSite}
                      onCheckedChange={(checked) => 
                        setAnalysisOptions(prev => ({ ...prev, bindingSite: !!checked }))
                      }
                    />
                    <label htmlFor="binding-site" className="text-sm cursor-pointer">
                      Binding Site Prediction
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="stability-analysis"
                      checked={analysisOptions.stability}
                      onCheckedChange={(checked) => 
                        setAnalysisOptions(prev => ({ ...prev, stability: !!checked }))
                      }
                    />
                    <label htmlFor="stability-analysis" className="text-sm cursor-pointer">
                      Stability Analysis
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="conserved-motif"
                      checked={analysisOptions.conservedMotif}
                      onCheckedChange={(checked) => 
                        setAnalysisOptions(prev => ({ ...prev, conservedMotif: !!checked }))
                      }
                    />
                    <label htmlFor="conserved-motif" className="text-sm cursor-pointer">
                      Conserved Motif Detection
                    </label>
                  </div>
                </div>
                
                <Button 
                  onClick={handleAnalyzeStructure} 
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  disabled={isLoading || isAnalyzing}
                >
                  {(isLoading || isAnalyzing) ? (
                    <>
                      <LoadingSpinner className="mr-2" />
                      Analyzing Structure...
                    </>
                  ) : (
                    <>
                      <FlaskConical className="mr-2 h-4 w-4" />
                      Analyze Structure
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
            
            {/* 3D Structure Visualization */}
            <Card>
              <CardHeader>
                <CardTitle>3D Structure Visualization</CardTitle>
              </CardHeader>
              <CardContent className="h-[500px] flex flex-col">
                <div className="bg-gray-50 rounded-md flex-grow mb-4 flex items-center justify-center">
                  {analysisComplete ? (
                    <ProteinViewer />
                  ) : (
                    <div className="text-center">
                      <FlaskConical className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">3D visualization will appear here</p>
                      <p className="text-sm text-gray-400">Submit a protein sequence to visualize its structure</p>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={handleResetView}>
                    <RotateCw className="h-4 w-4 mr-2" />
                    Reset View
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                        <path d="M16 16h5v5" />
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                
                {analysisComplete && (
                  <div className="mt-6">
                    <p className="text-sm font-medium mb-2">Prediction Confidence</p>
                    <div className="relative h-2 bg-gray-200 rounded-full">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" 
                        style={{ width: "85%" }} 
                      />
                      <div 
                        className="absolute w-3 h-3 bg-white border border-gray-300 rounded-full -mt-0.5 shadow" 
                        style={{ left: "85%", top: "50%" }} 
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Low</span>
                      <span>85% Confidence</span>
                      <span>High</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {analysisComplete && (
            <div className="mt-8">
              <StructureProperties />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProteinAnalysis;
