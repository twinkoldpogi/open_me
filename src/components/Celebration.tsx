import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { FloatingElements } from "./floatinghearts";

const gifMemes = [
  "https://media.giphy.com/media/ts0Uy1zVJTvCo/giphy.gif?cid=ecf05e47wj0g01ro3dmaq6hu0zpzq14i8mdflisskskp972x&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJpejRidDc5aDY3c3NuemN3eGUzcmI4b2p6dm8xYTFraWE4Ymt1MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vSbW8dAA1n516fYcbm/giphy.gif",
];

export const Celebration = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl mb-8 text-red-400 font-serif">
        Yay! 💖
      </h1>
      <FloatingElements />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {gifMemes.map((gif, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="aspect-square bg-valentine-pink rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={gif}
              alt="Celebration gif"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Celebration;
