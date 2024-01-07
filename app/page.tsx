import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

const page = () => {
  return (
    <div className="container grid-cols-3 gap-x-12 gap-y-12 space-y-10 lg:grid lg:space-y-0">
      <div className="col-span-2">
        <Section1 />
      </div>
      <Section2 />
      <div className="col-span-3 pb-10">
        <Section3 />
      </div>
    </div>
  );
};

export default page;
