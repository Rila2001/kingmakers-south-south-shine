import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              Kingmakers
              <span className="text-cta block text-sm font-medium">School of Banking</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
              Courses
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="#success" className="text-foreground hover:text-primary transition-colors font-medium">
              Success Stories
            </a>
            <a href="#branches" className="text-foreground hover:text-primary transition-colors font-medium">
              Branches
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button variant="cta" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
                Courses
              </a>
              <a href="#why-us" className="text-foreground hover:text-primary transition-colors font-medium">
                Why Choose Us
              </a>
              <a href="#success" className="text-foreground hover:text-primary transition-colors font-medium">
                Success Stories
              </a>
              <a href="#branches" className="text-foreground hover:text-primary transition-colors font-medium">
                Branches
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="cta" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Free Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;