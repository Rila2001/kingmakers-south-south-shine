import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Target, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About Kingmakers School of Banking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering aspirants since 2015 with world-class coaching and mentorship 
            for Banking, SSC, and Government Examinations across South India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Transforming Dreams into Reality
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2015 with a vision to democratize quality coaching, Kingmakers has emerged 
                as South India's most trusted name in competitive exam preparation. Our mission is 
                simple yet powerful: to transform the lives of young aspirants by providing them with 
                the tools, knowledge, and confidence needed to excel in Banking and Government examinations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 1000 successful selections and counting, we continue to set new benchmarks 
                in coaching excellence, combining traditional teaching wisdom with modern educational 
                technology.
              </p>
            </div>
            
            <Button variant="cta" size="lg">
              Learn More About Our Journey
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Established</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">2015</div>
                <p className="text-muted-foreground mt-2">Years of Excellence</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle className="text-lg">Successful Students</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-success">1000+</div>
                <p className="text-muted-foreground mt-2">Dreams Achieved</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-cta mx-auto mb-4" />
                <CardTitle className="text-lg">Success Rate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-cta">95%</div>
                <p className="text-muted-foreground mt-2">Proven Results</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Course Offerings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <p className="text-muted-foreground mt-2">Comprehensive Programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;