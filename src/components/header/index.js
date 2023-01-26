import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import { getAccount } from "../../helpers/getAccountData";
import logo from '../../images/logo.png';

import './style.scss';

export default function Header(){
  const [count, setCount] = useState(0);
  const [accData, setAccData] = useState(0);

  function connectWallet(){
    getAccount()
      .then((data)=> {
        setAccData(data) //
      })
  }
  
  function clickBtn(){
    setCount(count+1)
  }

  // const dispasth = useDispatch()
  // const cash = useSelector(state => state.cash)
  // console.log('cash',cash)

    
  // function addCash(){
  //   dispasth({ type: 'ADD_CASH', payload: 5 })
  // }

  return (
    <header className='header'>
      <div  className='header__el'></div>
      <Link to="/" className='header__logo'>
        <img src={logo} alt="logo" />
      </Link>
      {/* <button onClick={addCash} style={{color: 'black'}}>число {cash}</button> */}

      <div className='header__right-block'>
        <Button text="Connect Wallet" />
      </div>
    </header>
  )
}