import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Target,
  Heart,
  Star,
  Award,
  Globe,
  BookOpen,
  Lightbulb,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Trophy,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      
    </header>
  );
};

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "10+", icon: Calendar },
    { label: "Students Helped", value: "50,000+", icon: Users },
    { label: "Partner Universities", value: "500+", icon: Building },
    { label: "Success Rate", value: "98%", icon: Trophy },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We believe every learner deserves access to world-class education and personalized guidance",
      icon: Star,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Student-Centered Approach",
      description:
        "Our students are at the heart of everything we do, driving our commitment to their success",
      icon: Heart,
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Global Perspective",
      description:
        "We connect learners with opportunities worldwide, fostering international understanding",
      icon: Globe,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Innovation & Technology",
      description:
        "We leverage cutting-edge technology to enhance learning experiences and outcomes",
      icon: Lightbulb,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "👩🏻‍💼",
      description:
        "Former Harvard professor with 15+ years in international education",
      specialties: ["Educational Leadership", "University Partnerships"],
    },
    {
      name: "Michael Chen",
      role: "Head of Student Services",
      image: "👨🏻‍💻",
      description:
        "Expert in student counseling and career guidance with global experience",
      specialties: ["Student Counseling", "Career Development"],
    },
    {
      name: "Dr. Priya Patel",
      role: "Academic Director",
      image: "👩🏽‍🎓",
      description:
        "PhD in Education Technology, specialist in personalized learning",
      specialties: ["Curriculum Development", "Learning Analytics"],
    },
    {
      name: "James Wilson",
      role: "Technology Lead",
      image: "👨🏿‍💻",
      description:
        "Former Silicon Valley engineer building the future of education",
      specialties: ["EdTech Innovation", "Platform Development"],
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Zisaa Founded",
      description: "Started with a mission to democratize global education",
    },
    {
      year: "2016",
      title: "First 1,000 Students",
      description:
        "Reached our first major milestone of helping 1,000 learners",
    },
    {
      year: "2018",
      title: "University Partnerships",
      description:
        "Established partnerships with 100+ top universities worldwide",
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Launched our comprehensive online learning platform",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded services to 50+ countries across 6 continents",
    },
    {
      year: "2024",
      title: "50,000+ Success Stories",
      description:
        "Celebrated helping over 50,000 students achieve their dreams",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50  ">

      {/* Hero Section */}
      <section className=" bg-primary text-white py-20">
        <div className="container-padding py-12 sm:py-20 sm:px-6 px-8">
          <div className="text-center max-w-4xl mx-auto">
          
            <h1 className="text-3xl lg:text-6xl font-bold mb-6">
              Empowering Dreams Through
              <br />
              <span className="text-yellow-300">Global Education</span>
            </h1>
            <p className="text-sm sm:text-xl text-teal-100 mb-8 leading-relaxed">
              For over a decade, we've been connecting ambitious learners with
              world-class educational opportunities. Our mission is to make
              international education accessible, affordable, and achievable for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-gray-50">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-teal-100 text-teal-800">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Lives Through Education
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Zisaa began with a simple but powerful belief: every student
                deserves the opportunity to pursue their educational dreams,
                regardless of geographical or financial barriers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by educators and technology experts, we've built a
                comprehensive platform that combines personalized guidance,
                cutting-edge technology, and a global network of educational
                partners to support students at every step of their journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Personalized learning pathways for every student
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Expert mentorship from industry professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">
                    Comprehensive support from application to graduation
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl p-8 text-center">
                <div className="text-6xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize access to world-class education by providing
                  comprehensive support, innovative technology, and personalized
                  guidance that empowers students to achieve their academic and
                  career aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape how we serve our
              global community of learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <value.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-20 sm:px-6 px-8">
        <div className="container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-800">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the Experts Behind Zisaa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of educators, technologists, and student
              advocates brings decades of experience in international education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs mr-1"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              Our Journey
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Decade of Growth & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global education platform, here's how
              we've grown to serve students worldwide.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-primary text-white">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-gradient-to-br from-primary to-primary text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dreams with
            Zisaa. Let's work together to make your educational aspirations a
            reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Us a Message
            </Button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-teal-100">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>hello@zisaa.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
