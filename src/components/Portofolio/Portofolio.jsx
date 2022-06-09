import "./Portofolio.scss";
import PortofolioList from "../PortofolioList/PortofolioList";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  myData,
} from "../../data";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function Portofolio() {
  const [selected, setSelected] = useState("All Projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "All Projects",
      title: "All Projects",
    },
    {
      id: "Wep App",
      title: "Wep App",
    },
    {
      id: "Front-End",
      title: "Front-End",
    },
    {
      id: "Interior",
      title: "Interior",
    },
    {
      id: "Exterior",
      title: "Exterior",
    },
  ];
  
  useEffect(() => {
    switch (selected) {
      case "All Projects":
        setData(shuffle(myData.slice(0,8)));
        break;

      case "Wep App":
        // setData(shuffle(web.slice(0,8)));
        setData(shuffle(myData.filter(e=>e.type === 'web').slice(0,8)));

        break;

      case "Front-End":
        // setData(shuffle(web.slice(0,8)));
        setData(shuffle(myData.filter(e=>e.type === 'web').slice(0,8)));

        break;

      case "Interior":
        // setData(interior.slice(0,8));
        setData(shuffle(myData.filter(e=>e.type === 'interior').slice(0,8)));

        break;

      case "Exterior":
        // setData(exterior.slice(0,8));
        setData(shuffle(myData.filter(e=>e.type === 'exterior').slice(0,8)));

        break;

      default:
        setData(featuredPortfolio.slice(0,8));
        break;
    }
  }, [selected]);

  return (
    <div className="Portofolio" id="Portofolio">
      <div className="por">
        <h1>Portofolio</h1>
        <ul>
          {list.map((item) => (
            <PortofolioList
              title={item.title}
              active={item.id === selected}
              setSelected={setSelected}
              id={item.id}
              key={item.id}

            />
          ))}
        </ul>

        <div className="container">
          {data.map((d) => (
            <div key={Math.random()} className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
