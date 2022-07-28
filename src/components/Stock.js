import React from "react";

const Stock = ({ stock, id, ticker, name, type, price, handleAddPortfolio }) => {
  
  const handleClickAddPortfolio = () => {
    handleAddPortfolio(stock)
  }
  return (
    <div>
      <div onClick={handleClickAddPortfolio} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
