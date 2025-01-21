"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import tubeImage from "@/public/assets/tube.png";
import pyramidImage from "@/public/assets/pyramid.png";
import productImage from "@/public/assets/product-image.png";

export const ProductShowcase = () => {
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
        <div className="section-heading">
          <div className="flex justify-center">
            <p className="tag">Boost your productivity</p>
          </div>
          <h2 className="section-title mb-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mb-10">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product image"
            className="w-full h-auto"
          />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
