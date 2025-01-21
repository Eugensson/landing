"use client";

import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion";

import starImage from "@/public/assets/star.png";
import springImage from "@/public/assets/spring.png";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#ffffff] to-[#d2dcff] overflow-x-clip"
    >
      <div className="container max-w-5xl">
        <div className="relative section-heading mb-10">
          <h2 className="section-title mb-5">Sign up for free today</h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            height={360}
            className="hidden md:block absolute -top-[137px] -left-[350px]"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring image"
            width={360}
            height={360}
            className="hidden md:block absolute -top-[19px] -right-[331px]"
            style={{ translateY }}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="btn btn-primary">Start free</button>
          <button className="btn btn-text gap-1">
            Learn more <GoArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
