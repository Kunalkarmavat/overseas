import React from "react";
import { ArrowRight } from "lucide-react";

const programs = [
    {
      title: "10 Month's Apple Academy Program",
      desc: "The Apple Developer Academy offers a comprehensive program aimed at nurturing aspiring developers, designers, and entrepreneurs. The curriculum covers coding, design, and business skills using Apple's tools.",
img: "https://www.ssoverseas.in/assets/img/image/page-service-img1.png"
    },
    {
      title: "Two Years Master's Program",
      desc: "Once you start your Two Years program, prioritize your studies while also taking advantage of opportunities for research, internships, or extracurricular activities that align with your academic and career goals.",
      img: "https://www.ssoverseas.in/assets/img/image/page-service-img2.png", // Graduation students
    },
    {
      title: "Three Years Bachelors' Program",
      desc: "Start by researching universities and programs that offer the master's degree you're interested in. Consider factors like the reputation of the university, the curriculum, faculty expertise, available resources, and opportunities.",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Students studying
    },
  ];
  

const Programs = () => {
  return (
    <section className="py-12 sm:py-20 sm:px-6 px-8 bg-gray-50 text-center">
   

      <h1 className="text-4xl m-auto font-plein sm:w-3/4 lg:text-5xl font-bold leading-tight mb-6 text-darkPurple">
  Abroad Programs
      </h1>

      <p className="text-black  m-auto text-base mb-12 leading-relaxed w-full sm:w-1/2">
        Everything you need to plan, apply, and succeed in your study abroad journey.
      </p>



      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map(({ title, desc, img }, i) => (
          <div
            key={i}
            className="group bg-white shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 group-hover:text-purple-600 transition">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{desc}</p>
              <button className="text-purple-700 font-medium flex items-center gap-2 group-hover:text-purple-900 transition">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
