import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send,
  User,
  BookOpen,
  MessageSquare
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey towards success? Connect with our expert mentors 
            and take the first step towards achieving your dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Talk to Our Mentors
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our expert counselors are available to guide you through course selection, 
                career planning, and answer all your questions about banking and government exam preparation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-foreground mb-2">+91 98765 43210</p>
                  <p className="text-muted-foreground text-sm">24/7 Student Support</p>
                  <Button variant="cta" size="sm" className="mt-4 w-full">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <MessageCircle className="h-12 w-12 text-success mx-auto mb-4" />
                  <CardTitle className="text-lg">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-foreground mb-2">+91 98765 43220</p>
                  <p className="text-muted-foreground text-sm">Instant Support</p>
                  <Button variant="success" size="sm" className="mt-4 w-full">
                    Chat Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-bold text-foreground mb-2">info@kingmakers.edu</p>
                  <p className="text-muted-foreground text-sm">Quick Response</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <Clock className="h-12 w-12 text-cta mx-auto mb-4" />
                  <CardTitle className="text-lg">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-bold text-foreground mb-2">6 AM - 10 PM</p>
                  <p className="text-muted-foreground text-sm">Monday to Sunday</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    Visit Us
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="bg-primary/5 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-3" />
                  Download Course Brochure
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-3" />
                  Schedule a Free Demo
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <User className="h-4 w-4 mr-3" />
                  Meet Our Faculty
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground text-center">
                  Get Free Counseling
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Fill out the form below and our experts will contact you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course of Interest *</Label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a course</option>
                      <option value="ibps">IBPS Banking</option>
                      <option value="sbi">SBI Exams</option>
                      <option value="rbi">RBI Grade B</option>
                      <option value="nabard">NABARD</option>
                      <option value="ssc">SSC Exams</option>
                      <option value="tnpsc">TNPSC</option>
                      <option value="insurance">Insurance Exams</option>
                      <option value="railway">Railway Jobs</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals and any specific questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to receive communication from Kingmakers School of Banking
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;