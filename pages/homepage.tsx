import React from "react";

import FirstDiv from "../components /Homepage/FirstDiv/FirstDiv";
import SecondDiv from "../components /Homepage/SecondDiv/SecondDiv";
import ThirdDiv from "../components /Homepage/ThirdDiv/ThirdDiv";
import ForthDiv from "../components /Homepage/ForthDiv/ForthDiv";
import Homhero from "../components /Homepage/HomeHero/Homhero";
import Footer from "../components /Footer/Footer";

const homepage = () => {
  return (
    <>
      <div>
        <Homhero />
        <FirstDiv />
        {/* <SecondDiv /> */}
        <ThirdDiv />

        <ForthDiv />
        <Footer />
      </div>
    </>
  );
};
export default homepage;
