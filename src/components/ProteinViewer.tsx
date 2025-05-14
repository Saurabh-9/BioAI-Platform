
import { useEffect, useRef, useState } from "react";
import { Stage, Component, ColormakerRegistry } from "ngl";
import { toast } from "@/hooks/use-toast";
import ExportMenu from "./ExportMenu";
import { RotateCw } from "lucide-react";
import { Button } from "./ui/button";

const ProteinViewer = () => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<any>(null);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  
  useEffect(() => {
    if (!viewerRef.current) return;
    
    // Initialize NGL viewer
    const stage = new Stage(viewerRef.current, { backgroundColor: "white" });
    stageRef.current = stage;
    
    // Function to load a sample PDB structure
    const loadSampleProtein = async () => {
      try {
        // For demo purposes, load a sample protein (Hemoglobin)
        const component = await stage.loadFile("https://files.rcsb.org/download/1HHO.pdb", {
          defaultRepresentation: false
        });
        
        // Add representations
        component.addRepresentation("cartoon", {
          color: "chainname",
          opacity: 0.9,
          quality: "high"
        });
        component.addRepresentation("ball+stick", {
          sele: "hetero and not water",
          color: "element",
          visible: true,
          opacity: 0.9
        });
        
        // Set initial view
        stage.autoView();
        stage.setParameters({ clipDist: 0 });
        
      } catch (error) {
        console.error("Error loading protein structure:", error);
        toast({
          title: "Error Loading Structure",
          description: "There was a problem loading the protein structure.",
          variant: "destructive"
        });
      }
    };
    
    loadSampleProtein();
    
    // Handle window resize
    const handleResize = () => {
      stage.handleResize();
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      if (stageRef.current) {
        stageRef.current.dispose();
      }
    };
  }, []);
  
  const handleExport = (format: string) => {
    if (!stageRef.current) return;
    
    try {
      if (format === "png") {
        stageRef.current.makeImage({
          factor: 2,
          antialias: true,
          trim: false,
          transparent: false
        }).then((blob: Blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = "protein-structure.png";
          link.click();
        });
      } else if (format === "pdb") {
        // In a real app, this would save the actual PDB file
        // For demo purposes we just create a text file
        const blob = new Blob(["HEADER    HEMOGLOBIN STRUCTURE\nTITLE     HEMOGLOBIN BETA CHAIN (HBB)"], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "protein-structure.pdb";
        link.click();
      }
    } catch (error) {
      console.error("Error exporting structure:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting the structure.",
        variant: "destructive"
      });
    }
  };
  
  const handleResetView = () => {
    if (!stageRef.current) return;
    
    setIsResetting(true);
    
    try {
      stageRef.current.autoView();
      
      setTimeout(() => {
        setIsResetting(false);
        toast({
          title: "View Reset",
          description: "The 3D viewer has been reset to the default view."
        });
      }, 500);
    } catch (error) {
      console.error("Error resetting view:", error);
      setIsResetting(false);
    }
  };
  
  const toggleExportMenu = () => {
    setShowExportMenu(!showExportMenu);
  };

  return (
    <div className="relative w-full h-full">
      <ExportMenu 
        onExport={handleExport}
        isVisible={showExportMenu}
        toggleVisibility={toggleExportMenu}
      />
      
      <div ref={viewerRef} style={{ width: "100%", height: "100%" }} />
      
      <div className="absolute bottom-4 left-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleResetView}
          disabled={isResetting}
          className="bg-white shadow-sm"
        >
          {isResetting ? (
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <RotateCw className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProteinViewer;
