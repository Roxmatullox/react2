import { Component } from "react";
import "./command.css";

class Card extends Component{
  render(){
    console.log(this);
    return(
      <div>
        {this.props.children}
        <div className="card-text">
          <h6>{this.props.name}</h6>
          <p>{this.props.position}</p>
          <p>{this.props.number}</p>
        </div>
      </div>
    )
  }
}

export default Card