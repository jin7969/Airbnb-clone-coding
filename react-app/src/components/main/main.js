import React from 'react';
import Enjoy from './enjoy/enjoy';
import Footer from './footer';
import Hosting from './hosting';
import LookAround from './city/lookAround';
import Home from './home/home';
import Option from './option/option';
import dummy from './main_data.json';
import { useEffect, useState } from 'react'

function Main() {
  const [citysData, setCitysData] = useState([]);
  const [sectionsData, setSectionsData] = useState([]);
  const [optionsData, setOptionsData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setCitysData(dummy.citys)
      setSectionsData(dummy.sections)
      setOptionsData(dummy.options)
    };
    fetchData();
  })

  return (
    <>
      <Home></Home>
      <LookAround citys={citysData}></LookAround>
      <Option options={optionsData}></Option>
      <Hosting></Hosting>
      <Enjoy sections={sectionsData}></Enjoy>
      <Footer></Footer>
    </>
  )
}

export default Main;