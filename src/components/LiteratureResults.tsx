
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const LiteratureResults = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center mb-1">
          <FileText className="h-5 w-5 text-indigo-500 mr-2" />
          <CardTitle>Literature Analysis</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-gray-500 italic mb-4">
          Sample query results:
        </div>
        <h3 className="text-lg font-medium mb-2">
          Recent findings on hemoglobin mutations and oxygen binding
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          Analysis based on 127 papers published between 2020-2025
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Key Findings:</h4>
            <p className="text-gray-600 text-sm mt-1">
              Recent studies have identified 3 novel mutations in the hemoglobin beta chain
              that significantly alter oxygen binding affinity. The E101K mutation shows a 2.4x
              increase in oxygen affinity, potentially leading to hypoxia in affected tissues.
              Computational models suggest this occurs due to conformational changes in the
              heme pocket.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Research Trends:</h4>
            <p className="text-gray-600 text-sm mt-1">
              There's growing interest in using AlphaFold-predicted structures to better
              understand the molecular mechanisms of hemoglobinopathies. 43% of recent
              papers utilize AI-based structural analysis, compared to just 8% in 2020.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Top Cited Paper:</h4>
            <p className="text-gray-600 text-sm mt-1">
              "Molecular Mechanisms of Novel Hemoglobin Mutations Affecting Oxygen
              Transport" (Zhang et al., 2023) - 87 citations
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Full Analysis</Button>
        <Button variant="secondary">
          <FileText className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LiteratureResults;
