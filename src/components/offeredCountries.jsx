import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const countries = [
  { name: "United States", flag: "https://flagcdn.com/us.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
];

const OfferedCountriesSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth / 2;

      gsap.fromTo(
        marqueeRef.current,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 20,
          ease: "linear",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  // Duplicate countries for seamless scroll
  const scrollingCountries = [...countries, ...countries];

  return (
    <section className="py-12 sm:py-20 sm:px-6 px-8 text-center overflow-hidden flex flex-col items-center justify-center">

<h1 className="font-plein text-4xl    sm:w-3/4 lg:text-5xl font-bold leading-tight mb-6 text-darkPurple ">
Countries We Offer
            </h1>
   
 
      <p className="text-black text-base mb-6 leading-relaxed ">
        We provide educational guidance for students across these countries and more.
              </p>

      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max gap-6"
        >
          {scrollingCountries.map((country, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 min-w-[180px]"
            >
              <div className="w-20 h-12 overflow-hidden border border-purple-300 rounded-md mb-3 bg-white">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-800">{country.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OfferedCountriesSection;
