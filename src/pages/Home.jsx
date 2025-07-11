import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HerosSection";
import "../App.css";
import VisionMission from "../components/VisionSection";
import CoreValuesSection from "../components/CoreValues";
import OfferedCountriesSection from "../components/offeredCountries";
import TestimonialSection from "../components/TestimonialCard";
import Programs from "../components/Programs";
import SubscribeSection from "./SubscribeSection";
import OurServices from "../components/ServiceCard";



const Home = () => {
  return (

    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="">
        <HeroSection />
      </section>
      <OfferedCountriesSection />
      <OurServices />
      <CoreValuesSection />


      {/* Abroad Programs */}

      <Programs />


      {/* Story Timeline */}
      <section className="py-12 sm:py-20 sm:px-6 px-8 bg-gray-100 ">
        <div className="max-w-4xl mx-auto text-center">

        
              
      <h1 className="text-4xl m-auto  font-plein sm:w-10/12 lg:text-5xl font-bold leading-tight mb-6 text-darkPurple">
        Our Journey
      </h1>

      <p className="text-black  m-auto text-base mb-16 leading-relaxed w-full sm:w-1/2">
        Everything you need to plan, apply, and succeed in your study abroad journey.
      </p>

       
          <h2 className="text-3xl font-bold text-purple-800 mb-8"></h2>
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Started in 2015</h3>
              <p>Helping Indian students reach USA, UK, Canada, and Australia. First 50 students successfully placed.</p>


            </div>
            <div>
              <h3 className="text-xl font-semibold">Now in 2024</h3>
              <p>Leading with AI counseling, VR tours, and over 1800+ global placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Offered */}
   

      {/* Testimonials */}


      <TestimonialSection />

      {/* Newsletter */}


    </main>
  );
};

export default Home;
