import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
    <div className="container space-y-10">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default page;
