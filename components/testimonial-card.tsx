import Image from "next/image";

export type Testimonial = {
  id: string;
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const { text, imageSrc, name, username } = testimonial;

  return (
    <article className="card">
      <p className="mb-5">{text}</p>
      <div className="flex items-center gap-2">
        <Image src={imageSrc} alt={name} width={40} height={40} />
        <div className="flex flex-col">
          <p className="font-medium tracking-tight leading-5">{name}</p>
          <p className="tracking-tight leading-5">{username}</p>
        </div>
      </div>
    </article>
  );
};
