import React from 'react';
import Enjoy from './enjoy';
import Footer from './footer';
import Hosting from './hosting';
import LookAround from './lookAround';
import Home from './home/home';
import Option from './option';


function Main() {
  return (
    <>
      <Home></Home>
      <LookAround></LookAround>
      <Option></Option>
      <Hosting></Hosting>
      <Enjoy></Enjoy>
      <Footer></Footer>
    </>
  )
}

export default Main;