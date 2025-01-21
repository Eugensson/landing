import { GrMenu } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm">
      <p className="w-full flex justify-center items-center gap-2 py-3 bg-black text-white text-sm">
        <span className="hidden md:block text-white/60">
          Streamline your workflow and boost your productivity.
        </span>
        Get started for free
        <GoArrowRight size={16} />
      </p>
      <div className="container max-w-5xl py-5 flex items-stretch justify-between">
        <Logo />
        <GrMenu size={34} className="cursor-pointer md:hidden" />
        <Nav className="hidden md:flex" />
      </div>
    </header>
  );
};
