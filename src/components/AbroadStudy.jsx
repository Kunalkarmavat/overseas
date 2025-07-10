import React from "react";
import { Globe, BookOpen, UserCheck, Calendar } from "react-feather";

const AbroadStudyFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Global University Network",
      desc: "Access top universities worldwide and expand your academic horizons.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Course Selection",
      desc: "Choose from a vast range of programs tailored to your career goals.",
    },
    {
      icon: UserCheck,
      title: "Expert Admission Guidance",
      desc: "Get personalized support from experts to simplify your application process.",
    },
    {
      icon: Calendar,
      title: "Flexible Start Dates",
      desc: "Enroll in courses that fit your schedule with multiple intake periods.",
    },
  ];

  return (
    <div className="bg-primary rounded-3xl shadow-2xl p-8 mb-8" >
      <div className="grid md:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }, index) => (
          <div
            key={index}
            className="group text-center p-6 rounded-2xl bg-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-darkPurple cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ease-in-out group-hover:bg-white ">
              <Icon className="w-6 h-6 text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-purple-200">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbroadStudyFeatures;
