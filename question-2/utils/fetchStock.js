const axios = require('axios');

// fetch stock data
const fetchStockData = async (ticker, minutes) => {
  const url = `${process.env.STOCK_API_URL}/stocks/${ticker}${minutes ? `?minutes=${minutes}` : ''}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.STOCK_TOKEN}`
      }
    });

    if (Array.isArray(response.data)) {
      return response.data;
    }

    return response.data.stock ? [response.data.stock] : [];
  } catch (error) {
    console.error('Fetch stock error:', error.message);
    return [];
  }
};

module.exports = fetchStockData;
