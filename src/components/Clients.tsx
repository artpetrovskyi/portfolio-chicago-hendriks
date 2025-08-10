import Reveal from "./Reveal";
import SectionTopImage from "./SectionTopImage";
import SectionTopText from "./SectionTopText";

const CLIENTS = [
  { name: "Coca Cola", logo: "coca-cola.svg" },
  { name: "Renault", logo: "renault.svg" },
  { name: "Total Energies", logo: "totalenergies.svg" },
  { name: "Infiniti", logo: "infiniti.svg" },
  { name: "Nissan", logo: "nissan.svg" },
  { name: "Ricoh", logo: "ricoh.svg" },
  { name: "Mercedes-Benz", logo: "mercedes-benz.svg" },
  { name: "Xerox", logo: "xerox.svg" },
];

export default function Clients() {
  return (
    <section className="container space-y-16">
      <div>
        <Reveal>
          <SectionTopImage
            imgSrc={"/images/headings/clients.svg"}
            imgAlt="Clients"
            imgWidth={697}
            imgHeight={261}
          />
        </Reveal>

        <Reveal full>
          <SectionTopText>
            I’m proud to collaborate with companies across various industries.
            My clients include startups, small and medium-sized businesses, as
            well as established brands that value thoughtful design and
            attention to detail.
          </SectionTopText>
        </Reveal>
      </div>

      <ul className="-mx-4 grid grid-cols-2 gap-[1px] sm:mx-0 sm:grid-cols-4">
        {CLIENTS.map(({ name, logo }) => (
          <li key={name} className="[&_*]:h-full">
            <Reveal full>
              <div className="flex items-center justify-center bg-[var(--white)] p-8 lg:min-h-80">
                <img
                  src={`/images/clients/${logo}`}
                  alt={name}
                  loading="lazy"
                  title={name}
                  width={180}
                  height={180}
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
