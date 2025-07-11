import React, { useState, useMemo } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  GraduationCap,
  ArrowRight,
  Globe2,
} from "lucide-react";

const universities = [
  {
    id: 1,
    name: "University of Toronto",
    country: "Canada",
    description:
      "Top-ranked university known for research and innovation across multiple disciplines.",
    ranking: 18,
    programs: ["Medicine", "Engineering", "Business", "Computer Science"],
    tuitionRange: "CAD $58,160 - $68,110",
    acceptanceRate: "43%",
    image: "/api/placeholder/400/300",
    established: 1827,
    students: "97,000+",
  },
  {
    id: 2,
    name: "University of Melbourne",
    country: "Australia",
    description:
      "World-class education and multicultural experience in the heart of Australia.",
    ranking: 33,
    programs: ["Medicine", "Law", "Arts", "Science"],
    tuitionRange: "AUD $33,000 - $47,000",
    acceptanceRate: "70%",
    image: "/api/placeholder/400/300",
    established: 1853,
    students: "50,000+",
  },
  {
    id: 3,
    name: "King's College London",
    country: "UK",
    description:
      "Renowned for Medicine, Law, and Humanities with a prestigious heritage.",
    ranking: 40,
    programs: ["Medicine", "Law", "Humanities", "Psychology"],
    tuitionRange: "£28,050 - £46,650",
    acceptanceRate: "13%",
    image: "/api/placeholder/400/300",
    established: 1829,
    students: "41,000+",
  },
];

const countries = ["All Countries", "Canada", "Australia", "UK"];

export default function Universities() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.programs.some((program) =>
          program.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCountry =
        selectedCountry === "All Countries" || uni.country === selectedCountry;
      return matchesSearch && matchesCountry;
    });
  }, [searchTerm, selectedCountry]);

  return (
    <div className="  to-blue-50  text-gray-800">
      {/* Hero */}
      <section className="  py-12 sm:py-20 sm:px-6 px-8  text-center bg-primary">
      <div className="max-w-4xl mx-auto  text-center">
      <h2 className="text-4xl md:text-6xl  font-bold mb-4">
        
        </h2>

        <h1 className="text-3xl text-white lg:text-6xl font-bold mb-6">
        Explore Top <span className="text-yellow-300">Universities</span>{" "}
        Worldwide
              <br />
            </h1>
        <p className="sm:text-lg text-sm text-white mb-8 max-w-2xl mx-auto">
        From personal mentoring to university placement, we provide
              end-to-end support for your educational journey. Choose from our
              range of premium services designed to accelerate your success.
        </p>
          

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 max-w-2xl mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search universities, programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
          <div className="w-full md:w-48">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full py-2 px-4 border rounded-md"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto  mb-8">
          {[
            { label: "Partner Universities", value: "500+" },
            { label: "Countries", value: "50+" },
            { label: "Success Rate", value: "95%" },
            { label: "Support", value: "24/7" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* University Cards */}
      <section className="container mx-auto py-12 sm:py-20 sm:px-6 px-8">
        <h3 className="text-2xl font-bold mb-4">Featured Universities</h3>
        <p className="mb-6 text-gray-500">
          {filteredUniversities.length} universit
          {filteredUniversities.length === 1 ? "y" : "ies"} found
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              onMouseEnter={() => setHoveredCard(uni.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 bg-white p-4 cursor-pointer ${
                hoveredCard === uni.id ? "scale-105" : ""
              }`}
            >
              <div className="relative h-48 bg-lightLavender flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-darkPurple" />
                <div className="absolute top-4 left-4 bg-white/70 px-3 py-1 text-sm rounded">
                  #{uni.ranking} Globally
                </div>
                <div className="absolute top-4 right-4 bg-white/70 w-8 h-8 flex items-center justify-center rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <div className="py-4 space-y-3">
                <h4 className="text-xl font-bold">{uni.name}</h4>
                <div className="flex items-center text-gray-500 gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{uni.country}</span>
                  <span>•</span>
                  <span>Est. {uni.established}</span>
                </div>
                <p className="text-sm text-gray-600">{uni.description}</p>

                <div className="flex flex-wrap gap-1 text-sm">
                  {uni.programs.slice(0, 3).map((prog) => (
                    <span key={prog} className="bg-gray-200 px-2 py-1 rounded">
                      {prog}
                    </span>
                  ))}
                  {uni.programs.length > 3 && (
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      +{uni.programs.length - 3}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                  <div>
                    <div className="text-gray-500">Tuition</div>
                    <div>{uni.tuitionRange}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Acceptance</div>
                    <div>{uni.acceptanceRate}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {uni.students} students enrolled
                </div>
                <button
                  className="w-full bg-primary text-white py-2 rounded hover:bg-darkPurple flex justify-center items-center gap-2"
                  onClick={() => navigate(`/university/${uni.id}`)}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center mt-16">
            <Search className="w-8 h-8 mx-auto text-gray-400 mb-4" />
            <h4 className="text-lg font-semibold">No universities found</h4>
            <p className="text-gray-500">
              Try changing filters or search terms.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-primary text-white text-center py-12 sm:py-20 sm:px-6 px-8">
        <h3 className="text-3xl font-bold mb-2">
          Ready to Start Your Journey?
        </h3>
        <p className="text-lg mb-6">Get personalized guidance and support.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-gray-100">
            Get Free Consultation
          </button>
          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-primary">
            Browse All Universities
          </button>
        </div>
      </section>


    </div>
  );
}
