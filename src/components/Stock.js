import React from "react";

function Stock({value, stock, clickOnStock }) {
  const { name, ticker, price} = stock;

  function handleClick(event) {
    clickOnStock(stock, value)
  }

  return (
    <div>
      <div className="card" value={value} onClick={handleClick} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker+": "+price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
