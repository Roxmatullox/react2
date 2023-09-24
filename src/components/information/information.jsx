import "./information.css";


function Information() {
  return <section className="information">
    <div className="container">
      <div className="information-section">
        <h2>Получить подробную <span>информацию</span></h2>
        <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
        <form action="#">
          <div>
            <input required type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="+375 (29) 0000000" />
          </div>
          <input placeholder="Комментарий" type="Комментарий" />
          <button type="submit">Получить информацию</button>
        </form>
      </div>
    </div>
  </section>
}

export default Information