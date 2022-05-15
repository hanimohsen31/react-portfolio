import "./Portofolio.scss";
import PortofolioList from "../PortofolioList/PortofolioList";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portofolio() {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Featured",
      title: "Featured",
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
    {
      id: "Branding",
      title: "Branding",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;

      case "Wep App":
        setData(webPortfolio);
        break;

      case "Interior":
        setData(mobilePortfolio);
        break;

      case "Exterior":
        setData(designPortfolio);
        break;

      case "Branding":
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="Portofolio" id="Portofolio">
      <div className="por">
        <h1>Portofolio</h1>
        <ul>
          {/* <li className="active">Featured</li>
          <li>Wep App</li>
          <li>Interior</li>
          <li>Exterior</li>
          <li>Branding</li> */}
          {list.map((item) => (
            <PortofolioList
              title={item.title}
              active={item.id === selected}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
