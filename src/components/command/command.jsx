import Card from "./command-card"

import "./command.css"
import {command} from "./command1"

// import img1 from "../../assets/images/comand1.png"
// import img2 from "../../assets/images/comand2.svg"
import img3 from "../../assets/images/comand3.png"
// import img4 from "../../assets/images/comand4.png"
// import img5 from "../../assets/images/comad5.png"






function Command() {
  return <section id="command">
    <div className="container">
        <h2>Наша <span>команда</span></h2>
      <div className="commandrow">
        {
          command.map((el,i)=>(
            <Card {...el} key={i}>
              <img src={img3} alt="img" />
            </Card>
          ))
        }
      </div>
      <button>Наша команда</button>
    </div>
  </section>
}

export default Command