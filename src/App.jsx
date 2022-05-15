import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portofolio from "./components/Portofolio/Portofolio";
import Works from "./components/Works/Works";
import Testinomilas from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import './App.scss'
import Menu from "./components/Menu/Menu";
import { useState } from "react";

function App() {
  const [menueOpen,setMenueOpen] = useState(false)
  return (
    <>
      <div className="App">
        <Topbar menueOpen={menueOpen} setMenueOpen={setMenueOpen} />
        <Menu menueOpen={menueOpen} setMenueOpen={setMenueOpen} />
        <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Testinomilas />
        <Contact />
      </div>
      </div>

    </>
  );
}

export default App;
