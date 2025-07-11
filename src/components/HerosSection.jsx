import React from "react";
import { Star, BookOpen, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import studentImage from "../assets/image.png";
import AbroadStudyFeatures from "./AbroadStudy";
import { FaAdjust, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (

<section
  className="relative overflow-hidden min-h-screen px-8 sm:px-20 pt-12 sm:pt-0 "
  
>

      <div className="container-padding relative z-10 ">
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[calc(100vh-180px)] ">
          {/* Left Section */}
          <div className="w-full   animate-slide-in-left text-black">
          
            {/* reduced text-lg to text-base, mb-4 to mb-3 */}

          


            <h1 className="text-4xl  font-plein sm:w-3/4 lg:text-6xl font-bold leading-tight mb-6">
          We Help to <span className="text-darkPurple">Build </span>
              Your Dream
            </h1>
            <p className="text-black text-base mb-6 leading-relaxed ">
              
            Our team of experts is dedicated to guiding you through every step of the process, ensuring a smooth and successful journey towards your academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="hover:bg-white bg-purple-900 hover:text-purple-500 text-white font-semibold text-lg px-[3rem] py-[1.8rem] rounded-xl transition-colors duration-300,"
              >
                Book Appointment
<FaArrowRight className="ml-4"/>
              </Button>

           
            </div>
          
          </div>

          {/* Right Section */}
          <div className="-z-20 w-full lg:w-10/12 animate-slide-in-right relative">
            <img
              src={studentImage}
              alt="Happy student"
              className="w-[90rem] relative top-[1rem] "
            />{" "}
            {/* Reduced width from 102rem to 90rem */}
            {/* Floating Stats */}
            <div className="absolute top-4 sm:top-20 sm:right-12 -right-2 bg-white/90  border-[1px] border-darkPurple rounded-xl p-3 shadow-lg animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-teal-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Courses</p>
                  <p className="text-lg font-bold text-gray-900">1200+</p>
                </div>
              </div>
            </div>
            <div className="absolute top-20  sm:top-44  sm:left-8 -left-2 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce border-[1px] border-darkPurple ">
              <div className=" flex items-center space-x-3">
                <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div className="">
                  <p className="text-xs  text-gray-600">Total Instructors</p>
                  <p className="text-lg font-bold text-gray-900">400+</p>
                </div>
              </div>
            </div>
            <div
              className="absolute border-[1px] border-darkPurple  bottom-4 sm:bottom-32 -right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce "
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-3 ">
                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Students</p>
                  <p className="text-lg font-bold text-gray-900">20,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AbroadStudyFeatures />
      </div>
    </section>
  );
};

export default HeroSection;
