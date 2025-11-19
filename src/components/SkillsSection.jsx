import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiCplusplus,
} from "react-icons/si";

const icons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-sky-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400" />, name: "Express" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
  { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
  { icon: <SiVercel className="text-white" />, name: "Vercel" },
  { icon: <SiCplusplus className="text-blue-400" />, name: "C++" },
];

export const SkillsSection = () => {
  const [direction, setDirection] = useState("left");

  return (
    <section
      id="skills"
      className="py-24 bg-secondary/30 relative overflow-hidden w-screen"
    >
      <div className="mx-auto max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* 🌀 Marquee Icon Row */}
        <div
          onClick={() =>
            setDirection((prev) => (prev === "left" ? "right" : "left"))
          }
          className="relative cursor-pointer border-y border-border py-6 overflow-hidden w-screen"
        >
          <div
            className={`flex gap-12 items-center whitespace-nowrap animate-marquee ${
              direction === "right" ? "animate-marquee-reverse" : ""
            }`}
          >
            {[...icons, ...icons].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform min-w-[100px]"
              >
                <div className="text-6xl">{item.icon}</div>
                <span className="text-sm text-muted-foreground">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
