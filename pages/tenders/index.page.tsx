import React from "react";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import TendersSearch from "../../renderer/components/sections/TendersSearch";

const TendersPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <TendersSearch />
          </div>
          <div className="col-md-3 offset-md-1"></div>
        </div>
      </div>

      {/* <Search />
      <Filters />
      <Tenders /> */}
    </MainLayout>
  );
};

export default TendersPage;
