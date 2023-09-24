import "./news.css";

import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"



function News() {
  return <section id="news">
    <div className="container">
      <div className="news-section">
        <div className="news-title">
          <h2>Новости</h2>
        </div>
        <div className="news-content">
          <div>
            <img src={news1} alt="" />
            <p>28.01.2022</p>
            <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
          </div>
          <div>
          <img src={news2} alt="" />
            <p>28.01.2022</p>
            <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
          </div>
          <div>
          <img src={news3} alt="" />
            <p>28.01.2022</p>
            <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
          </div>
        </div>
        <button>Все новости</button>
      </div>
    </div>
    <a href="#home" id="backtop">^</a>
  </section>
}

export default News