"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function NavbarLamp({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed top-[63px] left-0 right-0 w-full h-[500px] overflow-hidden z-10 pointer-events-none",
        className
      )}
    >
      {/* Main lamp light cone */}
      <div className="relative flex w-full h-full items-start justify-center">
        {/* Lamp fixture at the top */}
        <div className="absolute -top-[1px] z-50 w-full flex justify-center">
          {/* Lamp housing */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="w-16 h-2 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 rounded-full shadow-lg border-t border-slate-300"
          />
          
          {/* Light source */}
          <motion.div
            initial={{ width: "1rem", opacity: 0.6 }}
            animate={{ width: "2rem", opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1 h-0.5 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 rounded-full shadow-lg shadow-cyan-300/70 blur-[0.5px]"
          />
        </div>

        {/* Left light cone */}
        <motion.div
          initial={{ opacity: 0.2, width: "6rem" }}
          animate={{ opacity: 0.4, width: "25rem" }}
          transition={{
            delay: 0.3,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 top-2 h-[400px] w-[25rem] bg-gradient-conic from-cyan-300/40 via-cyan-400/20 to-transparent [--conic-position:from_65deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right light cone */}
        <motion.div
          initial={{ opacity: 0.2, width: "6rem" }}
          animate={{ opacity: 0.4, width: "25rem" }}
          transition={{
            delay: 0.3,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 top-2 h-[400px] w-[25rem] bg-gradient-conic from-transparent via-cyan-400/20 to-cyan-300/40 [--conic-position:from_295deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Central bright beam */}
        <motion.div
          initial={{ opacity: 0.3, scaleY: 0.5, width: "4rem" }}
          animate={{ opacity: 0.6, scaleY: 1, width: "8rem" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-2 z-30 h-60 w-32 bg-gradient-to-b from-cyan-300/30 via-cyan-400/20 to-transparent rounded-full blur-xl"
        />

        {/* Intense center light */}
        <motion.div
          initial={{ opacity: 0.4, width: "2rem" }}
          animate={{ opacity: 0.8, width: "6rem" }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-2 z-40 h-40 w-24 bg-gradient-to-b from-cyan-400/40 via-cyan-300/30 to-transparent rounded-full blur-2xl"
        />

        {/* Page illumination overlay */}
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.2 }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 w-full h-full bg-gradient-to-b from-cyan-400/5 via-cyan-300/8 via-cyan-400/5 to-transparent"
        />

        {/* Subtle environmental lighting */}
        <div className="absolute top-0 w-full h-full bg-gradient-radial from-cyan-400/5 via-transparent to-transparent" />
      </div>
    </div>
  );
}