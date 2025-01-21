"use client";

import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion";

import cogImage from "@/public/assets/cog.png";
import noodleImage from "@/public/assets/noodle.png";
import cylinderImage from "@/public/assets/cylinder.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe)] overflow-x-clip"
    >
      <div className="container max-w-5xl">
        <div className="md:flex items-center">
          <div className="md:w-[478px] mb-20 md:mb-0">
            <p className="tag">Version 2.0 is here</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#000000] to-[#001e80] text-transparent bg-clip-text mb-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mb-[30px]">
              Celebrate the joy of accomplishment with an app designed to your
              progress, motivate your efforts, and celebrate your successes.
            </p>
            <div className="flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                Learn more <GoArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="relative md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="w-full h-auto md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="Cylinder image"
              width={220}
              height={220}
              className="hidden md:block absolute -top-8 -left-32"
              style={{ translateY }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Noodle image"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
