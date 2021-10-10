import React from "react";
import Footer from "../main/footer";
import HostingTip from "./hosting/HostingTip";
import Navbar from "./Navbar";
import Reservation from "./Reservation";
import Today from "./Today";

function Mode() {
  return (
    <>
      <Navbar />
      <Today />
      <Reservation />
      <HostingTip />
      <Footer />
    </>
  );
}

export default Mode;
