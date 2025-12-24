import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import EducationExperience from "./sections/EducationExperience";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import VerticalBeams from "./components/VerticalBeams";

function App() {
  return (
    <>
      <VerticalBeams />
      <main className="relative z-20">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <EducationExperience />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
