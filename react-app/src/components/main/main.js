import React from 'react';
import Enjoy from './enjoy/enjoy';
import Footer from './footer';
import Hosting from './main_hosting/hosting';
import LookAround from './city/lookAround';
import Home from './home/home';
import Option from './option/option';
import dummy from './main_data.json';
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

function Main() {
  const responsive = useMediaQuery({
    query: "(max-width:769px)"
  });
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
      <Home responsive={responsive} />
      <LookAround citys={citysData} />
      <Option options={optionsData} />
      <Hosting responsive={responsive} />
      <Enjoy sections={sectionsData} />
      <Footer />
    </>
  )
}

export default Main;