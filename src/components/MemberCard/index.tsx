import Image from 'next/image';

type MemberCardProps = {
  data: {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
  };
};

export const MemberCard = ({ data }: MemberCardProps) => {
  const { name, role, image, description } = data;

  return (
    <div className="m-5 flex w-72 flex-col items-center gap-2 rounded-lg bg-stone-100 px-5 py-10 shadow-lg">
      <Image src={image} alt={name} width={100} height={100} className="py-3" />
      <h1 className="text-xl font-bold">{name}</h1>
      <h3>{role}</h3>
      <div className="my-2 h-[2px] w-12 bg-yellow-600"></div>
      <p className="text-sm uppercase tracking-wider text-brown-100">{description}</p>
    </div>
  );
};
