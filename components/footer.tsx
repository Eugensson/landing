import Link from "next/link";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container max-w-5xl">
        <div className="relative inline-flex before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute mb-6">
          <Logo className="relative" />
        </div>
        <nav className="mb-6">
          <ul className="flex flex-col md:flex-row md:justify-center gap-6">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Help</Link>
            </li>
            <li>
              <Link href="#">Carrers</Link>
            </li>
          </ul>
        </nav>
        <Socials />
        <p className="text-white/60 text-xs md:text-sm">
          &copy; 2025 Your company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
