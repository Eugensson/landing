import Link from "next/link";

import { socialList } from "@/constants";

export const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-6 mb-6">
      {socialList.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Link href={href} target="_blank" rel="noreferrer">
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
