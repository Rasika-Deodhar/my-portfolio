import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Playground from "./components/playground/Playground";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="pf-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Playground />
        <Contact />
      </main>
    </div>
  );
}

export default App;
