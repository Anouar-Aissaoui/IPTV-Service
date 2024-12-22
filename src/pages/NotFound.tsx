import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-gray">
      <Navigation />
      <div className="flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto animate-fade-in-up">
            Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
          </p>
          <div className="animate-fade-in-up">
            <Link to="/">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30 transform hover:scale-105 transition-all duration-300">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;