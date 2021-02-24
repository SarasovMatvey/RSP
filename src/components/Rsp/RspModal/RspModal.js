import { Component } from "react";
import Modal from "../../Modal/Modal";

import "./RspModal.sass";

class RspModal extends Component {
  render() {
    let isWin = this.props.wins > this.props.fails;
    let modalTitle = isWin ? "You won!" : "You lose!";
    let modalStyles = isWin ? "rsp__modal-win" : "rsp__modal-fail";

    return (
      <Modal
        classes={modalStyles}
        isShow={this.props.isShowModal}
        title={modalTitle}
        onClose={this.props.onClose}
      >
        with a score of {this.props.wins}:{this.props.fails}
      </Modal>
    );
  }
}

export default RspModal;
