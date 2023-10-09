import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const stockDatabase = "http://localhost:3001/stocks";
  const [allStocks, setAllStocks] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [sortedStocks, setSortedStocks] = useState(null);
  const stocksToDisplay = ( sortedStocks ) ? sortedStocks : allStocks;

  useEffect(fetchStocks, [])

  function fetchStocks() {
    fetch(stockDatabase)
    .then(response => response.json())
    .then(data => setAllStocks(() => data))
  }

  function clickOnStock(stock, value) {
    if (value === "listed-stock") {
      buyStock(stock)
    } else if (value === "bought-stock") {
      sellStock(stock)
    }
  }
  
  function buyStock(stock) {
    const alreadyBoughtStock = boughtStocks.find((oneStock) => {
      if (oneStock === stock) {return true}
    })
    if (alreadyBoughtStock) {
      return null
    } else {
      setBoughtStocks([...boughtStocks, stock])
    }
  }

  function sellStock(stock) {
    setBoughtStocks(boughtStocks.filter((oneStock) => {
      if (oneStock !== stock) {
        return true
      }}))
  }

  function sortStocks(orderedStocks) {
    setSortedStocks(orderedStocks)
  }

  return (
    <div>
      <SearchBar stocks={allStocks} sortStocks={sortStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} clickOnStock={clickOnStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} clickOnStock={clickOnStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
