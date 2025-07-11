import React from "react";
import { FaUserTie, FaGlobe, FaFileAlt, FaPassport, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

const services = [
  {
    title: "Counseling & Profile Evaluation",
    icon: <FaUserTie className="text-white text-xl" />,
    description: "Personalized 1-on-1 sessions to assess your academic strengths and guide your goals.",
    color: "bg-blue-500",
  },
  {
    title: "Country & University Selection",
    icon: <FaGlobe className="text-white text-xl" />,
    description: "Get curated lists of institutions based on budget, goals, and career prospects.",
    color: "bg-green-500",
  },
  {
    title: "Application & Admission Help",
    icon: <FaFileAlt className="text-white text-xl" />,
    description: "Stand out with expert help on SOPs, LORs, resumes, and application portals.",
    color: "bg-purple-500",
  },
  {
    title: "Visa Filing & Documentation",
    icon: <FaPassport className="text-white text-xl" />,
    description: "Full guidance through visa forms, embassy procedures, and interviews.",
    color: "bg-red-500",
  },
  {
    title: "Loan Assistance",
    icon: <FaMoneyBillWave className="text-white text-xl" />,
    description: "Secure quick approvals and low-interest loans via trusted financial partners.",
    color: "bg-yellow-500",
  },
  {
    title: "Internship Support",
    icon: <FaBriefcase className="text-white text-xl" />,
    description: "Find global internship opportunities tailored to tech & non-tech profiles.",
    color: "bg-indigo-500",
  },
];

const OurServices = () => {
  return (
    <section className=" py-12 sm:py-20 sm:px-6 px-8 text-center  flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6 font-plein sm:w-3/4 lg:text-5xl font-bold leading-tight text-darkPurple">
        Our Services
      </h1>

      <p className="text-black text-base mb-12 leading-relaxed w-full sm:w-1/2">
        Everything you need to plan, apply, and succeed in your study abroad journey.
      </p>

      <div className="grid gap-[2.5rem] sm:grid-cols-2 md:grid-cols-3 max-w-[87rem] text-left">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition duration-300 border hover:border-primary`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.color}`}>
              {service.icon}
            </div>

            <h3 className="font-bold text-lg mb-2 text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-darkPurple">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-black">
              {service.description}
            </p>

     
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
