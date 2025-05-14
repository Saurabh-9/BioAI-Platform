
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-indigo-600 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Bioinformatics Research?
        </h2>
        <p className="text-lg text-indigo-100 mb-8">
          Join thousands of researchers using our AI-powered platform to accelerate discoveries
          and gain deeper insights into protein structures and functions.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" variant="default" className="bg-white text-indigo-600 hover:bg-indigo-50">
            <Link to="/signup">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
