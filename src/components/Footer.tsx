import { Link } from "react-router-dom";
import { FlaskConical, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BioAI Platform</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Advanced AI-powered bioinformatics platform combining AlphaFold and OpenAI
              for comprehensive protein structure research, simulation, and analysis.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              
              <a
                href="https://www.linkedin.com/in/saurabh978/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Saurabh-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-medium text-white mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/protein-analysis" className="text-gray-400 hover:text-white">
                  Protein Structure Analysis
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-white">
                  Research & Literature Analysis
                </Link>
              </li>
              <li>
                <Link to="/data-visualization" className="text-gray-400 hover:text-white">
                  Data Visualization Tools
                </Link>
              </li>
              <li>
                <Link to="/mutations" className="text-gray-400 hover:text-white">
                  Mutation Impact Prediction
                </Link>
              </li>
              <li>
                <Link to="/drug-simulation" className="text-gray-400 hover:text-white">
                  Drug Interaction Simulation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          &copy; {currentYear} BioAI Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
