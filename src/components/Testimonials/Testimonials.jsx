import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/imgs/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/imgs/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat magnam.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/imgs/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="Testimonials" id="Testimonials">
      {data.map((p) => (
        <div className={p.featured ? "featured container" : "container"}>
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
