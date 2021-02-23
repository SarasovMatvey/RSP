import { Component } from "react";

import rock from "../../../assets/img/rock.png";
import scissors from "../../../assets/img/scissors.png";
import paper from "../../../assets/img/paper.png";
import question from "../../../assets/img/icons/question.gif";

import "./RspIcon.sass";

class RspIcon extends Component {
  render() {
    return (
      <div
        className={`rsp__icon ${this.props.classes || ""}`}
        onClick={this.props.click}
      >
        <img
          src={this._getChoiceImg(this.props.choice)}
          alt={this.props.choice}
          className="rsp__icon-img"
        />
      </div>
    );
  }

  _getChoiceImg(choice) {
    switch (choice) {
      case "rock":
        return rock;
      case "scissors":
        return scissors;
      case "paper":
        return paper;
      default:
        return question;
    }
  }
}

export default RspIcon;
