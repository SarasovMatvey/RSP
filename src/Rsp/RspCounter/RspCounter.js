import { Component } from "react";

import "./RspCounter.sass";

class RspCounter extends Component {
  render() {
    return (
      <div className="rsp__counter">
        <div className="rsp__counter-field">
          <span className="rsp__counter-field-text">Wins:</span>
          <span className="rsp__counter-wins">0</span>
        </div>
        <div className="rsp__counter-field">
          <span className="rsp__counter-field-text">Fails:</span>
          <span className="rsp__counter-fails">0</span>
        </div>
      </div>
    );
  }
}

export default RspCounter;
