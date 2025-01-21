"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/public/assets/logo-acme.png";
import apexLogo from "@/public/assets/logo-apex.png";
import echoLogo from "@/public/assets/logo-echo.png";
import pulsLogo from "@/public/assets/logo-pulse.png";
import quantumLogo from "@/public/assets/logo-quantum.png";
import celestialLogo from "@/public/assets/logo-celestial.png";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container max-w-5xl">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.ul
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <li>
              <Image
                src={acmeLogo}
                alt="Acme logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={apexLogo}
                alt="Apex logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={echoLogo}
                alt="Echo logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={pulsLogo}
                alt="Puls logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={quantumLogo}
                alt="Quantum logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={celestialLogo}
                alt="Celestial logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={acmeLogo}
                alt="Acme logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={apexLogo}
                alt="Apex logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={echoLogo}
                alt="Echo logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={pulsLogo}
                alt="Puls logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={quantumLogo}
                alt="Quantum logo"
                className="logo-ticker-image"
              />
            </li>
            <li>
              <Image
                src={celestialLogo}
                alt="Celestial logo"
                className="logo-ticker-image"
              />
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
