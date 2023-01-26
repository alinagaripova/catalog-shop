import React from 'react';
import logo from '../../images/metamask_logo.png';

import './style.scss';

export default function Button({text, handler, loading}){
  return (
    <button className="button" onClick={handler} disabled={loading}>
      <img src={logo} alt="" />
      {text}
    </button>
  )
}