import React from "react";
import Searchbox from "./Searchbox";
import RentHouseCard from "./RentHouseCard";
import SaleHouseCard from "./SaleHouseCard";

const Home = () => {
  return (
    <div>
      {/* search box -div */}
      <div>
        <Searchbox />
      </div>
      <div>
        {/* //Todo: TO put pagination in backend example number of house to be called */}
        <RentHouseCard />
      </div>
      <div>
        {/* //Todo: TO put pagination in backend example number of house to be called */}
        <SaleHouseCard />
      </div>
    </div>
  );
};

export default Home;
