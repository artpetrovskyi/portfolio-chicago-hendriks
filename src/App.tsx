import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Header />
      <main className="relative z-1 mb-80 bg-[var(--black)]">
        <Hero />
        <div className="space-y-60">
          <Categories />
          <Works />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
