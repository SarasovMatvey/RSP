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
        <RspGameField updateCounter={this._updateCounter.bind(this)} />
      </div>
    );
  }

  _updateCounter(roundResult) {
    if (roundResult === 1) {
      this.setState({ wins: this.state.wins + 1 });
    } else if (roundResult === -1) {
      this.setState({ fails: this.state.fails + 1 });
    }
  }
}

export default Rsp;
