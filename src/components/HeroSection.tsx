import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Guarantee Your
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text block">
                  Banking Success
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                Transform your career with South India's premier coaching institute
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Join 1000+ successful candidates who achieved their dreams with expert mentorship, 
                comprehensive study materials, and proven teaching methodologies.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-center lg:text-left">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-semibold">1000+ Selections</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-semibold">Expert Mentors</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-semibold">95% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Join Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Play className="h-5 w-5 mr-2" />
                Free Demo Class
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Kingmakers Banking Coaching Classroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Success Badge */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-6 py-3 rounded-full shadow-lg animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;