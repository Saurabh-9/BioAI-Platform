
import { Link } from "react-router-dom";
import { FlaskConical, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BioAI Platform</span>
            </Link>
            
            <p className="text-sm text-gray-400">
              Advanced AI-Powered Bioinformatics Platform combining AlphaFold and
              OpenAI for comprehensive protein structure analysis and research
              insights.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/protein-analysis" className="text-gray-400 hover:text-white text-sm">
                  Protein Structure Analysis
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-white text-sm">
                  Research & Literature Analysis
                </Link>
              </li>
              <li>
                <Link to="/data-visualization" className="text-gray-400 hover:text-white text-sm">
                  Data Visualization Tools
                </Link>
              </li>
              <li>
                <Link to="/mutations" className="text-gray-400 hover:text-white text-sm">
                  Mutation Impact Prediction
                </Link>
              </li>
              <li>
                <Link to="/drug-simulation" className="text-gray-400 hover:text-white text-sm">
                  Drug Interaction Simulation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-white text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api-reference" className="text-gray-400 hover:text-white text-sm">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-400 hover:text-white text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/papers" className="text-gray-400 hover:text-white text-sm">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-400 hover:text-white text-sm">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          &copy; {currentYear} BioAI Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
