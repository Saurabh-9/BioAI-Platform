
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Pill, Download, ExternalLink } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const HypothesesResults = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Hypotheses Downloaded",
        description: "The AI-generated hypotheses report has been downloaded successfully."
      });
    }, 1500);
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center mb-1">
          <Lightbulb className="h-5 w-5 text-indigo-500 mr-2" />
          <CardTitle>AI-Generated Hypotheses</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-gray-500 italic mb-4">
          Based on analysis of Hemoglobin Beta (HBB) protein:
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium">Hypothesis 1:</h4>
            <p className="text-gray-600 text-sm my-2">
              The E101K mutation may interact with the 2,3-BPG binding site indirectly
              through allosteric effects, potentially offering a novel therapeutic target for
              hemoglobinopathies.
            </p>
            <div className="flex justify-between mt-3">
              <div className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded">
                Confidence: 78%
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="text-blue-600 text-xs p-0 h-auto">
                    Supporting papers: 7 <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Supporting Research:</h5>
                    <div className="text-xs">
                      <p className="font-medium">Zhang et al. (2023)</p>
                      <p className="text-gray-500">Molecular Mechanisms of Novel Hemoglobin Mutations</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Patel & Johnson (2022)</p>
                      <p className="text-gray-500">Allosteric Modulation of Hemoglobin in Disease States</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Nguyen et al. (2023)</p>
                      <p className="text-gray-500">Structure-Function Relationships in Mutant Hemoglobins</p>
                    </div>
                    <Button variant="link" className="text-xs p-0 h-auto">View all 7 papers</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium">Hypothesis 2:</h4>
            <p className="text-gray-600 text-sm my-2">
              Small molecule stabilizers targeting the interface between alpha and beta
              subunits could potentially restore normal oxygen affinity in E101K mutants
              without affecting other hemoglobin functions.
            </p>
            <div className="flex justify-between mt-3">
              <div className="bg-yellow-100 text-yellow-800 text-xs py-1 px-2 rounded">
                Confidence: 64%
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="text-blue-600 text-xs p-0 h-auto">
                    Supporting papers: 3 <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Supporting Research:</h5>
                    <div className="text-xs">
                      <p className="font-medium">Sharma et al. (2022)</p>
                      <p className="text-gray-500">Small Molecule Approaches to Hemoglobin Stabilization</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Chen & Williams (2023)</p>
                      <p className="text-gray-500">Targeting Protein-Protein Interfaces in Hemoglobin Disorders</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Roberts et al. (2021)</p>
                      <p className="text-gray-500">Novel Therapeutic Approaches for Rare Hemoglobinopathies</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium">Hypothesis 3:</h4>
            <p className="text-gray-600 text-sm my-2">
              The computational models suggest that designing peptides mimicking regions of
              the gamma chain could potentially modulate oxygen binding in mutant adult
              hemoglobin.
            </p>
            <div className="flex justify-between mt-3">
              <div className="bg-yellow-100 text-yellow-800 text-xs py-1 px-2 rounded">
                Confidence: 59%
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="text-blue-600 text-xs p-0 h-auto">
                    Supporting papers: 2 <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Supporting Research:</h5>
                    <div className="text-xs">
                      <p className="font-medium">Garcia-Lopez et al. (2022)</p>
                      <p className="text-gray-500">Peptide-Based Approaches to Modulating Hemoglobin Function</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Yamamoto & Kim (2023)</p>
                      <p className="text-gray-500">Gamma Chain Mimetics as Therapeutic Agents</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border-t pt-4">
          <h5 className="font-medium mb-2">Analysis Summary</h5>
          <p className="text-sm text-gray-600">
            These hypotheses are based on computational analysis of the E101K mutation in the Hemoglobin Beta chain and related literature. The confidence scores reflect the strength of supporting evidence and computational predictions.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleDownload} disabled={isDownloading}>
          {isDownloading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Downloading...
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Download Hypotheses Report
            </>
          )}
        </Button>
        <Button variant="secondary">
          <Pill className="h-4 w-4 mr-2" />
          Explore Drug Interactions
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HypothesesResults;
