import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  University, 
  Landmark, 
  Shield, 
  FileText, 
  Train, 
  MapPin,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";

const courses = [
  {
    title: "IBPS Banking",
    subtitle: "PO, Clerk, SO, RRB",
    description: "Comprehensive preparation for all IBPS examinations with expert guidance and practice tests.",
    icon: Building2,
    duration: "6-12 months",
    students: "500+ enrolled",
    badge: "Most Popular",
    color: "primary"
  },
  {
    title: "SBI Exams",
    subtitle: "PO, Clerk, Associates",
    description: "Specialized coaching for State Bank of India recruitment examinations.",
    icon: Landmark,
    duration: "4-8 months",
    students: "300+ enrolled",
    badge: "High Success Rate",
    color: "success"
  },
  {
    title: "RBI Grade B",
    subtitle: "Officers & Assistants",
    description: "Elite program for Reserve Bank of India Grade B officer positions.",
    icon: University,
    duration: "8-12 months",
    students: "150+ enrolled",
    badge: "Premium",
    color: "cta"
  },
  {
    title: "NABARD",
    subtitle: "Grade A & B Officers",
    description: "Focused preparation for National Bank for Agriculture and Rural Development.",
    icon: Shield,
    duration: "6-10 months",
    students: "200+ enrolled",
    badge: "Expert Level",
    color: "accent"
  },
  {
    title: "SSC Exams",
    subtitle: "CGL, CHSL, MTS",
    description: "Complete coverage of Staff Selection Commission examinations.",
    icon: FileText,
    duration: "4-6 months",
    students: "400+ enrolled",
    badge: "High Demand",
    color: "primary"
  },
  {
    title: "TNPSC",
    subtitle: "Group 1, 2, 4",
    description: "Tamil Nadu Public Service Commission exam preparation with regional expertise.",
    icon: MapPin,
    duration: "6-8 months",
    students: "250+ enrolled",
    badge: "Regional Expert",
    color: "success"
  },
  {
    title: "Insurance Exams",
    subtitle: "LIC, NIACL, UIIC",
    description: "Specialized coaching for insurance sector examinations.",
    icon: Shield,
    duration: "3-6 months",
    students: "180+ enrolled",
    badge: "Growing Sector",
    color: "cta"
  },
  {
    title: "Railway Jobs",
    subtitle: "RRB NTPC, Group D",
    description: "Railway Recruitment Board exam preparation with technical focus.",
    icon: Train,
    duration: "4-6 months",
    students: "300+ enrolled",
    badge: "Job Security",
    color: "accent"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Course Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive coaching programs designed to help you excel in Banking, SSC, 
            and Government examinations with expert mentorship and proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-full bg-${course.color}/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 text-${course.color}`} />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`absolute -top-2 -right-2 text-xs bg-${course.color} text-${course.color}-foreground`}
                    >
                      {course.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {course.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {course.students}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            View All Courses & Fee Structure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;