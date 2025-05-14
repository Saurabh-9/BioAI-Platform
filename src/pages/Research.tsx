
import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useResearchAnalysis } from "@/hooks/useResearchAnalysis";
import LoadingSpinner from "@/components/LoadingSpinner";
import LiteratureResults from "@/components/LiteratureResults";
import HypothesesResults from "@/components/HypothesesResults";

const Research = () => {
  const [researchQuery, setResearchQuery] = useState("What are the latest findings on hemoglobin mutations and their effects on oxygen binding?");
  const [useCurrentProtein, setUseCurrentProtein] = useState(true);
  const [dateRange, setDateRange] = useState({ from: "2020", to: "Present" });
  const [analysisType, setAnalysisType] = useState("comprehensive");
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const [selectedSources, setSelectedSources] = useState({
    pubmed: true,
    biorxiv: true,
    uniprot: true,
    patents: false,
    clinical: false
  });
  
  const { analyzeResearch, isAnalyzing } = useResearchAnalysis();

  const handleAnalyzeResearch = async () => {
    if (!researchQuery.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a research question to analyze.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      await analyzeResearch(researchQuery, {
        useCurrentProtein,
        dateRange,
        analysisType,
        sources: selectedSources
      });
      
      setAnalysisComplete(true);
      
      toast({
        title: "Research Analysis Complete",
        description: "Your research question has been analyzed successfully.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your research question. Please try again.",
        variant: "destructive"
      });
      console.error("Error analyzing research:", error);
    }
  };

  return (
    <MainLayout>
      <div className="bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Research & Literature Analysis</h1>
          <p className="text-lg text-gray-600 mb-8">
            Leverage OpenAI's powerful capabilities to analyze relevant research papers,
            extract key findings, and generate scientific hypotheses.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Research Query</CardTitle>
                <CardDescription>Enter your research question</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={researchQuery}
                  onChange={(e) => setResearchQuery(e.target.value)}
                  placeholder="Enter your research question..."
                  className="min-h-[120px] mb-4"
                />
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium mb-2">Include protein context</p>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="use-current-protein"
                        checked={useCurrentProtein}
                        onCheckedChange={(checked) => setUseCurrentProtein(!!checked)}
                      />
                      <label htmlFor="use-current-protein" className="text-sm">
                        Use current protein sequence as context
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Date range</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date-from" className="text-xs text-gray-500">From:</label>
                        <Input
                          id="date-from"
                          value={dateRange.from}
                          onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="date-to" className="text-xs text-gray-500">To:</label>
                        <Input
                          id="date-to"
                          value={dateRange.to}
                          onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Analysis type</p>
                    <select
                      value={analysisType}
                      onChange={(e) => setAnalysisType(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 bg-white"
                    >
                      <option value="comprehensive">Comprehensive Literature Review</option>
                      <option value="quick">Quick Summary</option>
                      <option value="hypothesis">Hypothesis Generation</option>
                      <option value="trends">Research Trend Analysis</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information Sources</CardTitle>
                  <CardDescription>Select sources to include in analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="pubmed-source"
                        checked={selectedSources.pubmed}
                        onCheckedChange={(checked) => 
                          setSelectedSources(prev => ({ ...prev, pubmed: !!checked }))
                        }
                      />
                      <label htmlFor="pubmed-source" className="text-sm">PubMed Database</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="biorxiv-source"
                        checked={selectedSources.biorxiv}
                        onCheckedChange={(checked) => 
                          setSelectedSources(prev => ({ ...prev, biorxiv: !!checked }))
                        }
                      />
                      <label htmlFor="biorxiv-source" className="text-sm">bioRxiv Preprints</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="uniprot-source"
                        checked={selectedSources.uniprot}
                        onCheckedChange={(checked) => 
                          setSelectedSources(prev => ({ ...prev, uniprot: !!checked }))
                        }
                      />
                      <label htmlFor="uniprot-source" className="text-sm">UniProt Database</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="patents-source"
                        checked={selectedSources.patents}
                        onCheckedChange={(checked) => 
                          setSelectedSources(prev => ({ ...prev, patents: !!checked }))
                        }
                      />
                      <label htmlFor="patents-source" className="text-sm">Patent Databases</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="clinical-source"
                        checked={selectedSources.clinical}
                        onCheckedChange={(checked) => 
                          setSelectedSources(prev => ({ ...prev, clinical: !!checked }))
                        }
                      />
                      <label htmlFor="clinical-source" className="text-sm">Clinical Trials</label>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Insights Configuration</CardTitle>
                  <CardDescription>Configure analysis parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium mb-2">Analysis depth</p>
                      <div className="w-full h-4 bg-gray-200 rounded-full relative">
                        <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full" style={{ width: "50%" }} />
                        <div className="absolute w-4 h-4 bg-white rounded-full border border-gray-300 top-1/2 transform -translate-y-1/2" style={{ left: "50%" }} />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Quick</span>
                        <span>Standard</span>
                        <span>Deep</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Citation threshold</p>
                      <select 
                        className="w-full border border-gray-300 rounded-md p-2 bg-white"
                      >
                        <option>All papers regardless of citations</option>
                        <option>Minimum 5 citations</option>
                        <option>Minimum 10 citations</option>
                        <option>Minimum 25 citations</option>
                        <option>Top 10% cited papers only</option>
                      </select>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Output format</p>
                      <select 
                        className="w-full border border-gray-300 rounded-md p-2 bg-white"
                      >
                        <option>Detailed report with citations</option>
                        <option>Summary with key points</option>
                        <option>Concise bullet points</option>
                        <option>Visual report with figures</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleAnalyzeResearch}
                className="bg-indigo-600 hover:bg-indigo-700 px-8"
                size="lg"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <LoadingSpinner className="mr-2" />
                    Analyzing Research Literature...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Analyze Research Literature
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {analysisComplete && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <LiteratureResults />
              <HypothesesResults />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Research;
