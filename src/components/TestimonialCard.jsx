import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Tunde O.",
      location: "Lagos, Nigeria",
      quote: "Loft was a breath of fresh air. The apartment was neat, well-furnished, and in a secure area. I stayed for a work trip in Leiki and didn't want to leave. Great value for money!",
      avatar: "T"
    },
    {
      id: 2,
      name: "Chinelo A.",
      location: "Abuja, Nigeria",
      quote: "From check-in to check-out, everything was smooth. The place was so cozy and had this modern vibe. I even hosted a small hangout with friends. Will definitely book again.",
      avatar: "C"
    },
    {
      id: 3,
      name: "Idris B.",
      location: "Port Harcourt, Nigeria",
      quote: "I needed a quiet place to relax and Loft delivered. The location was central, the Wi-Fi was strong, and the host was super responsive. 10/10 experience.",
      avatar: "I"
    }
  ];

  return (
    <div className="py-12 sm:py-20 sm:px-6 px-8 min-h-screen bg-darkPurple  text-white">
      <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-plein sm:w-2/4  lg:text-5xl font-bold leading-tight mb-6 text-white m-auto text-center" >
        Transforming Visa Dreams into Reality
      </h1>

      <p className="text-center text-whiteś m-auto text-base mb-12 leading-relaxed w-full sm:w-1/2">
      SS Overseas provides full support in documentation, university selection, and visa filing.
      </p>
        <div className="text-center">
        
        
        
          <div className="w-24 h-1 bg-[#6A2C8B] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#9B59B6]/20 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#6A2C8B]">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#6A2C8B]">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-0 text-6xl text-[#9B59B6]/10 font-serif italic">“</div>
                  <p className="text-gray-700 pl-8 pt-4 italic">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-[#6A2C8B]/30 transition-colors">
            Read More Stories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
