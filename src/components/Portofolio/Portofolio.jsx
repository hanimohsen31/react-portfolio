import "./Portofolio.scss";
import PortofolioList from "../PortofolioList/PortofolioList";
import { useState, useEffect } from "react";
import { myData } from "../../data";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
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
      id: "Interior",
      title: "Interior",
    },
    {
      id: "Exterior",
      title: "Exterior",
    },
  ];

  useEffect(() => {
    let slicer = 6;
    switch (selected) {
      case "All Projects":
        setData([
          myData[0],
          myData[4],
          myData[6],
          myData[7],
          myData[12],
          myData[14],
        ]);
        break;

      case "Wep App":
        setData(myData.filter((e) => e.type === "web"));
        break;

      case "Interior":
        setData(myData.filter((e) => e.type === "interior"));
        break;

      case "Exterior":
        setData(myData.filter((e) => e.type === "exterior"));
        break;

      default:
        setData(shuffle(myData.slice(0, slicer)));
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
          {data.map((d, indx) => (
            <div key={indx} className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
