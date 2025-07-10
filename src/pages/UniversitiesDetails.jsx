import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  GraduationCap,
  Users,
  Calendar,
  DollarSign,
  Award,
  BookOpen,
  Globe2,
  Phone,
  Mail,
  ExternalLink,
  Check,
  TrendingUp,
  Building,
  Home,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/Tabs";

// Your universitiesData remains unchanged
const universitiesData = {
  1: {
    id: 1,
    name: "University of Toronto",
    country: "Canada",
    description:
      "Top-ranked university known for research and innovation across multiple disciplines.",
    ranking: 18,
    programs: ["Medicine", "Engineering", "Business", "Computer Science"],
    tuitionRange: "CAD $58,160 - $68,110",
    acceptanceRate: "43%",
    established: 1827,
    students: "97,000+",
    location: "Toronto, Ontario, Canada",
    website: "https://www.utoronto.ca",
    phone: "+1 (416) 978-2011",
    email: "admissions@utoronto.ca",
    longDescription:
      "The University of Toronto is a prestigious public research university founded in 1827...",
    facilities: ["23 Libraries", "Research Centers", "Medical Facilities"],
    accommodations: ["On-campus Residences", "Graduate Housing"],
    employmentRate: "91%",
    averageSalary: "CAD $65,000",
    internationalStudents: "25%",
    campusSize: "714 hectares",
    researchRanking: 5,
    scholarships: [
      {
        name: "Lester B. Pearson International Scholarship",
        amount: "Full tuition + living expenses",
        criteria: "Outstanding academic achievement and leadership",
      },
    ],
    admissionRequirements: {
      gpa: "85% average (A- equivalent)",
      testScores: "SAT: 1350+ or ACT: 30+",
      englishProficiency: "IELTS: 6.5 or TOEFL: 100",
      documents: ["Transcripts", "Personal Statement"],
    },
    programDetails: [
      {
        name: "Computer Science",
        duration: "4 years",
        credits: "120 credits",
        specializations: ["AI/ML", "Data Science"],
      },
    ],
  },
  2: {
    id: 2,
    name: "University of Melbourne",
    country: "Australia",
    description:
      "World-class education and multicultural experience in the heart of Australia.",
    ranking: 33,
    programs: ["Medicine", "Law", "Arts", "Science"],
    tuitionRange: "AUD $33,000 - $47,000",
    acceptanceRate: "70%",
    established: 1853,
    students: "50,000+",
    location: "Melbourne, Victoria, Australia",
    website: "https://www.unimelb.edu.au",
    phone: "+61 3 9035 5511",
    email: "admissions@unimelb.edu.au",
    longDescription:
      "The University of Melbourne is Australia’s leading university, known for excellence in education, research, and engagement.",
    facilities: ["Libraries", "Student Union", "Laboratories"],
    accommodations: ["Student Apartments", "College Residences"],
    employmentRate: "89%",
    averageSalary: "AUD $62,000",
    internationalStudents: "30%",
    campusSize: "22 hectares",
    researchRanking: 7,
    scholarships: [
      {
        name: "Melbourne International Undergraduate Scholarship",
        amount: "Partial to full tuition",
        criteria: "Merit-based international students",
      },
    ],
    admissionRequirements: {
      gpa: "80% average",
      testScores: "ATAR: 85+ or equivalent",
      englishProficiency: "IELTS: 6.5 or TOEFL: 79",
      documents: ["Transcripts", "Recommendation Letters"],
    },
    programDetails: [
      {
        name: "Medicine",
        duration: "6 years",
        credits: "144 credits",
        specializations: ["Surgery", "Pediatrics"],
      },
    ],
  },
  3: {
    id: 3,
    name: "King's College London",
    country: "UK",
    description:
      "Renowned for Medicine, Law, and Humanities with a prestigious heritage.",
    ranking: 40,
    programs: ["Medicine", "Law", "Humanities", "Psychology"],
    tuitionRange: "£28,050 - £46,650",
    acceptanceRate: "13%",
    established: 1829,
    students: "41,000+",
    location: "London, England, UK",
    website: "https://www.kcl.ac.uk",
    phone: "+44 20 7836 5454",
    email: "admissions@kcl.ac.uk",
    longDescription:
      "King’s College London is one of the UK’s oldest and most prestigious universities, with strengths in research and global connections.",
    facilities: ["Libraries", "Clinical Labs", "Law Center"],
    accommodations: ["Residence Halls", "Private Housing"],
    employmentRate: "92%",
    averageSalary: "£38,000",
    internationalStudents: "32%",
    campusSize: "Multiple central London campuses",
    researchRanking: 10,
    scholarships: [
      {
        name: "King’s International Scholarships",
        amount: "£25,000",
        criteria: "International students with academic excellence",
      },
    ],
    admissionRequirements: {
      gpa: "AAA at A-level or equivalent",
      testScores: "UCAS: 144+ points",
      englishProficiency: "IELTS: 7.0 or TOEFL: 100",
      documents: ["Transcripts", "Statement of Purpose"],
    },
    programDetails: [
      {
        name: "Law",
        duration: "3 years",
        credits: "360 credits",
        specializations: ["International Law", "Corporate Law"],
      },
    ],
  },
};

export default function UniversityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const university = id ? universitiesData[parseInt(id)] : null;

  if (!university) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            University Not Found
          </h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Universities
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Universities
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* University Image/Placeholder */}
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-primary/60" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    #{university.ranking} Globally
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    #{university.researchRanking} Research
                  </Badge>
                </div>
              </div>
            </div>

            {/* University Info */}
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {university.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {university.established}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{university.students} students</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {university.longDescription}
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {university.acceptanceRate}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Acceptance Rate
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {university.employmentRate}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Employment Rate
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {university.internationalStudents}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      International
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {university.averageSalary}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg. Salary
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe2 className="w-4 h-4 mr-2" />
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`mailto:${university.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Admissions
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`tel:${university.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="programs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="campus">Campus Life</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Academic Programs
              </h3>
              <div className="grid gap-6">
                {university.programDetails.map((program, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {program.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            Duration:
                          </span>
                          <div className="font-medium">{program.duration}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Credits:
                          </span>
                          <div className="font-medium">{program.credits}</div>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">
                          Specializations:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {program.specializations.map((spec) => (
                            <Badge key={spec} variant="outline">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="admissions" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Admission Requirements
              </h3>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Academic Requirements
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-muted-foreground">
                            Minimum GPA:
                          </span>
                          <div className="font-medium">
                            {university.admissionRequirements.gpa}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Test Scores:
                          </span>
                          <div className="font-medium">
                            {university.admissionRequirements.testScores}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            English Proficiency:
                          </span>
                          <div className="font-medium">
                            {
                              university.admissionRequirements
                                .englishProficiency
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Required Documents
                      </h4>
                      <div className="space-y-2">
                        {university.admissionRequirements.documents.map(
                          (doc) => (
                            <div key={doc} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span className="text-sm">{doc}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Scholarships & Financial Aid
              </h3>
              <div className="grid gap-4">
                {university.scholarships.map((scholarship, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-primary" />
                        {scholarship.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <div className="font-bold text-primary">
                          {scholarship.amount}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Criteria:</span>
                        <div>{scholarship.criteria}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="campus" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Campus Life
              </h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-primary" />
                      Campus Facilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {university.facilities.map((facility) => (
                        <div key={facility} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-primary" />
                      Accommodation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {university.accommodations.map((accommodation) => (
                        <div
                          key={accommodation}
                          className="flex items-center gap-2"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm">{accommodation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-primary text-primary-foreground rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get personalized guidance and support throughout your application
            process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
