import React from "react";
import Header from "./componentes/header";
import About from "./componentes/about";
import Projects from "./componentes/projects";
import Experience from "./componentes/experience";
import Skills from "./componentes/skills";
import Testimonials from "./componentes/testimonial";
import Contact from "./componentes/contact";
import Footer from "./componentes/footer";
import "../src/App.css";

const App = () => (
  <div className="app">
    <Header />
    <main>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
