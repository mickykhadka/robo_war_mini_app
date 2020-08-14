import React, { Component } from "react";
import "./Robocard.css";
const API_URL = "http://robohash.org/";

const prefixThreeZero = (number) =>
  number <= 999 ? `000${number}`.slice(-3) : number;

class Robocard extends Component {
  render() {
    let img = `${API_URL}${prefixThreeZero(this.props.id)}.png`;
    return (
      <div className="Robocard">
        <h1 className="Robocard-title">{this.props.name}</h1>
        <div className="Robocard-image">
          <img src={img} alt={this.props.name} />
        </div>
        <div>Level: {this.props.level}</div>
        <div>Experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Robocard;
