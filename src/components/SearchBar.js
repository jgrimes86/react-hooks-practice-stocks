import React from "react";

function SearchBar({stocks, sortStocks}) {

  function handleSort(event) {
    const key = (event.target.value === "Alphabetically") ? "name" : "price";
    const sortedStocks = [...stocks.sort((stockA, stockB) => {
      if (stockA[key]<stockB[key]) {
        return -1
      } else {return 1}
    })]
    sortStocks(sortedStocks)
  }

  function handleFilter(event) {
    const typeOfStock = event.target.value;
    const filteredStocks = stocks.filter((stock) => {
      if (stock.type === typeOfStock) {
        return true
      } else {return false}
    })
    sortStocks(filteredStocks)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
