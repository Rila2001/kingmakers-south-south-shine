import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import successImage from "@/assets/success-students.jpg";

const successStories = [
  {
    name: "Priya Sharma",
    position: "SBI PO - 2023",
    image: successImage,
    score: "Rank 23",
    quote: "Kingmakers provided me with the perfect blend of theoretical knowledge and practical application. The mock interviews were game-changers!"
  },
  {
    name: "Rajesh Kumar",
    position: "IBPS Clerk - 2023",
    image: successImage,
    score: "Rank 45",
    quote: "The personalized attention and daily current affairs sessions helped me crack the exam in my first attempt. Grateful to the entire team!"
  },
  {
    name: "Anitha Reddy",
    position: "RBI Grade B - 2023",
    image: successImage,
    score: "Rank 12",
    quote: "The expert faculty and comprehensive study materials made the difference. I achieved my dream job with confidence!"
  },
  {
    name: "Vikram Singh",
    position: "SSC CGL - 2023",
    image: successImage,
    score: "Rank 67",
    quote: "Kingmakers' hybrid learning approach allowed me to balance my job and preparation effectively. Highly recommended!"
  },
  {
    name: "Deepika Nair",
    position: "TNPSC Group 1 - 2023",
    image: successImage,
    score: "Rank 8",
    quote: "The regional expertise and focused preparation for TNPSC exams helped me secure a top rank. Thank you Kingmakers!"
  },
  {
    name: "Arjun Patel",
    position: "NABARD Grade A - 2023",
    image: successImage,
    score: "Rank 34",
    quote: "The individual mentoring sessions and doubt clearing classes were exceptional. I'm now serving as a NABARD officer!"
  }
];

const SuccessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleStories, setVisibleStories] = useState(3);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + visibleStories >= successStories.length ? 0 : prev + visibleStories
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, successStories.length - visibleStories) : Math.max(0, prev - visibleStories)
    );
  };

  return (
    <section id="success" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our star students who transformed their careers and achieved their dreams 
            with Kingmakers School of Banking.
          </p>
        </div>

        {/* Success Stories Slider */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.slice(currentSlide, currentSlide + visibleStories).map((story, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-success text-success-foreground rounded-full p-1">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{story.name}</h3>
                  <p className="text-primary font-semibold">{story.position}</p>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {story.score}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-muted-foreground/30 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      "{story.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(successStories.length / visibleStories) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * visibleStories)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentSlide / visibleStories) === index 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="success-gradient rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            Our Achievements Speak for Themselves
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/90 font-medium">Successful Selections</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-white/90 font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-white/90 font-medium">Top 50 Ranks</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-white/90 font-medium">Different Exams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;