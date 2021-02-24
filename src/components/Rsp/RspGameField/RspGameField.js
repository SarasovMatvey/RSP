import { Component } from "react";
import RspIcon from "../RspIcon/RspIcon";
import RspUserControls from "../RspUserControls/RspUserControls";

import "./RspGameField.sass";

class RspGameField extends Component {
  state = {
    computerChoice: null,
  };

  render() {
    return (
      <div className="rsp__game-field">
        <div className="container rsp__game-field-container">
          <RspUserControls click={this._processChoice.bind(this)} />
          <div className="rsp__computer">
            <RspIcon choice={this.state.computerChoice} />
          </div>
        </div>
      </div>
    );
  }

  _processChoice(choice) {
    this._generateComputerChoice(() => {
      let roundResult = this._compare(choice);
      this.props.onRaundEnd(roundResult);
    });
  }

  _generateComputerChoice(cb) {
    let choices = ["rock", "scissors", "paper"];
    let randomIndex = this._getRandomIntInclusive(0, choices.length - 1);
    let randomChoice = choices[randomIndex];

    this.setState(
      {
        computerChoice: randomChoice,
      },
      cb
    );
  }

  _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _compare(user, computer = this.state.computerChoice) {
    let results = {
      rock: ["scissors"],
      scissors: ["paper"],
      paper: ["rock"],
    };

    if (user === computer) {
      return 0;
    } else if (results[user].includes(computer)) {
      return 1;
    } else {
      return -1;
    }
  }
}

export default RspGameField;
