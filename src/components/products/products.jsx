import Taba from "./product-tab"
import "./products.css"



function Products() {
  return <section id="products">
    <div className="container">
      <div className="products-section">
        <Taba />
        <div className="taba-btn">
        <button className="catalog-btn">Перейти в каталог</button>
        </div>
      </div>
    </div>
  </section>
}

export default Products