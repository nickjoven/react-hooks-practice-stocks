import React from "react";
import Stock from "./Stock";

const PortfolioContainer = ({ portfolioList, handleAddPortfolio }) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList.map((stock) => {
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
        })
      }
    </div>
  );
}

export default PortfolioContainer;
