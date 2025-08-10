import { Link } from "react-scroll";
import { motion } from "motion/react";

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
    <header className="absolute top-0 left-0 z-20 w-full bg-[var(--black)]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container flex flex-col items-center justify-between gap-5 py-10 sm:flex-row"
      >
        <a href="/" className="flex-[0_0_70px]">
          <img src="/logo.svg" alt="logotype" />
        </a>

        <nav>
          <ul className="flex gap-5 text-[var(--white)] max-[500px]:flex-wrap">
            {NAV_LINKS.map(({ anchor, title }, i) => (
              <li key={anchor} className="flex-1 text-center">
                <Link
                  to={anchor}
                  href={`#${anchor}`}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  className={`group relative flex h-10 cursor-pointer flex-col gap-5 overflow-hidden px-5 py-2 whitespace-nowrap uppercase ${i === NAV_LINKS.length - 1 ? "border" : ""}`}
                >
                  <span className="inline-block transform transition-all duration-300 group-hover:translate-y-[-150%]">
                    {title}
                  </span>
                  <span
                    aria-hidden
                    className="incet-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[-100%] transform transition-transform duration-300 group-hover:-translate-y-1/2"
                  >
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
