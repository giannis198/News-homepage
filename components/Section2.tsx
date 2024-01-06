import { Separator } from "@/components/ui/separator";

const Section2 = () => {
  return (
    <section className="section2 bg-very_dark_blue my-6 px-6 py-6">
      <h2 className="text-soft_orange pb-5 text-3xl">New</h2>
      <div className="space-y-2">
        <h3 className="section2__title">Hydrogen VS Electric Cars</h3>
        <p className="section2__desc">
          Will hydrogen-fueled cars ever catch-up to EVs?
        </p>
        <Separator className="bg-off_white" />p
      </div>
      <div className="space-y-2">
        <h3 className="section2__title">The Downsides of AI Artistry</h3>
        <p className="section2__desc">
          What are the possible adverse effects of on demand AI image
          generation?
        </p>
        <Separator className="bg-off_white" />p
      </div>
      <div className="space-y-2">
        <h3 className="section2__title">Is VC Funding Drying Up?</h3>
        <p className="section2__desc">
          Private funding by VC firms is down 50% YOY.We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
};

export default Section2;
