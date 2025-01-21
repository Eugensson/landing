import Link from "next/link";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={className}>
      <Image
        src="/assets/logosaas.png"
        alt="Saas logo"
        width={44}
        height={44}
      />
    </Link>
  );
};
