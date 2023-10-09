import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const stockDatabase = "http://localhost:3001/stocks";
  const [allStocks, setAllStocks] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);

  useEffect(fetchStocks, [])

  function fetchStocks() {
    fetch(stockDatabase)
    .then(response => response.json())
    .then(data => setAllStocks(() => data))
  }

  function clickOnStock(stock) {
    const alreadyBoughtStock = boughtStocks.find((oneStock) => {
      if (oneStock === stock) {return true}
    })
    if (alreadyBoughtStock) {
      sellStock(stock)
    } else {buyStock(stock)}
  }
  
  function buyStock(stock) {
    setBoughtStocks([...boughtStocks, stock])
  }

  function sellStock(stock) {
    setBoughtStocks(boughtStocks.filter((oneStock) => {
      if (oneStock !== stock) {
        return true
      }}))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={allStocks} clickOnStock={clickOnStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} clickOnStock={clickOnStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
