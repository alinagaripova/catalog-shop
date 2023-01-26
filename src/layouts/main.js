import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Ellipses from '../components/ellipses'

export default function MainLayout(props) {
  return (
    <div className='main-layout'>
      <Ellipses/>
      <Header />
      {props.children}
      <Footer/>
    </div>
  );
}
