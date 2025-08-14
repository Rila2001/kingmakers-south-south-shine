import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Kingmakers</h3>
              <p className="text-lg text-primary-foreground/80">School of Banking</p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              South India's premier coaching institute for Banking, SSC, and Government examinations. 
              Transforming dreams into reality since 2015.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#success" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#branches" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Branches
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Popular Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  IBPS Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  SBI PO & Clerk
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  RBI Grade B
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  SSC CGL & CHSL
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  TNPSC Exams
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  NABARD Grade A
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    No. 123, Anna Salai, Teynampet, Chennai - 600018
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-primary-foreground/80">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-primary-foreground/80">info@kingmakers.edu</p>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Get Updates</h5>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Subscribe to our newsletter for exam updates and tips
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-primary-foreground text-primary rounded-lg focus:outline-none"
                />
                <Button variant="cta" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 Kingmakers School of Banking. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Disclaimer
              </a>
            </div>

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;