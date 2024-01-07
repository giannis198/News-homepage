import Image from "next/image";
import Link from "next/link";

interface BoxProps {
  imgUrl: string;
  title: string;
  description: string;
  index: string;
}

const Box = ({ imgUrl, title, description, index }: BoxProps) => {
  return (
    <div className="flex items-start justify-center gap-5">
      <Image
        src={imgUrl}
        width={100}
        height={127}
        alt={title}
        className="items-center"
      />
      <div className="space-y-2">
        <h1 className="section3__number">{index}</h1>
        <Link href="#" className="section3__title">
          {title}
        </Link>
        <p className="section3__desc">{description}</p>
      </div>
    </div>
  );
};

export default Box;
