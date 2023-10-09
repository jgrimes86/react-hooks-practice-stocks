import React from "react";
import Stock from "./Stock";

function PortfolioContainer({boughtStocks, clickOnStock}) {

  const boughtStockList = boughtStocks.map((stock) => {
    return <Stock value={"bought-stock"} key={stock.id} stock={stock} clickOnStock={clickOnStock} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStockList}
    </div>
  );
}

export default PortfolioContainer;
