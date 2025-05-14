
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dna, FlaskConical, Lightbulb, FileText, BarChart2, Microscope, GanttChart, Atom } from "lucide-react";

const Features = () => {
  return (
    <MainLayout>
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Platform Features</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Discover the comprehensive suite of AI-powered bioinformatics tools available on our platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Protein Structure Analysis */}
            <Card className="border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-3">
                    <FlaskConical className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Protein Structure Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Upload protein sequences for advanced 3D structure prediction and analysis using AlphaFold integration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Interactive 3D visualization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Domain and motif analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Stability prediction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Research Analysis */}
            <Card className="border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 p-3 rounded-lg mr-3">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Literature Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Leverage OpenAI to analyze research papers and generate insights related to your protein sequences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Automated literature review</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Key findings summarization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">AI-powered hypothesis generation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Mutation Analysis */}
            <Card className="border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 p-3 rounded-lg mr-3">
                    <Dna className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Mutation Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Predict the impact of mutations on protein structure, function, and stability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Structural impact prediction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Functional effect assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Disease association</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Drug Interaction */}
            <Card className="border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 p-3 rounded-lg mr-3">
                    <FlaskConical className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Drug Interaction Prediction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Simulate and predict interactions between proteins and small molecule compounds.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Binding site prediction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Affinity estimation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Drug repurposing suggestions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Sequence Analysis */}
            <Card className="border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-3">
                    <BarChart2 className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Sequence Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Detailed analysis of protein sequence properties and evolutionary relationships.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Multiple sequence alignment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Conserved motif identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Phylogenetic analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* AI Hypothesis Generation */}
            <Card className="border border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-red-100 p-3 rounded-lg mr-3">
                    <Lightbulb className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">AI Hypothesis Generation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Generate novel scientific hypotheses based on protein analysis and literature review.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Evidence-backed suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Confidence scoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-500">•</div>
                    <span className="text-sm">Related literature citations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Features;
