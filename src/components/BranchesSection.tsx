import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const branches = [
  {
    city: "Chennai",
    address: "No. 123, Anna Salai, Teynampet",
    phone: "+91 98765 43210",
    timings: "6:00 AM - 10:00 PM",
    features: ["Main Campus", "All Courses", "Online & Offline"]
  },
  {
    city: "Madurai",
    address: "No. 456, West Masi Street, SS Colony",
    phone: "+91 98765 43211",
    timings: "6:00 AM - 9:00 PM",
    features: ["Banking Focus", "TNPSC Special", "Weekend Batches"]
  },
  {
    city: "Trichy",
    address: "No. 789, Bharathidasan Salai, Cantonment",
    phone: "+91 98765 43212",
    timings: "6:30 AM - 9:30 PM",
    features: ["SSC Expert", "Mock Tests", "Individual Coaching"]
  },
  {
    city: "Salem",
    address: "No. 321, Omalur Main Road, Fairlands",
    phone: "+91 98765 43213",
    timings: "7:00 AM - 9:00 PM",
    features: ["RRB Special", "Regional Language", "Flexible Timing"]
  },
  {
    city: "Coimbatore",
    address: "No. 654, Avinashi Road, Peelamedu",
    phone: "+91 98765 43214",
    timings: "6:00 AM - 9:30 PM",
    features: ["Tech Hub", "IT Professionals", "Evening Classes"]
  },
  {
    city: "Tirunelveli",
    address: "No. 987, Palayamkottai Main Road",
    phone: "+91 98765 43215",
    timings: "6:30 AM - 9:00 PM",
    features: ["Banking Focus", "Government Jobs", "Local Expertise"]
  }
];

const BranchesSection = () => {
  return (
    <section id="branches" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Branches Across South India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find a Kingmakers center near you. We have strategically located branches 
            across major cities in Tamil Nadu to serve you better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {branches.map((branch, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-background">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  {branch.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground font-medium">{branch.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground">{branch.timings}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group mt-4">
                  Get Directions
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-background rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find a Branch Near You?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Don't worry! We offer comprehensive online coaching programs that bring 
              the Kingmakers experience directly to your home. Join our virtual classrooms 
              and get the same quality education from anywhere in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Explore Online Classes
              </Button>
              <Button variant="outline" size="lg">
                Request New Branch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;