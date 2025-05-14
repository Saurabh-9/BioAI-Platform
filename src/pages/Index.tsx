
import { FlaskConical, FileText, BarChartBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import AIIntegrations from "@/components/AIIntegrations";
import CallToAction from "@/components/CallToAction";
import MainLayout from "@/components/layouts/MainLayout";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "BioAI Platform - AI-Powered Bioinformatics Research";
  }, []);
  
  const features = [
    {
      icon: <FlaskConical className="h-10 w-10 text-indigo-500" />,
      title: "Protein Structure Analysis",
      description: "Upload protein sequences or FASTA files for instant 3D structure prediction using AlphaFold integration.",
      benefits: [
        "Interactive 3D visualization",
        "Domain and motif analysis",
        "Stability and binding site prediction"
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-indigo-500" />,
      title: "Research & Literature Analysis",
      description: "Leverage OpenAI to analyze research papers relevant to your protein sequences and generate insights.",
      benefits: [
        "Automated literature review",
        "Key findings summarization",
        "AI-powered hypothesis generation"
      ]
    },
    {
      icon: <BarChartBig className="h-10 w-10 text-indigo-500" />,
      title: "Advanced Bioinformatics Toolkit",
      description: "Comprehensive suite of bioinformatics tools for in-depth analysis of protein structures and functions.",
      benefits: [
        "Mutation impact prediction",
        "Drug binding simulation",
        "Subcellular localization prediction"
      ]
    }
  ];

  return (
    <MainLayout>
      <Hero />
      <PowerfulFeatures />
      
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefits={feature.benefits}
              />
            ))}
          </div>
        </div>
      </section>
      
      <AIIntegrations />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
