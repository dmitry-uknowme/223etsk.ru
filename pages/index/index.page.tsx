import React from "react";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import HomeSections from "../../renderer/components/sections/HomeSections";
import HomeServices from "../../renderer/components/sections/HomeServices";
import Slider from "../../renderer/components/sections/Slider";

const HomePage = () => {
  return (
    <MainLayout>
      <Slider />
      <HomeSections />
      <HomeServices />
    </MainLayout>
  );
};

export default HomePage;
