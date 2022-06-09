import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "0",
      icon: "./assets/imgs/mobile.png",
      title: "Web Development",
      desc: "Cloning of Netflix (ITI graduation project) Using React.js, SCSS, CSS, Swiper.js, and Bootstrap for Front-End and Django for Back-End. ",
      // img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      img: "./assets/screenshots/s0.jpg",
      link: "https://github.com/hanimohsen31/Netflix-V.4-AIO",
    },
    {
      id: "1",
      icon: "./assets/imgs/globe.png",
      title: "Front End",
      desc: "Landing Page for traveling company using HTML and CSS only.",
      img: "./assets/screenshots/s2.png",
      link: "https://hanimohsen31.github.io/Halla-Travil",
    },
    {
      id: "2",
      icon: "./assets/imgs/writing.png",
      title: "3d Visualizing",
      desc: "Portfolio from my previous work as an interior designer.The Website was Built with React.js, CSS, Bootstrap and Animate.js.",
      img: "./assets/screenshots/s1.jpg",
      link: "https://collection-interiors.herokuapp.com",
    },
  ];

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
