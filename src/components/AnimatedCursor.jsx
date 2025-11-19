import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [clickPulse, setClickPulse] = useState(false);

  // Mouse pos
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow
  const cursorX = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const cursorY = useSpring(mouseY, { stiffness: 250, damping: 25 });

  // Space dust particles
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Particle trail effect
      setParticles((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1, // Random size 1-4px
          color: `hsl(${200 + Math.random() * 60}, 100%, 70%)`, // Neon space colors
          blur: Math.random() * 2 + 1, // Random blur 1-3px
        },
      ]);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Auto remove old particles
  useEffect(() => {
    if (particles.length > 30) {
      setParticles((p) => p.slice(5));
    }
  }, [particles]);

  // Hover detection for buttons/links
  useEffect(() => {
    const targets = document.querySelectorAll("button, a, .magnetic");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });
  }, []);

  // Click pulse
  useEffect(() => {
    const trigger = () => {
      setClickPulse(true);
      setTimeout(() => setClickPulse(false), 250);
    };

    window.addEventListener("mousedown", trigger);
    window.addEventListener("touchstart", trigger);

    return () => {
      window.removeEventListener("mousedown", trigger);
      window.removeEventListener("touchstart", trigger);
    };
  }, []);

  return (
    <>
      {/* 🌌 Space Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: p.x,
            y: p.y,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-none fixed rounded-full z-[9998]"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            filter: `blur(${p.blur}px)`,
          }}
        />
      ))}

      
      {/* Middle Glow Ring */}
      <motion.div
        className="pointer-events-none fixed rounded-full 
                   border border-fuchsia-400/70 
                   shadow-[0_0_20px_5px_rgba(217,70,239,0.5)]
                   z-[9999]"
        style={{
          width: hovering ? 30 : 22,
          height: hovering ? 30 : 22,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: clickPulse ? 0.4 : 1,
        }}
      />

      {/* Inner Core Dot */}
      <motion.div
        className="pointer-events-none fixed rounded-full 
                   bg-white shadow-[0_0_10px_4px_rgba(255,255,255,0.9)]
                   z-[9999]"
        style={{
          width: hovering ? 10 : 8,
          height: hovering ? 10 : 8,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clickPulse ? 0.7 : 1,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
