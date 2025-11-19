import { useRef } from "react";
import Card from "./Card";
import { Globe } from "./Globe";
import CopyEmailButton from "./CopyEmailButton";
import { Frameworks } from "./Frameworks";

const AboutSection = () => {
  const grid2Container = useRef();

  return (
    <section
      className="sm:px-10 px-5 lg:px-15 mt-20 md:mt-30 container mx-auto max-w-7xl"
      id="about"
    >
      <h2 className="font-bold text-3xl md:text-4xl animate-fade-in">
        <span className="text-primary">About</span> Me
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 animate-fade-in-delay-1">
          <img
            src="/coding-pov.png"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext mt-2 mb-2 text-xl">
              Hi, I'm Ishtiaque Hossain
            </p>
            <p className="subtext">
              Through continuous practice and personal projects, I’ve
              strengthened my frontend and backend development skills, allowing
              me to build clean, dynamic, and user-focused web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 animate-fade-in-delay-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>

            {/* Animated Cards */}
            <Card
              className="animate-fade-in"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="C++"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-1"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="DSA"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-2"
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="OOP"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-3"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="REACT"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-4"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="NODE"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-3"
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="/c++.png"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-2"
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="/src/assets/react.svg"
              containerRef={grid2Container}
            />
            <Card
              className="animate-fade-in-delay-4"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="/Node.js.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3 animate-fade-in-delay-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4 animate-fade-in-delay-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 animate-fade-in-delay-2">
          <div className="z-10 w-[50%] space-y-3">
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              Tech Stack
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
