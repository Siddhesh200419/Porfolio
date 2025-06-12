import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm" : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <span className="font-semibold text-xl text-gray-900 dark:text-white">Siddhesh Gite</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </button>
              <ThemeToggle />
              <Button 
                onClick={scrollToContact}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Say "Hello!"
              </Button>
            </div>
            
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-20">
          <div className="flex flex-col space-y-4 p-6">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
            >
              Contact
            </button>
            <Button 
              onClick={scrollToContact}
              className="bg-gray-900 text-white hover:bg-gray-800 w-fit"
            >
              Say "Hello!"
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
