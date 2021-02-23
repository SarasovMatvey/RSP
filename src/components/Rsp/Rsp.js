import React, { Component } from "react";
import RspHeader from "./RspHeader/RspHeader";
import RspGameField from "./RspGameField/RspGameField";

import "./Rsp.sass";

class Rsp extends Component {
  state = {
    wins: 0,
    fails: 0,
  };

  render() {
    return (
      <div className="rsp">
        <RspHeader wins={this.state.wins} fails={this.state.fails} />
        <RspGameField onRaundEnd={this._onRaundEnd.bind(this)} />
      </div>
    );
  }

  _onRaundEnd(roundResult) {
    this._updateCounter(roundResult, () => {});
  }

  _updateCounter(roundResult, cb) {
    if (roundResult === 1) {
      this.setState({ wins: this.state.wins + 1 }, cb);
    } else if (roundResult === -1) {
      this.setState({ fails: this.state.fails + 1 }, cb);
    }
  }
}

export default Rsp;
