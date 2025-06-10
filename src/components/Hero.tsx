
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dna, Microscope, Atom, Braces, Fingerprint, FlaskConical } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        {/* Animated DNA helix background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 animate-spin-slow">
            <Dna size={120} className="text-indigo-400" />
          </div>
          <div className="absolute bottom-10 right-10 animate-pulse">
            <Atom size={100} className="text-blue-400" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-spin-slow" style={{ animationDuration: "12s" }}>
            <FlaskConical size={80} className="text-emerald-400" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-gray-800">AI-Powered</span>{" "}
              <span className="text-indigo-600">Bioinformatics</span>
              <br />
              <span className="text-gray-800">Research Platform</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              Harness the power of AlphaFold and OpenAI to revolutionize your protein
              structure analysis and research insights with our advanced bioinformatics
              platform.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/protein-analysis">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div 
              className="w-full h-100 rounded-xl border border-indigo-100 bg-white shadow-xl p-8 relative"
              style={{ 
                transform: `translateY(${scrollY * 0.05}px)`,
                transition: "transform 0.1s ease-out" 
              }}
            >
              {/* Interactive feature cards with hover effects */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 hover:shadow-md">
                      <div className="mb-4 p-3 bg-indigo-500 text-white rounded-full">
                        <Dna className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-indigo-600">AlphaFold Integration</h3>
                      <p className="text-sm text-gray-600 mt-2">Advanced 3D Analysis</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">AlphaFold Integration</h4>
                      <p className="text-sm">Predict protein structures with high accuracy using AlphaFold's cutting-edge AI technology.</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 hover:shadow-md">
                      <div className="mb-4 p-3 bg-blue-500 text-white rounded-full">
                        <Braces className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-blue-600">OpenAI Research</h3>
                      <p className="text-sm text-gray-600 mt-2">Literature Analysis</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">OpenAI Research</h4>
                      <p className="text-sm">Analyze research papers and generate insights using advanced natural language processing models.</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 hover:shadow-md">
                      <div className="mb-4 p-3 bg-emerald-500 text-white rounded-full">
                        <Microscope className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-emerald-600">3D Visualization</h3>
                      <p className="text-sm text-gray-600 mt-2">Interactive Models</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">3D Visualization</h4>
                      <p className="text-sm">Explore protein structures in three dimensions with interactive visualization tools.</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 hover:shadow-md">
                      <div className="mb-4 p-3 bg-purple-500 text-white rounded-full">
                        <Fingerprint className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-purple-600">Protein Analysis</h3>
                      <p className="text-sm text-gray-600 mt-2">Structural Insights</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Protein Analysis</h4>
                      <p className="text-sm">Analyze protein properties, binding sites, and structural characteristics with precision.</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              {/* Animated particle effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-indigo-400 opacity-30"
                    style={{
                      width: Math.random() * 10 + 5 + "px",
                      height: Math.random() * 10 + 5 + "px",
                      left: Math.random() * 100 + "%",
                      top: Math.random() * 100 + "%",
                      animation: `float ${Math.random() * 10 + 15}s infinite linear`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS keyframes for the floating animation */}
      <style>{`
      @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(30px) translateX(15px);
          }
          50% {
            transform: translateY(15px) translateX(30px);
          }
          75% {
            transform: translateY(-15px) translateX(15px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
