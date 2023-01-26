import React from 'react';

import ellipse1 from '../../images/ellipse1.png'
import ellipse2 from '../../images/ellipse2.png'

import './style.scss';

const ellipses = [
  {
    image: ellipse1,
    rotate: 'left',
    id: 1
  },
  {
    image: ellipse1,
    rotate: 'right',
    id: 2
  },
  {
    image: ellipse2,
    rotate: 'left',
    id: 3
  },
  {
    image: ellipse2,
    rotate: 'right',
    id: 4
  },
]

export default function Ellipses(props) {
  return (
    <div className='ellipses'>
      {ellipses.map(({image, rotate, id}) => {
        return (
            <img key={id} src={image} alt="" className={`ellipse ellipse_${rotate} ellipse_${id}`}/>
        )
      })}
    </div>
  );
}
