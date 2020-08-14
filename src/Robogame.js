import React, { Component } from "react";
import Robodeck from "./Robodeck";

class Robogame extends Component {
  static defaultProps = {
    RobocardColl: [
      { id: 1, name: "Revis", level: "SuperPower", exp: 10 },
      { id: 21, name: "Droke", level: "MysteryFighter", exp: 20 },
      { id: 99, name: "Justin", level: "DragonBuster", exp: 30 },
      { id: 22, name: "Enriq", level: "HollySwing", exp: 40 },
      { id: 1000, name: "Powen", level: "FistMan", exp: 50 },
      { id: 64, name: "Pasty", level: "PowerRanger", exp: 60 },
      { id: 72, name: "Hunk", level: "SuperKill", exp: 70 },
      { id: 999, name: "Distina", level: "GhostBuster", exp: 80 },
    ],
  };
  render() {
    const hand1 = [];
    const hand2 = [...this.props.RobocardColl];
    while (hand1.length < hand2.length) {
      let idx = Math.floor(Math.random() * hand2.length);
      let handItem = hand2.splice(idx, 1)[0];
      hand1.push(handItem);
    }
    const totalhand1 = hand1.reduce(
      (total, currVal) => (total += currVal.exp),
      0
    );
    const totalhand2 = hand2.reduce(
      (total, currVal) => (total += currVal.exp),
      0
    );

    return (
      <div>
        <Robodeck
          card={hand1}
          exp={totalhand1}
          isWinner={totalhand1 > totalhand2}
        />
        <Robodeck
          card={hand2}
          exp={totalhand2}
          isWinner={totalhand2 > totalhand1}
        />
      </div>
    );
  }
}

export default Robogame;
