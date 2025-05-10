const fetchStockData = require('../utils/fetchStock.js'); // Change to CommonJS require

// Function to generate average stock price
const getAverageStockPrice = async (ticker, minutes) => {
  const data = await fetchStockData(ticker, minutes);

  if (!data.length) {
    throw new Error('No stock data found');
  }

  const average = data.reduce((acc, obj) => acc + obj.price, 0) / data.length;

  return {
    averageStockPrice: parseFloat(average.toFixed(6)),
    priceHistory: data
  };
};

module.exports = { getAverageStockPrice }; // Export function as a CommonJS module
