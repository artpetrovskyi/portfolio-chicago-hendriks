const NAV_LINKS = [
  {
    anchor: "portfolio",
    title: "Portfolio",
  },
  {
    anchor: "about-me",
    title: "About me",
  },
  {
    anchor: "connect",
    title: "Connect",
  },
] as const;

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-[var(--black)]">
      <div className="container flex flex-col items-center justify-between py-10 sm:flex-row gap-5">
        <a href="/" className="flex-[0_0_70px]">
          <img src="/logo.svg" alt="logotype" />
        </a>

        <nav>
          <ul className="flex text-[var(--white)] max-[500px]:flex-wrap gap-5">
            {NAV_LINKS.map(({ anchor, title }, i) => (
              <li key={anchor} className="flex-1 text-center">
                <a
                  className={
                    "block px-5 py-2 text-nowrap uppercase" +
                    (i === NAV_LINKS.length - 1 ? " border" : "")
                  }
                  href={`#${anchor}`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
