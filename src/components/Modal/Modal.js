import { Component } from "react";

import close from "../../assets/img/icons/close.png";
import "./Modal.sass";

class Modal extends Component {
  state = {
    isShow: this.props.isShow,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isShow !== this.props.isShow) {
      this.setState({ isShow: this.props.isShow });
    }
  }

  render() {
    return this.state.isShow ? (
      <div className={`modal ${this.props.classes}`}>
        <div className="modal__body">
          <h2 className="modal__title">{this.props.title}</h2>
          <p className="modal__text">{this.props.children}</p>
          <button
            className="modal__close-btn"
            onClick={this._closeModal.bind(this)}
          >
            <img className="modal__close-btn-icon" src={close} alt="" />
          </button>
        </div>
      </div>
    ) : null;
  }

  _closeModal() {
    this.setState({ isShow: false });
    this.props.onClose();
  }
}

export default Modal;
