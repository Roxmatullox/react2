import "./footer.css"

import logo from "../../assets/images/nav-logo.svg";
import social from "../../assets/images/social.png";


function Footer() {
  return <footer>
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="socials">
        <img src={social} alt="" />
      </div>
    </div>
  </footer>
}

export default Footer