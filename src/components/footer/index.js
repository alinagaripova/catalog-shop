import React from 'react';
import logo from '../../images/logo.png';
import fb from '../../images/socials/fb.png';
import twi from '../../images/socials/twi.png';
import youtube from '../../images/socials/youtube.png';
import inst from '../../images/socials/inst.png';

import './style.scss';

const socials = [ fb, twi, youtube, inst ];

export default function Footer(){
  return (
    <footer className='footer'>
      <div className='footer__main'>
        <div className='footer__logo'>
          <img src={logo} alt="logo" />
        </div>
        <ol className='footer__list'>
          <li>Privacy Policy</li>
          <li>Terms &#38; Conditions</li>
          <li>Cookie Policy</li>
        </ol>
        <div className='footer__socials'>
          {socials.map((icon) => {
            return (
              <div className='footer__socials_el'>
                <img src={icon} alt="socials"/>
              </div>
            )
          })}
        </div>
      </div>
      <div>©2022 All rights reserved. Powered by SFXDX</div>
    </footer>
  )
}