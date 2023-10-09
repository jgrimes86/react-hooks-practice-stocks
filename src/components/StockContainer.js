import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, clickOnStock}) {

  const stockList = stocks.map((stock) => {
    return <Stock value={"listed-stock"} key={stock.id} stock={stock} clickOnStock={clickOnStock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
