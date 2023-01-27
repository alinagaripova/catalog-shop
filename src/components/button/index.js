import React from 'react';
import logo from '../../images/metamask_logo.png';

import './style.scss';

export default function Button({text, handler, showLogo}){
  return (
    <button className="button" onClick={handler}>
      {showLogo ? <img src={logo} alt="" /> : ''}
      {text}
    </button>
  )
}