import Reveal from "./Reveal";
import SectionTopImage from "./SectionTopImage";
import SectionTopText from "./SectionTopText";

export default function Hero() {
  return (
    <section className="container mb-16">
      <div className="flex min-h-svh flex-col justify-end pt-72 sm:pt-40 [@media(min-height:1080px)]:min-h-auto [@media(min-height:1080px)]:pt-80">
        <Reveal>
          <h1 className="mb-8 flex flex-col-reverse gap-2 text-3xl text-[var(--white)] sm:flex-row">
            <span>GRAPHIC DESIGN</span>
            <span aria-hidden className="hidden sm:block">
              {" "}
              |{" "}
            </span>
            <span>BRANDING</span>
            <span aria-hidden className="hidden sm:block">
              {" "}
              |{" "}
            </span>
            <span>UI/UX</span>
          </h1>
        </Reveal>

        <Reveal>
          <SectionTopImage
            tag="h2"
            imgSrc={import.meta.env.VITE_API_URL + "/images/headings/chicago-hendriks.svg"}
            imgAlt="Chicago Hendriks"
            imgWidth={1005}
            imgHeight={511}
            lazy={false}
          />
        </Reveal>
      </div>

      <Reveal full>
        <SectionTopText>
          I design with intention — blending visual impact, clarity, and
          purpose. My goal is to create designs that not only catch the eye but
          also communicate effectively, support your vision, and grow your brand
          in a competitive digital world.
        </SectionTopText>
      </Reveal>
    </section>
  );
}
