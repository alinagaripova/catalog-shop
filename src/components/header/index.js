import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../../store/reducers/userData';
import Button from '../button';
import Loader from '../loader';
import { getAccount } from "../../helpers/getAccountData";
import { cutKey } from "../../helpers/cutKey";
import logo from '../../images/logo.png';

import './style.scss';

export default function Header(){
  const [error, setError] = useState(false);
  const { addData, toogleLoading } = userSlice.actions;
  const dispasth = useDispatch();
  const userData = useSelector(state => state.userReducer.userData)
  const isLoading = useSelector(state => state.userReducer.isLoading)

  window?.ethereum?.on('accountsChanged', (e) => {
    dispasth(addData(e[0]))
  });

  function connectWallet(){
    if (userData || error) return;
    dispasth(toogleLoading(true));

    setTimeout(()=>{ // timeOut для наглядности лоадера
      getAccount()
      .then((data)=> {
        dispasth(addData(data));
        dispasth(toogleLoading(false));
      })
        .catch(error => {
          setError(true);
          dispasth(toogleLoading(false));
        })
    }, 2000)
  }

  let btnText;

  if(userData){
    btnText = cutKey(userData);
  } else if(error) {
    btnText = "Скачайте MetaMask"
  } else {
    btnText = "Connect Wallet"
  }

  return (
    <header className='header'>
      <div  className='header__el'></div>
      <Link to="/" className='header__logo'>
        <img src={logo} alt="logo" />
      </Link>
      <div className='header__right-block'>
        {isLoading ? 
          <Loader /> :
          <Button handler={connectWallet} text={btnText} showLogo={userData} />}
      </div>
    </header>
  )
}