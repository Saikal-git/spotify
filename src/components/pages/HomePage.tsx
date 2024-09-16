import React from "react";
import Welcome from "./HomeSections/Welcome";
import AboutUs from "./HomeSections/AboutUs";
import PlayList from "../layout/PlayList/PlayList";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <AboutUs />
    </>
  );
};

export default HomePage;
