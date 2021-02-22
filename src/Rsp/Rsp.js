import React, { Component } from "react";
import RspHeader from "./RspHeader/RspHeader";
import RspGameField from "./RspGameField/RspGameField";

import "./Rsp.sass";

class Rsp extends Component {
  render() {
    return (
      <div className="rsp">
        <RspHeader />
        <RspGameField />
      </div>
    );
  }
}

export default Rsp;
