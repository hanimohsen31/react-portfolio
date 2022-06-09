import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ahmed Mahmoud",
      title: "CEO of a Contractions Co.",
      img: "assets/imgs/t0.jpg",
      icon: "assets/imgs/twitter.png",
      desc: "It was nice working with you on our latest project. It was delivered ahead of time and it was very nice.",
    },
    {
      id: 2,
      name: "Omnia Ali",
      title: "Founder of a Decoration Co.",
      img: "assets/imgs/t1.jpg",
      icon: "assets/imgs/youtube.png",
      desc: "It is very nice for your attention to the details that we worked on in our project, and the most wonderful quality of the work that I received from you in the end. I wish you success in the future.",
      featured: true,
    },
    {
      id: 3,
      name: "Marwan Yahia",
      title: "CEO of ALABAI Co.",
      img: "assets/imgs/t2.jpg",
      icon: "assets/imgs/linkedin.png",
      desc: "You should commend your quick work performance and delivery ahead of time ... good for you.",
    },
  ];
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
