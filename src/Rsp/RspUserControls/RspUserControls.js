import { Component } from "react";
import RspIcon from "../RspIcon/RspIcon";

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
