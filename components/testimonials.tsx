"use client";

import React from "react";
import { motion } from "framer-motion";

import { Testimonial, TestimonialCard } from "@/components/testimonial-card";

import { testimonials } from "@/constants";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.ul
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        duration: props.duration || 10,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-y-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map((testimonial: Testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </React.Fragment>
      ))}
    </motion.ul>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-5xl">
        <div className="section-heading mb-10">
          <div className="flex justify-center mb-5">
            <p className="tag">Testimonials</p>
          </div>
          <h2 className="section-title mb-5">What our users say</h2>
          <p className="section-description">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <ul className="flex justify-center items-center gap-y-6 md:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] overflow-hidden">
          <li>
            <TestimonialsColumn testimonials={firstColumn} duration={24} />
          </li>
          <li>
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={30}
            />
          </li>
          <li>
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={22}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
