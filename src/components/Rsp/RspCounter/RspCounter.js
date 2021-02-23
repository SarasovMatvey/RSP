import { Component } from "react";

import "./RspCounter.sass";

class RspCounter extends Component {
  render() {
    return (
      <div className="rsp__counter">
        <div className="rsp__counter-field">
          <span className="rsp__counter-field-text">Wins:</span>
          <span className="rsp__counter-wins">{this.props.wins}</span>
        </div>
        <div className="rsp__counter-field">
          <span className="rsp__counter-field-text">Fails:</span>
          <span className="rsp__counter-fails">{this.props.fails}</span>
        </div>
      </div>
    );
  }
}

export default RspCounter;
