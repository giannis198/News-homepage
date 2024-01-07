import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SideNavItem from "./SideNavItem";

const Section2 = () => {
  const sidenavArticles = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch-up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      description:
        " What are the possible adverse effects of on demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY.We take a look at what that means.",
    },
  ];
  return (
    <section className="section2 my-6 bg-very_dark_blue px-6 py-6 lg:px-6 lg:py-10 ">
      <h2 className="pb-8 text-3xl font-bold text-soft_orange lg:text-5xl">
        New
      </h2>
      {sidenavArticles.map((article) => (
        <SideNavItem
          key={article.id}
          title={article.title}
          description={article.description}
        />
      ))}
    </section>
  );
};

export default Section2;
