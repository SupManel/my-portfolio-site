import { BrowserRouter as Router } from "react-router-dom";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import Projects from "@/components/custom/projects";
import Contact from "@/components/custom/contact";

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
