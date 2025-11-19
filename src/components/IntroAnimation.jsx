import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "Здравствуйте",
  "Merhaba",
  "Γειά",
  "Hej",
  "Hallo",
  "Salam",
];

const FINAL_GREETING_HOLD_TIME = 1500; 

const IntroAnimation = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  

  const [index, setIndex] = useState(0);

  const greetingsList = useMemo(() => greetings, []);

  useEffect(() => {
    if (index < greetingsList.length - 1) {
      const id = setInterval(() => {
        setIndex((i) => i + 1);
      }, 350);
      
      return () => clearInterval(id);
    } 
    
    if (index === greetingsList.length - 1) {
      const t = setTimeout(() => {
        setVisible(false); 
      }, FINAL_GREETING_HOLD_TIME);

      return () => clearTimeout(t);
    }

  }, [index, greetingsList.length]); // Dependencies for controlling the stage

  return (
    <AnimatePresence 
      mode="wait" 
      onExitComplete={onFinish}
    >
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
          
          initial={{ y: 0 }} 
          exit={{ y: "-100%" }} 
          transition={{
            duration: 1.05, // Duration of the exit animation
            ease: [0.22, 1, 0.36, 1], // Cubic-bezier for a smooth effect
          }}
        >
          {/* Greeting Text Animation */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetingsList[index]} // Key must change to trigger AnimatePresence on text
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} // Text exits quickly while screen holds
              transition={{ duration: 0.2 }}
              className="text-5xl md:text-7xl font-bold"
            >
              {greetingsList[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;