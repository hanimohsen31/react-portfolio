import "./Intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Intro() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer", "and Interior Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Intro" id="Intro">
      <div className="wrapper">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/imgs/aswr.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="text">
            <h2>Hi There, I'm</h2>
            <h1>Hani Mohsen</h1>
            <h3>
              Freelancer
              <span> </span>
              <span ref={el}></span>
            </h3>
          </div>
          <div className="ico">
            <a href="#Portofolio">
              <KeyboardArrowDownIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
