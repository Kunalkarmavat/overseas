import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  Award,
  Zap,
  Shield,
  HeadphonesIcon,
  FileText,
  Globe,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-primary">Zisaa</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-primary font-semibold border-b-2 border-primary pb-1"
            >
              Services
            </Link>
            <Link
              to="/courses"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/universities"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Universities
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Button
            size="sm"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full"
          >
            Log In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default function Services() {
  const services = [
    {
      title: "Personal Mentoring",
      description:
        "One-on-one guidance from industry experts to accelerate your learning journey",
      icon: Users,
      features: [
        "Dedicated mentor assignment",
        "Weekly 1-hour sessions",
        "Personalized learning path",
        "Progress tracking",
        "Career guidance",
      ],
      price: "$99/month",
      popular: false,
    },
    {
      title: "Course Development",
      description:
        "Custom course creation tailored to your specific needs and goals",
      icon: BookOpen,
      features: [
        "Custom curriculum design",
        "Interactive content creation",
        "Assessment development",
        "Multi-format delivery",
        "Ongoing updates",
      ],
      price: "$299/course",
      popular: true,
    },
    {
      title: "University Placement",
      description:
        "Complete support for university applications and admissions process",
      icon: GraduationCap,
      features: [
        "University selection",
        "Application assistance",
        "Essay writing support",
        "Interview preparation",
        "Scholarship guidance",
      ],
      price: "$199/application",
      popular: false,
    },
    {
      title: "Skill Certification",
      description:
        "Industry-recognized certifications to validate your expertise",
      icon: Award,
      features: [
        "Comprehensive assessments",
        "Industry-standard certifications",
        "Digital badge issuance",
        "LinkedIn integration",
        "Employer recognition",
      ],
      price: "$79/certification",
      popular: false,
    },
    {
      title: "Career Coaching",
      description: "Professional career guidance and job placement assistance",
      icon: Target,
      features: [
        "Resume optimization",
        "Interview coaching",
        "Job market insights",
        "Network building",
        "Salary negotiation",
      ],
      price: "$149/month",
      popular: false,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical and academic support for all students",
      icon: HeadphonesIcon,
      features: [
        "Live chat support",
        "Technical assistance",
        "Academic help desk",
        "Community forums",
        "Video consultations",
      ],
      price: "Free",
      popular: false,
    },
  ];

  const supportFeatures = [
    {
      title: "Lightning Fast Response",
      description: "Get answers to your questions within minutes, not hours",
      icon: Zap,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Expert Guidance",
      description: "Access to certified instructors and industry professionals",
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Secure Platform",
      description:
        "Enterprise-grade security for your data and learning progress",
      icon: Shield,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Global Community",
      description: "Connect with learners and mentors from around the world",
      icon: Globe,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto">
         
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Learning
              <br />
              <span className="text-yellow-300">Support Services</span>
            </h1>
            <p className="text-xl text-lightLavender mb-8 leading-relaxed">
              From personal mentoring to university placement, we provide
              end-to-end support for your educational journey. Choose from our
              range of premium services designed to accelerate your success.
            </p>
          
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive range of services designed to
              support every aspect of your learning and career development
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  service.popular
                    ? "ring-2 ring-teal-500 transform scale-105"
                    : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 bg-lightLavender rounded-2xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      service.popular
                        ? "bg-primary hover:bg-primary"
                        : "bg-primary hover:bg-gray-900"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 px-20 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond traditional education with innovative support
              features that ensure your success every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Learning?
          </h2>
          <p className="text-xl text-lightLavender mb-8 max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their
            careers with our comprehensive support services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>

   
    </div>
  );
}
