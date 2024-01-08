import Image from "next/image";
import Box from "./Box";

const Section3 = () => {
  const boxContent = [
    {
      index: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      imageUrl: "/image-retro-pcs.jpg",
    },
    {
      index: "02",
      title: "Our best picks for various needs and budgets.",
      description: "Top 10 Laptops of 2022",
      imageUrl: "/image-top-laptops.jpg",
    },
    {
      index: "03",
      title: "How the pandemic has sparked fresh opportunities.",
      description: "The Growth of Gaming",
      imageUrl: "/image-gaming-growth.jpg",
    },
  ];
  return (
    <section
      className="grid-cols-3 items-start  gap-x-12 space-y-5
    pb-10 lg:grid lg:space-y-0"
    >
      {boxContent.map((content) => (
        <Box
          key={content.index}
          title={content.title}
          description={content.description}
          imgUrl={content.imageUrl}
          index={content.index}
        />
      ))}
    </section>
  );
};

export default Section3;
