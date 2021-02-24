import { Component } from "react";

import close from "../../assets/img/icons/close.png";
import "./Modal.sass";

class Modal extends Component {
  render() {
    if (!this.props.isShow) {
      return null;
    }

    return (
      <div className={`modal ${this.props.classes}`}>
        <div className="modal__body">
          <h2 className="modal__title">{this.props.title}</h2>
          <p className="modal__text">{this.props.children}</p>
          <button className="modal__close-btn" onClick={this.props.onClose}>
            <img className="modal__close-btn-icon" src={close} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
