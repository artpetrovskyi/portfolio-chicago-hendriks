import SectionTopImage from "./SectionTopImage";
import SectionTopText from "./SectionTopText";

const WORKS = [
  {
    category: "Graphic Design",
    title: "Urban Nightlife Poster Series",
    brand: "Neon District Events",
    description:
      "A set of vibrant, high-contrast event posters designed to capture the energy of underground nightlife in a metropolitan setting. The visuals combine dynamic typography with futuristic elements and a neon color palette to evoke excitement and movement. Designed for both print and digital use, the series increased event visibility across social platforms by 40%.",
    image: "urban-nightlife-poster-series.jpeg",
  },
  {
    category: "Branding",
    title: "Minimalism with Meaning",
    brand: "MINDSTUDIO – Mental Health Platform",
    description:
      "A full branding package for a modern mental health startup targeting Gen Z. The identity balances a calming, muted color system with soft geometric shapes and friendly sans-serif typography. The brand voice and visuals were designed to reduce stigma and communicate warmth, professionalism, and approachability. Deliverables included brand guidelines, social templates, and landing page mockups.",
    image: "minimalism-with-meaning.jpeg",
  },
  {
    category: "Logo Design",
    title: "Crafted Boldness",
    brand: "Black Ember Coffee Roasters",
    description:
      "A handcrafted logo mark inspired by vintage coffee labels, featuring custom lettering and a stylized flame symbol to represent roasted perfection. The design combines tradition with a modern edge, making it ideal for packaging, merchandise, and social media. The final logo helped unify the brand identity across multiple locations and increased merchandise sales by 25%.",
    image: "crafted-boldness.jpeg",
  },
];

export default function Works() {
  return (
    <section className="container space-y-16">
      <div>
        <SectionTopImage
          imgSrc={"/images/headings/works.svg"}
          imgAlt="Works"
          imgWidth={668}
          imgHeight={261}
        />

        <SectionTopText>
          Behind every project lies a carefully crafted design, a focus on
          detail, and a passion for originality. Take a look at my portfolio to
          see more innovative and effective work.
        </SectionTopText>
      </div>

      {WORKS.map((work) => (
        <div
          key={work.title}
          className="-mx-4 grid auto-rows-auto grid-cols-4 gap-0 bg-[var(--white)] text-[var(--black)] sm:mx-0"
        >
          <div className="col-span-4 col-start-1 row-span-1 row-start-1 p-4 text-xl sm:col-span-2 sm:border-r sm:p-7 lg:col-span-1 lg:border-r-0 lg:border-b">
            {work.title}
          </div>
          <div className="col-span-4 col-start-1 row-span-1 row-start-2 flex items-end border-t p-4 text-2xl font-bold sm:col-span-2 sm:col-start-3 sm:row-start-1 sm:border-t-0 sm:p-7 lg:col-span-1 lg:col-start-1 lg:row-start-2">
            {work.brand}
          </div>
          <div className="col-span-4 col-start-1 row-span-1 row-start-3 sm:col-span-2 sm:row-start-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="ibg block h-full pb-[100%]">
              <img src={`/images/works/${work.image}`} alt={work.title} />
            </a>
          </div>
          <div className="col-span-4 col-start-1 row-span-1 row-start-4 flex flex-col gap-5 p-4 sm:col-span-2 sm:col-start-3 sm:row-start-2 sm:border-t sm:p-7 lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:border-t-0">
            <p className="grow">{work.description}</p>
            <a
              href="#"
              className="self-start font-medium uppercase underline hover:no-underline"
            >
              Learn more {">>"}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
