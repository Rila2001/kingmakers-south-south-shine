import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Laptop, 
  Newspaper, 
  PenTool, 
  UserCheck, 
  MessageSquare,
  Trophy,
  BookOpen,
  Clock
} from "lucide-react";

const features = [
  {
    title: "Experienced Mentors",
    description: "Learn from industry experts with 10+ years of teaching experience and proven track records.",
    icon: GraduationCap,
    color: "primary"
  },
  {
    title: "Hybrid Learning",
    description: "Flexible online and offline classes designed to fit your schedule and learning preferences.",
    icon: Laptop,
    color: "success"
  },
  {
    title: "Updated Current Affairs",
    description: "Daily current affairs sessions with comprehensive coverage of banking and economic news.",
    icon: Newspaper,
    color: "cta"
  },
  {
    title: "Daily Practice Tests",
    description: "Regular mock tests and practice sessions to track your progress and improve performance.",
    icon: PenTool,
    color: "accent"
  },
  {
    title: "Individual Mentoring",
    description: "Personalized guidance and one-on-one doubt clearing sessions with expert faculty.",
    icon: UserCheck,
    color: "primary"
  },
  {
    title: "Mock Interviews",
    description: "Comprehensive interview preparation with industry experts and HR professionals.",
    icon: MessageSquare,
    color: "success"
  },
  {
    title: "Proven Success Rate",
    description: "95% success rate with 1000+ selections in prestigious banking and government positions.",
    icon: Trophy,
    color: "cta"
  },
  {
    title: "Study Materials",
    description: "Comprehensive study materials, notes, and practice papers designed by expert faculty.",
    icon: BookOpen,
    color: "accent"
  },
  {
    title: "Flexible Timings",
    description: "Morning, evening, and weekend batches to accommodate working professionals and students.",
    icon: Clock,
    color: "primary"
  }
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Kingmakers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what makes us South India's premier coaching institute for Banking, 
            SSC, and Government examination preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-background"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-${feature.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-background rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-success mb-2">1000+</div>
              <div className="text-muted-foreground font-medium">Successful Students</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-cta mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Course Programs</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">8+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;