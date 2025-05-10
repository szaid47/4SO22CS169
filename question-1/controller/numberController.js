const numberService = require('../services/numberService');

const getNumbers = async (req, res) => {
  const { type } = req.params;

  // Try to get the numbers and send the result
  try {
    const result = await numberService.processNumbers(type);
    res.json(result);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({
      message: 'Something went wrong while fetching numbers.',
      error: error.message,
    });
  }
};

module.exports = { getNumbers };