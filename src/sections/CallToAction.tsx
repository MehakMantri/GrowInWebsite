"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = () => {
      animate(
        scope.current,
        { x: "-50%" },
        { duration: 30, ease: "linear", repeat: Infinity }
      );
    };

    startAnimation();

    if (isHovered) {
      animate(scope.current, { x: "-50%" }, { duration: 60, ease: "linear", repeat: Infinity });
    } else {
      animate(scope.current, { x: "-50%" }, { duration: 30, ease: "linear", repeat: Infinity });
    }
  }, [isHovered, animate, scope]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
