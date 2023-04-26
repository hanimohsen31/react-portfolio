import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({menueOpen,setMenueOpen}) {
  return (
    <div className={"Topbar " + (menueOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">Hani Mohsen</a>

          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>
              <a href="tel:+201116886029">+201116886029</a></span>
          </div>

          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span><a href="mailto: hanimohsen31@gmail.com">hanimohsen31@gmail.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hambo" onClick={()=>{setMenueOpen(!menueOpen)}}>
             <span></span>
             <span></span>
             <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
