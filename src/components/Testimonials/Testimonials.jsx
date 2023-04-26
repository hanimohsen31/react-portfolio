import { testimonials as data } from "../../data";
import "./Testimonials.scss";

export default function Testimonials(prps) {
  return (
    <div className="Testimonials" id="Testimonials">
      {data.map((p) => (
        <div key={p.id} className={p.featured ? "featured container" : "container"}>
          <div className="top">
            <img src="assets/imgs/right-arrow.png" alt="" />
            <img className="user" src={p.img} alt="" />
            <img src={p.icon} alt="" />
          </div>
          <div className="middle">
            <p>{p.desc}</p>
          </div>
          <div className="lower">
            <h3>{p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
