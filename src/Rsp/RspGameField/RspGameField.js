import { Component } from "react";
import RspIcon from "../RspIcon/RspIcon";

import "./RspGameField.sass";

class RspGameField extends Component {
  render() {
    return (
      <div className="rsp__game-field">
        <div className="container rsp__game-field-container">
          <div className="rsp__user">
            <RspIcon choice="rock" />
            <RspIcon choice="scissors" />
            <RspIcon choice="paper" />
          </div>
          <div className="rsp__computer">
            <RspIcon choice="paper" />
          </div>
        </div>
      </div>
    );
  }
}

export default RspGameField;
