import Image from 'next/image';

type IconTitleProps = {
  data: {
    id: string;
    image: string;
    title: string;
    subtitle: string;
  };
};

export const IconTitle = ({ data }: IconTitleProps) => {
  const { image, title, id, subtitle } = data;

  return (
    <div>
      <div className="mt-5 flex items-center justify-start">
        <Image src={image} width={40} height={40} alt={id} className="mr-3" />
        <div>
          <p className="text-sm font-bold text-yellow-700 lg:text-base">{subtitle}</p>
          <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};
