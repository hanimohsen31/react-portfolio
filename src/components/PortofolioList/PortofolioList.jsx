import "./PortofolioList.scss";

export default function PortofolioList({ title, active, setSelected,id }) {
  return (
    <li className={active ? "PortofolioList active" : "PortofolioList"}
    onClick = {()=> setSelected(id)}
    >
      {title}
    </li>
  );
}
