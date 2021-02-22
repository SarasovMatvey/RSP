import { Component } from "react";
import RspCounter from "../RspCounter/RspCounter.js";

import "./RspHeader.sass";

class RspHeader extends Component {
  render() {
    return (
      <header className="rsp__header">
        <div className="container rsp__container">
          <h2 className="rsp__title">Rock Scissors Paper</h2>
          <RspCounter />
        </div>
      </header>
    );
  }
}

export default RspHeader;
