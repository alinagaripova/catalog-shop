import React from 'react';

import './style.scss';

export default function Button({text}){
  return (
    <button className="button">
      {text}
    </button>
  )
}