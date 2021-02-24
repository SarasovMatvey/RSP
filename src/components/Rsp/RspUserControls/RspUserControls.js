import { Component } from "react";
import RspIcon from "../RspIcon/RspIcon";

import "./RspUserControls.sass";

class RspUserControls extends Component {
  state = {
    choices: ["rock", "scissors", "paper"],
  };

  render() {
    return (
      <div className="rsp__user">
        {this.state.choices.map((choice, index) => {
          return (
            <RspIcon
              key={index}
              classes="rsp__user-control"
              choice={choice}
              click={() => {
                this.props.click(choice);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default RspUserControls;
