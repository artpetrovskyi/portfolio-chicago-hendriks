const CATEGORIES = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    image: "graphic-design.jpeg",
  },
  { id: "branding", title: "Branding", image: "branding.jpeg" },
  { id: "logos", title: "Logos", image: "logos.jpeg" },
  { id: "typography", title: "Typography", image: "typography.jpeg" },
  { id: "painting", title: "Painting", image: "painting.jpeg" },
  { id: "linocuts", title: "Linocuts", image: "linocuts.jpeg" },
];

export default function Categories() {
  return (
    <section className="container">
      <ul className="sm:grid sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <a
              href="#"
              className="ibg group -mx-4 flex  sm:min-h-80 items-center justify-center overflow-hidden p-15 sm:mx-0"
            >
              <span className="absolute inset-0 z-1 bg-[var(--black)] opacity-50 transition-opacity duration-500 group-hover:opacity-30" />
              <img
                src={`/images/categories/${category.image}`}
                alt={category.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <span className="relative z-1 text-center text-3xl font-bold tracking-widest text-[var(--white)] uppercase">
                {category.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
