import About from "./components/About";
import Categories from "./components/Categories";
import Clients from "./components/Clients";
import Connect from "./components/Connect";
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
          <About />
          <Clients />
          <Connect />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
