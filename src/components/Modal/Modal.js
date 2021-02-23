import { Component } from "react";

import close from "../../assets/img/icons/close.png";
import "./Modal.sass";

class Modal extends Component {
  state = {
    isShow: true,
  };

  render() {
    return (
      <div>
        {this.state.isShow ? (
          <div className="modal">
            <div className="modal__body">
              <h2 className="modal__title">
                {this.props.title}Hellow how are you
              </h2>
              <p className="modal__text">
                {this.props.children} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Possimus eos, commodi earum eaque corporis
                labore? Illo temporibus saepe voluptatibus numquam fuga magnam
                nesciunt. Nobis aut, iure quos assumenda vero deserunt!{" "}
              </p>
              <button
                className="modal__close-btn"
                onClick={this._closeModal.bind(this)}
              >
                <img className="modal__close-btn-icon" src={close} alt="" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  _closeModal() {
    this.setState({ isShow: false });
  }
}

export default Modal;
