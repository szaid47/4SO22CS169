const express = require('express');
const { getAverageStockPrice } = require('../services/stockService.js');

const router = express.Router();

router.get('/stocks/:ticker', async (req, res) => {
  const { ticker } = req.params;
  const { minutes, aggregation } = req.query;

  if (aggregation !== 'average') {
    return res.status(400).json({ error: 'error in get router' });
  }

  try {
    const result = await getAverageStockPrice(ticker, minutes);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: 'Auth token expired or invalid',
      error: err.message
    });
  }
});
module.exports = router;