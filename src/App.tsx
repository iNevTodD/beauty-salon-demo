import { useState, type CSSProperties } from "react";
import { shades } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Benefits from "./components/Benefits";
import Feedback from "./components/Feedback";
import Contacts from "./components/Contacts";

function App() {
  const [shade, setShade] = useState(shades[0]);

  const shadeVars = {
    "--shade": shade.color,
    "--shade-deep": shade.deep,
  } as CSSProperties;

  return (
    <div style={shadeVars}>
      <Header />
      <main>
        <Hero selected={shade} onSelect={setShade}/>
        <Services />
        <Portfolio />
        <Benefits />
        <Feedback />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
