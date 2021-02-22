import { Component } from 'react';

import rock from '../../assets/img/rock.png';
import scissors from '../../assets/img/scissors.png';
import paper from '../../assets/img/paper.png';

import './RspIcon.sass'

class RspIcon extends Component {
  render() {
    return (
      <div className="rsp__icon">
        <img src={paper} alt="" className="rsp__icon-img"/>
      </div>
    )
  }
}

export default RspIcon;