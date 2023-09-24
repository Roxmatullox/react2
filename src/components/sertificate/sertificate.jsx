import Responsive from "./sert-img"
import "./sertificate.css"

function Sertificate() {
  return <section id="sertificate">
    <div className="container">
      <div className="ser-container">
        <div className="ser-title">
          <h2>Качество продукции подтверждают <span>сертификаты</span></h2>
        </div>
        <div className="ser-content">
          <Responsive />
        </div>
      </div>
    </div>
  </section>
}

export default Sertificate