import React, { Component } from "react";
import Robocard from "./Robocard";
import "./Robodeck.css";

class Robodeck extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Robodeck-win">Winning Hands!</h1>;
    } else {
      title = <h1 className="Robodeck-loss">Losing Hands!</h1>;
    }
    return (
      <div className="Robodeck">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Robodeck-cards">
          {this.props.card.map((collItem) => (
            <Robocard
              id={collItem.id}
              name={collItem.name}
              level={collItem.level}
              exp={collItem.exp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Robodeck;
