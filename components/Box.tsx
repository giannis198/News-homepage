import Image from "next/image";

interface BoxProps {
  imgUrl: string;
  title: string;
  description: string;
  index: string;
}

const Box = ({ imgUrl, title, description, index }: BoxProps) => {
  return (
    <div className="flex gap-5">
      <Image src={imgUrl} width={100} height={100} alt={title} />
      <div className="space-y-2">
        <h1 className="section3__number">{index}</h1>
        <h3 className="section3__title">{title}</h3>
        <p className="section3__desc">{description}</p>
      </div>
    </div>
  );
};

export default Box;
