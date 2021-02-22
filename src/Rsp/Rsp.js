import React, { Component } from "react";
import RspHeader from "./RspHeader/RspHeader";
import RspIcon from "./RspIcon/RspIcon";

import "./Rsp.sass";

class Rsp extends Component {
  render() {
    return (
      <div className="rsp">
        <RspHeader />
        <RspIcon choice="scissors" />
      </div>
    );
  }
}

export default Rsp;
