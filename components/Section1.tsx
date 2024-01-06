import Image from "next/image";
import { Button } from "./ui/button";

const Section1 = () => {
  return (
    <section className="space-y-4">
      <Image
        src="/image-web-3-mobile.jpg"
        width={400}
        height={400}
        alt="image web 3 mobile"
      />
      <h1 className="text-very_dark_blue text-5xl font-extrabold">
        The Bright Future of Web 3.0?
      </h1>
      <p className="font-normal leading-7">
        We dive into the next evolution of the web that claims to put power of
        the platforms back into the hands of the people.But is it really
        fulfilling its promise?
      </p>
      <Button className=" bg-soft_red rounded-none uppercase tracking-widest">
        read more
      </Button>
    </section>
  );
};

export default Section1;
