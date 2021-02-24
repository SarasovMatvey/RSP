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
  };

  render() {
    return (
      <div className="rsp">
        <RspHeader wins={this.state.wins} fails={this.state.fails} />
        <RspGameField onRaundEnd={this._onRaundEnd.bind(this)} />
        <RspModal
          isShowModal={this.state.isShowModal}
          wins={this.state.wins}
          fails={this.state.fails}
          onClose={this._resetScore.bind(this)}
        />
      </div>
    );
  }

  _onRaundEnd(roundResult) {
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

  _resetScore() {
    this.setState({
      wins: 0,
      fails: 0,
      isShowModal: false,
    });
  }
}

export default Rsp;
