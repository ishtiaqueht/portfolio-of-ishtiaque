import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={`w-full h-screen mb-15 relative flex items-center justify-center overflow-hidden`}
    >
      {/* Heading */}
      <motion.h1
        style={{ y: yText }}
        className="font-extrabold text-[60px] sm:text-[72px] md:text-[90px] lg:text-[100px] text-center z-10 px-4"
      >
        What I Did?
      </motion.h1>

      {/* Mountains Background */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom z-30"
        style={{
          backgroundImage: "url('/mountains.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>

      {/* Planets / Sun Background */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom z-20"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>

      {/* Stars Background */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom z-10"
        style={{
          x: yBg,
          backgroundImage: "url('/stars.png')",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
