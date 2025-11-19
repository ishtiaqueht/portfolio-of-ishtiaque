import { OrbitingCircles } from "./OrbitingCircles";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";

export function Frameworks() {
  // Big Orbit (Outer)
  const bigSkills = [
    { icon: <FaReact />, color: "text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]" },
    { icon: <FaJs />, color: "text-yellow-400 shadow-[0_0_15px_rgba(249,215,22,0.7)]" },
    { icon: <SiTailwindcss />, color: "text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.7)]" },
    { icon: <FaNodeJs />, color: "text-green-600 shadow-[0_0_15px_rgba(22,163,74,0.7)]" },
    
  ];

  // Small Orbit (Inner)
  const smallSkills = [
    { icon: <SiExpress />, color: "text-gray-700 shadow-[0_0_12px_rgba(107,114,128,0.6)]" },
    { icon: <SiMongodb />, color: "text-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" },
     { icon: <SiCplusplus />, color: "text-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.7)]" },
  ];

  return (
    <div className="relative flex h-[20rem] w-full items-center justify-center">

      {/* Center Sun */}
      <div className="w-12 h-12 rounded-full bg-yellow-400 shadow-[0_0_70px_20px_rgba(253,230,138,0.9)] z-20 animate-[pulse-slow_3s_ease-in-out_infinite]" />

      {/* Big Orbit */}
      <OrbitingCircles radius={120} speed={1.2} duration={40}>
        {bigSkills.map((s, i) => (
          <div
            key={i}
            className={`flex items-center justify-center w-[35px] h-[35px] rounded-full ${s.color} text-3xl`}
          >
            {s.icon}
          </div>
        ))}
      </OrbitingCircles>

      {/* Small Orbit */}
      <OrbitingCircles radius={80} speed={2} reverse duration={25}>
        {smallSkills.map((s, i) => (
          <div
            key={i}
            className={`flex items-center justify-center w-[25px] h-[25px] rounded-full ${s.color} text-2xl`}
          >
            {s.icon}
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}
