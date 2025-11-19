import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { FaRocket, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/ishtiaqueht",
      color: "bg-gray-800 text-white hover:bg-gray-700",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ishtiaqueht/",
      color: "bg-blue-700 text-white hover:bg-blue-600",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/ishtiaque.hossaintanbin.1",
      color: "bg-blue-600 text-white hover:bg-blue-500",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-14 py-10 sm:py-16 overflow-hidden"
    >
      {/* ===== Left Section ===== */}
      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 z-10 text-center lg:text-left">
        {/* Available Badge */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full text-xs sm:text-sm mx-auto lg:mx-0"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          Available for Projects
        </motion.div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ">
          <span className="text-primary  opacity-0 animate-fade-in-delay-1 ">
            Ishtiaque
          </span>

          <span className="text-gradient  opacity-0 animate-fade-in-delay-2 pl-1.5 lg:pl-3">
            Hossain
          </span>
        </h1>

        

        {/* View Work Button */}
        <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center lg:justify-start">
          <a
            href="/resumOfIshtiaque.pdf"
            download
            class="relative inline-flex items-center justify-center px-5 py-2.5 text-base font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Download Resume
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-3 pt-2 flex-wrap animate-float">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
        w-11 h-11 sm:w-10 sm:h-10
        flex items-center justify-center
        rounded-full text-lg
        bg-transparent text-primary
        shadow-md border border-gray-200
        transition-all duration-500 ease-in-out
        hover:text-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
        relative overflow-hidden
      "
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Animated Gradient Overlay */}
              <span
                className="
          absolute inset-0 rounded-full
          bg-gradient-to-tr from-purple-500 to-white-500
          opacity-0 hover:opacity-100
          transition-opacity duration-500
        "
              ></span>

              {/* Icon */}
              <span className="relative z-10">{link.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ===== Right Image Section ===== */}
      <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end z-10">
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer Gradient Ring */}
          <div
            className="
              relative p-[5px] sm:p-[6px] rounded-full 
              bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 
              gradient-ring animate-gradient-spin
              shadow-[0_0_40px_rgba(147,51,234,0.4)]
            "
          >
            {/* Inner Background + Image */}
            <div className="rounded-full bg-background p-[3px] sm:p-1">
              <img
                src="/hero-image - Edited.png"
                alt="Hero"
                className="w-40 sm:w-56 md:w-72 lg:w-[26rem] rounded-full shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Floating Rocket */}
          <motion.div
            className="absolute -top-1 -right-2 sm:-top-2 sm:-right-3 w-5 h-5 sm:w-7 sm:h-7 bg-purple-400 rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaRocket className="text-white text-xs sm:text-base" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background blur-3xl"></div>
    </section>
  );
};
