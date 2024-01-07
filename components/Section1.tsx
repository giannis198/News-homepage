import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="grid-cols-2 gap-x-8 gap-y-6 space-y-4 lg:grid">
      <div className="col-span-2">
        <Image
          className="h-auto w-auto lg:hidden"
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

      <Link
        href="#"
        className="text-5xl font-extrabold text-very_dark_blue hover:text-soft_red"
      >
        The Bright Future of Web 3.0?
      </Link>

      <div className="space-y-5">
        <p className="font-normal leading-7 text-dark_grayish_blue">
          We dive into the next evolution of the web that claims to put power of
          the platforms back into the hands of the people.But is it really
          fulfilling its promise?
        </p>
        <Button className=" rounded-none bg-soft_red uppercase tracking-widest">
          read more
        </Button>
      </div>
    </section>
  );
};

export default Section1;
