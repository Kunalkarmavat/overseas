import {
  ShieldCheck,
  Star,
  HeartHandshake,
  UsersRound,
  Target,
  Sparkles,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "We act honestly and uphold strong moral principles.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-700 group-hover:text-white transition" />,
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
    icon: <Star className="w-6 h-6 text-purple-700 group-hover:text-white transition" />,
  },
  {
    title: "Commitment",
    description: "We dedicate ourselves fully to our students’ success.",
    icon: <HeartHandshake className="w-6 h-6 text-purple-700 group-hover:text-white transition" />,
  },
  {
    title: "Respect",
    description: "We value diversity and treat everyone with dignity.",
    icon: <UsersRound className="w-6 h-6 text-purple-700 group-hover:text-white transition" />,
  },
  {
    title: "Responsibility",
    description: "We are accountable for our guidance and support.",
    icon: <Target className="w-6 h-6 text-purple-700 group-hover:text-white transition" />,
  },
  {
    title: "Innovation",
    description: "We continuously evolve and embrace change to improve our services.",
    icon: <Sparkles className="w-6 h-6 text-purple-700 group-hover:text-white transition" />,
  },
];
const CoreValuesSection = () => (
  <section className="py-12 sm:py-20 sm:px-6 px-8  text-center">
  
  <h1 className="text-4xl font-plein sm:w-3/4 lg:text-5xl font-bold leading-tight mb-6 text-darkPurple m-auto">
  Our Core Values 
      </h1>

      <p className="m-auto text-black text-base mb-12 leading-relaxed w-full sm:w-1/2">
        Everything you need to plan, apply, and succeed in your study abroad journey.
      </p>



    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
      {values.map((value, i) => (
        <div
          key={i}
          className="group bg-lightLavender backdrop-blur-xl border border-purple-100 hover:border-purple-600 hover:bg-darkPurple transition rounded-2xl shadow-xl p-6 text-left flex flex-col items-start hover:scale-105 transform duration-300"
        >
          <div className="mb-4 p-3 bg-white rounded-full shadow group-hover:bg-white/20 transition">
            {value.icon}
          </div>
       
        
          <h3 className="font-bold text-lg mb-2 text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white">
              {value.title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-purple-200">
              {value.description}
            </p>
        </div>
      ))}
    </div>
  </section>
);


export default CoreValuesSection;
