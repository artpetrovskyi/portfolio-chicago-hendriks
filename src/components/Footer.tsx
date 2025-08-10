export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="fixed bottom-0 left-0 z-1 flex min-h-80 w-full items-center justify-center">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className="flex-[0_0_70px]"
      >
        <img src="/logo.svg" alt="logotype" />
      </a>
    </footer>
  );
}
