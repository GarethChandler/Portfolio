// import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Hero from "./components/sections/hero";
import Header from "./components/sections/header";
import Timeline from "./components/sections/timeline";
import ProjectDetail from "./pages/projectDetail";

function App() {
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} */}
      <Header />
      <About />
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
