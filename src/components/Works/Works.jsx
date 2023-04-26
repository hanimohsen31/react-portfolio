import { useState } from "react";
import { slider as data} from "../../data";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleClick = (elm) => {
    elm === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="Works" id="Works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((p) => (
          <div className="container" key={p.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={p.icon} alt="" />
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <span>
                    <a
                      href={p.link}
                      rel="noreferrer"
                      target="_blank"
                      className=""
                    >
                      Visit Project
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={p.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/imgs/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/imgs/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
