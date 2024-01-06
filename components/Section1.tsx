import Image from "next/image";
import { Button } from "./ui/button";

const Section1 = () => {
  return (
    <section className="grid-cols-2 gap-x-8 gap-y-6 space-y-4 lg:grid">
      <div className="col-span-2">
        <Image
          className="lg:hidden"
          src="/image-web-3-mobile.jpg"
          width={400}
          height={400}
          alt="image web 3 mobile"
        />
        <Image
          className="hidden lg:block"
          src="/image-web-3-desktop.jpg"
          width={1440}
          height={1000}
          alt="image web 3 mobile"
        />
      </div>
      <div>
        <h1 className="text-very_dark_blue text-5xl font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <div>
        <p className="text-dark_grayish_blue font-normal leading-7">
          We dive into the next evolution of the web that claims to put power of
          the platforms back into the hands of the people.But is it really
          fulfilling its promise?
        </p>
        <Button className=" bg-soft_red rounded-none uppercase tracking-widest">
          read more
        </Button>
      </div>
    </section>
  );
};

export default Section1;
