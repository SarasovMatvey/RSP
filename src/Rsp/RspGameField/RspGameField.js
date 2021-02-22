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
    this._generateComputerChoice();
  }

  _generateComputerChoice() {
    let choices = ["rock", "scissors", "paper"];
    let randomIndex = this._getRandomIntInclusive(0, choices.length - 1);
    let randomChoice = choices[randomIndex];

    this.setState({
      computerChoice: randomChoice,
    });
  }

  _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default RspGameField;
