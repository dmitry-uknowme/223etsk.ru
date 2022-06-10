import React from "react";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import HomeSections from "../../renderer/components/sections/HomeSections";
import HomeServices from "../../renderer/components/sections/HomeServices";
import HomeStart from "../../renderer/components/sections/HomeStart";
import Slider from "../../renderer/components/sections/Slider";

const HomePage = () => {
  return (
    <MainLayout>
      <Slider />
      <HomeSections />
      <HomeServices />
      <HomeStart />
    </MainLayout>
  );
};

export default HomePage;
