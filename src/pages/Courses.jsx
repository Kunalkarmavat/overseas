// Courses.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Star,
  Play,
  Download,
  CheckCircle,
  Filter,
  Search,
} from "lucide-react";



export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Programming", "Design", "Business", "Marketing", "Photography", "Data Science"];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Sarah Johnson",
      category: "Programming",
      level: "Beginner",
      duration: "12 weeks",
      students: 15420,
      rating: 4.9,
      price: "$199",
      originalPrice: "$299",
      image: "💻",
      description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js",
      features: [
        "40+ hours of video content",
        "Real-world projects",
        "Certificate of completion",
        "Lifetime access",
      ],
      bestseller: true,
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Alex Chen",
      category: "Design",
      level: "Intermediate",
      duration: "8 weeks",
      students: 8934,
      rating: 4.8,
      price: "$149",
      originalPrice: "$219",
      image: "🎨",
      description: "Create stunning user interfaces and experiences with Figma and Adobe XD",
      features: ["25+ design projects", "Industry tools training", "Portfolio development", "1-on-1 mentoring"],
      bestseller: false,
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Mike Rodriguez",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: 12567,
      rating: 4.7,
      price: "$129",
      originalPrice: "$179",
      image: "📈",
      description: "Build comprehensive digital marketing campaigns that drive results",
      features: ["Social media marketing", "SEO & SEM strategies", "Analytics & reporting", "Case study analysis"],
      bestseller: true,
    },
    {
      id: 4,
      title: "Data Science with Python",
      instructor: "Dr. Emily Zhang",
      category: "Data Science",
      level: "Advanced",
      duration: "16 weeks",
      students: 6789,
      rating: 4.9,
      price: "$249",
      originalPrice: "$349",
      image: "📊",
      description: "Master data analysis, machine learning, and visualization with Python",
      features: ["Machine learning algorithms", "Data visualization", "Real datasets", "Industry projects"],
      bestseller: false,
    },
    {
      id: 5,
      title: "Professional Photography",
      instructor: "James Wilson",
      category: "Photography",
      level: "Beginner",
      duration: "10 weeks",
      students: 4321,
      rating: 4.6,
      price: "$169",
      originalPrice: "$229",
      image: "📸",
      description: "Learn professional photography techniques and post-processing skills",
      features: ["Studio lighting setup", "Photo editing mastery", "Portfolio building", "Equipment guidance"],
      bestseller: false,
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      instructor: "Prof. David Kumar",
      category: "Business",
      level: "Intermediate",
      duration: "12 weeks",
      students: 9876,
      rating: 4.8,
      price: "$189",
      originalPrice: "$259",
      image: "💼",
      description: "Develop strategic thinking and leadership skills for business success",
      features: ["Case study analysis", "Leadership frameworks", "Strategic planning", "Team management"],
      bestseller: true,
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: "Total Courses", value: "1200+", icon: BookOpen },
    { label: "Expert Instructors", value: "400+", icon: Users },
    { label: "Students Enrolled", value: "50,000+", icon: GraduationCap },
    { label: "Course Hours", value: "10,000+", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero */}
      <section className=" bg-primary text-white py-12 sm:py-20 sm:px-6 px-8">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Learn from the <br />
            <span className="text-yellow-300">Best Instructors</span>
          </h1>
          <p className="sm:text-xl text-sm mb-8 leading-relaxed">
            Access high-quality courses from industry experts. Master new skills, advance your career, and achieve your learning goals.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400/20"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Browse Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-white">
        <div className="container-padding grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-white border-b">
        <div className="container-padding flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary hover:bg-teal-700" : "border-gray-300 hover:border-teal-300"}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-12 sm:py-20 sm:px-6 px-8">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated selection of courses designed to help you achieve your learning and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {course.bestseller && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 text-white">Bestseller</Badge>
                  </div>
                )}
                <div className="relative bg-gradient-to-br from-teal-100 to-teal-200 p-8 text-center">
                  <div className="text-6xl mb-4">{course.image}</div>
                  <Badge className="bg-white text-primary mb-2">{course.level}</Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{course.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {course.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600">by {course.instructor}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-teal-700">Enroll Now</Button>
                    <Button variant="outline" size="icon"><Play className="w-4 h-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
              <Button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="mt-4 bg-primary hover:bg-teal-700">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-primary text-white text-center">
        <div className="container-padding">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-sm sm:text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our courses and expert instruction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4">
              <GraduationCap className="w-5 h-5 mr-2" /> Browse All Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="w-5 h-5 mr-2" /> Download Course Catalog
            </Button>
          </div>
        </div>
      </section>

     
    </div>
  );
}
