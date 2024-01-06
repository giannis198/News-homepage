import Image from "next/image";
import Box from "./Box";

const Section3 = () => {
  return (
    <section className="space-y-5 pb-10">
      <Box
        imgUrl="/image-retro-pcs.jpg"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        index="01"
      />
      <Box
        index="02"
        description="Our best picks for various needs and budgets."
        title="Top 10 Laptops of 2022"
        imgUrl="/image-top-laptops.jpg"
      />

      <Box
        index="03"
        description="How the pandemic has sparked fresh opportunities."
        title="The Growth of Gaming"
        imgUrl="/image-gaming-growth.jpg"
      />
    </section>
  );
};

export default Section3;
