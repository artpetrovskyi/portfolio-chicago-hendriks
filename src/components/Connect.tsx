import SectionTopText from "./SectionTopText";
import SectionTopImage from "./SectionTopImage";

const CONTACTS = [
  {
    name: "Phone",
    title: "+1-202-555-0100",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',
    link: "tel:+1-202-555-0100",
  },
  {
    name: "Email",
    title: "chendriks@gmail.com",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>',
    link: "mailto:chicagohendriks@gmail.com",
  },
  {
    name: "Telegram",
    title: "chicagohendriks",
    icon: '<svg width="24" height="24" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-width="12" d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"/></svg>',
    link: "https://t.me/chicagohendriks",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="container space-y-16">
      <div>
        <SectionTopImage
          imgSrc={"/images/headings/connect.svg"}
          imgAlt="Connect"
          imgWidth={790}
          imgHeight={260}
        />

        <SectionTopText>
          If you have an idea that needs to be brought to life through stylish
          and functional design, I’d be happy to collaborate. Feel free to reach
          out — let’s talk!
        </SectionTopText>
      </div>

      <ul className="-mx-4 flex flex-wrap gap-[1px] sm:mx-0 sm:flex-row lg:flex-nowrap">
        {CONTACTS.map(({ name, icon, link, title }) => (
          <li key={name} className="h-full flex-[1_0_33.333%]">
            <a
              href={link}
              className="flex flex-col items-center justify-center gap-5 bg-[var(--white)] p-8 lg:min-h-80 hover:opacity-90 transition-opacity duration-300"
            >
              <span
                className="h-12 w-12 [&>svg]:block [&>svg]:h-full [&>svg]:w-full "
                dangerouslySetInnerHTML={{ __html: icon }}
              ></span>

              <span className="text-xl font-medium whitespace-nowrap ">
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
