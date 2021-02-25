import React, { Component } from "react";
import RspHeader from "./RspHeader/RspHeader";
import RspGameField from "./RspGameField/RspGameField";
import RspModal from "./RspModal/RspModal";

import "./Rsp.sass";

class Rsp extends Component {
  state = {
    wins: 0,
    fails: 0,
    isShowModal: false,
    computerChoice: null,
  };

  render() {
    return (
      <div className="rsp">
        <RspHeader wins={this.state.wins} fails={this.state.fails} />
        <RspGameField
          onRoundEnd={this._onRoundEnd.bind(this)}
          onComputerChoiceGen={this._setComputerChoice.bind(this)}
          computerChoice={this.state.computerChoice}
        />
        <RspModal
          isShowModal={this.state.isShowModal}
          wins={this.state.wins}
          fails={this.state.fails}
          onClose={this._resetGame.bind(this)}
          isLoaderActive={true}
        />
      </div>
    );
  }

  _setComputerChoice(choice) {
    this.setState({
      computerChoice: choice,
    });
  }

  _onRoundEnd(roundResult) {
    this._updateCounter(roundResult, () => {
      if (this.state.wins === 5 || this.state.fails === 5) {
        this._showGameResult();
      }
    });
  }

  _updateCounter(roundResult, cb) {
    if (roundResult === 1) {
      this.setState({ wins: this.state.wins + 1 }, cb);
    } else if (roundResult === -1) {
      this.setState({ fails: this.state.fails + 1 }, cb);
    }
  }

  _showGameResult() {
    this.setState({ isShowModal: true });
  }

  _resetGame() {
    this.setState({
      wins: 0,
      fails: 0,
      isShowModal: false,
      computerChoice: null,
    });
  }
}

export default Rsp;
