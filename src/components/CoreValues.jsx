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
  <section className="py-24 px-6  text-center">
  

    <h2 className="text-4xl font-bold text-purple-800 mb-4">Our Core Values</h2>

    <p className="text-gray-600 text-sm max-w-xl mx-auto mb-12">
      These values shape our culture and define how we guide students through their educational journey abroad.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {values.map((value, i) => (
        <div
          key={i}
          className="group bg-white/60 backdrop-blur-xl border border-purple-100 hover:border-purple-600 hover:bg-purple-700 transition rounded-2xl shadow-xl p-6 text-left flex flex-col items-start hover:scale-105 transform duration-300"
        >
          <div className="mb-4 p-3 bg-white rounded-full shadow group-hover:bg-white/20 transition">
            {value.icon}
          </div>
          <h3 className="text-xl font-semibold text-purple-800 group-hover:text-white mb-2 transition">
            {value.title}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-white/90 transition">{value.description}</p>
        </div>
      ))}
    </div>
  </section>
);


export default CoreValuesSection;
