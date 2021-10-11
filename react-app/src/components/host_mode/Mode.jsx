import React from "react";
import Footer from "../main/footer";
import HostingTip from "./hosting/HostingTip";
import Navbar from "./Navbar";
import Reservation from "./Reservation";
import Today from "./Today";
import { useMediaQuery } from "react-responsive";

function Mode() {
  const res = useMediaQuery({
    query: "(max-width:769px)",
  });
  return (
    <>
      <Navbar res={res} />
      <Today />
      <Reservation />
      <HostingTip />
      <Footer />
    </>
  );
}

export default Mode;
