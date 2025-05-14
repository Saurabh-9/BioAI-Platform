
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Lightbulb, Check, Atom, BrainCircuit, Microscope, Dna, FileText } from "lucide-react";

const AIIntegrations = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Powerful AI Integrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform leverages cutting-edge AI technologies to provide comprehensive
            bioinformatics analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border border-gray-200 overflow-hidden relative">
            <CardHeader className="pb-4 z-10 relative">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <FlaskConical className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AlphaFold Integration</CardTitle>
              </div>
              <p className="text-gray-500">Advanced protein structure prediction</p>
            </CardHeader>
            <CardContent className="z-10 relative">
              <p className="mb-6">
                Our platform integrates AlphaFold, the revolutionary AI system developed
                by DeepMind that accurately predicts protein 3D structures from amino
                acid sequences with unprecedented accuracy.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>High-confidence structure prediction</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Interactive 3D visualization of predicted structures</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Detailed confidence scoring for predictions</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Domain and binding site analysis</p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="animate-spin-slow absolute">
                    <Atom className="h-20 w-20 text-blue-500 opacity-30" />
                  </div>
                  <div className="z-10">
                    <Dna className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                
                <div className="h-16 px-4 flex items-center">
                  <Microscope className="h-12 w-12 text-blue-400 animate-pulse" />
                </div>
                
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="animate-spin-slow absolute" style={{ animationDirection: "reverse" }}>
                    <Atom className="h-16 w-16 text-blue-400 opacity-20" />
                  </div>
                  <div className="z-10">
                    <FlaskConical className="h-10 w-10 text-blue-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 overflow-hidden relative">
            <CardHeader className="pb-4 z-10 relative">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-3">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>OpenAI Integration</CardTitle>
              </div>
              <p className="text-gray-500">Advanced research and literature analysis</p>
            </CardHeader>
            <CardContent className="z-10 relative">
              <p className="mb-6">
                Our platform leverages OpenAI's powerful language models to analyze
                research papers, extract key findings, generate scientific hypotheses, and
                provide valuable insights for your protein research.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Automated literature review and summarization</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Identification of research trends and key findings</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Generation of novel scientific hypotheses</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <p>Prediction of drug interactions and therapeutic approaches</p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center justify-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="animate-pulse">
                    <Lightbulb className="h-14 w-14 text-purple-500 opacity-80" />
                  </div>
                </div>
                
                <div className="h-16 px-6 flex items-center">
                  <BrainCircuit className="h-16 w-16 text-purple-400" />
                  <div className="absolute animate-ping h-2 w-2 bg-purple-600 rounded-full"></div>
                </div>
                
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="h-20 w-20 text-purple-500 opacity-30 animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <path d="M17 4L13.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <div className="z-10">
                    <FileText className="h-10 w-10 text-purple-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrations;

