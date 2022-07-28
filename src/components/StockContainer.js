import React from "react";
import Stock from "./Stock";

const StockContainer = ({ stocks, handleAddPortfolio, portfolioList }) => {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        const { id, ticker, name, type, price } = stock
        return (
          <Stock
            key={id}
            stock={stock}
            id={id}
            ticker={ticker}
            name={name}
            type={type}
            price={price}
            handleAddPortfolio={handleAddPortfolio}
          />
        )
      })}
    </div>
  );
}

export default StockContainer;
