import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [stocks, setStocks] = useState([])
  const [portfolioList, setPortfolioList] = useState([])

  useEffect(() => {
    const fetchStocks = async () => {
      let req = await fetch('http://localhost:3001/stocks')
      let res = await req.json()
      console.log('stocks', res)
      setStocks(res)
    }
    fetchStocks()
  }, [])

  const handleAddPortfolio = (stock) => {
    if (portfolioList.includes(stock)) {
      const updatedPortfolio = portfolioList.filter((target) => target !== stock)
      return setPortfolioList(updatedPortfolio)
    } else {
      const updatedPortfolio = [...portfolioList, stock]
      return setPortfolioList(updatedPortfolio)
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocks} 
            handleAddPortfolio={handleAddPortfolio} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} handleAddPortfolio={handleAddPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
