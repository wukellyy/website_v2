import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
