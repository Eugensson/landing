"use client";

import { motion } from "framer-motion";
import { GoCheckCircle } from "react-icons/go";

import { cn } from "@/lib/utils";

export type PricingTier = {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
};

export const PricingCard = ({ tier }: { tier: PricingTier }) => {
  const { title, monthlyPrice, buttonText, popular, inverse, features } = tier;

  return (
    <article
      className={cn("card", inverse && "border-black bg-black text-white")}
    >
      <div className="flex justify-between mb-[30px]">
        <h3
          className={cn(
            "text-lg font-bold text-black/50",
            inverse && "text-white/60"
          )}
        >
          {title}
        </h3>
        {popular && (
          <div className="flex px-4 py-1.5 text-sm rounded-xl border border-white/20">
            <motion.span
              animate={{ backgroundPositionX: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
                repeatType: "loop",
              }}
              className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#e1cd86,#bbcb92,#71c2ef)] [background-size:200%] text-transparent bg-clip-text font-medium"
            >
              Popular
            </motion.span>
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1 mb-[30px]">
        <span className="text-4xl font-bold tracking-tighter leading-none">
          ${monthlyPrice}
        </span>
        <span
          className={cn(
            "tracking-tight font-bold text-black/50",
            inverse && "text-white/60"
          )}
        >
          /month
        </span>
      </div>
      <button
        className={cn(
          "btn btn-primary w-full mb-8",
          inverse && "bg-white text-black"
        )}
      >
        {buttonText}
      </button>
      <ul className="flex flex-col gap-5">
        {features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <GoCheckCircle size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
