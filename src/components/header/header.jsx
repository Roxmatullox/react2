import "./header.css";

import navlogo from "../../assets/images/nav-logo.svg";
import Dark from "./dark-light";

function Header() {
  return <header>
    <div className="container">
      <div className="nav-menu">
        <div className="header-logo">
          <img src={navlogo} alt="" />
        </div>
        <div className="nav-links">
          <a href="#home">Продукция</a>
          <a href="#home">Сертификаты</a>
          <a href="#home">Наша команда</a>
          <a href="#home">О нас</a>
          <a href="#home">Новости</a>
          <a href="#home">Вакансии</a>
          <a href="#home">Контакты</a>
        </div>
        <div className="nav-btn">
          <button onClick={Dark} className="navbar-btn">Dark/Light</button>
        </div>
      </div>
    </div>
  </header>
}


export default Header



