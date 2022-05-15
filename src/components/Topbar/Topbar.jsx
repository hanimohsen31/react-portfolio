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
            <span>+201116886029</span>
          </div>

          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>hanimohsen31@gmail.com</span>
          </div>
        </div>

        {/* <h1>Hani Mohsen</h1> */}
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
