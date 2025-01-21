"use client";

import Link from "next/link";

import { navLinks } from "@/constants";

export const Nav = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-x-6 text-black/60">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
        <li>
          <button className="btn btn-primary">Get for free</button>
        </li>
      </ul>
    </nav>
  );
};
