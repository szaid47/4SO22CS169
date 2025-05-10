const axios = require('axios');

const fetchData = async (type) => {
  let url;
  switch (type) {
    case 'p':
      url = `${process.env.TEST_URL}/primes`;
      break;
    case 'f':
      url = `${process.env.TEST_URL}/fibo`;
      break;
    case 'e':
      url = `${process.env.TEST_URL}/even`;
      break;
    case 'r':
      url = `${process.env.TEST_URL}/rand`;
      break;
    default:
      throw new Error('Invalid number type');
  }

  try {
    const response = await axios.get(url, {
      timeout: 500,
      headers: {
        'Authorization': process.env.AUTH_TOKEN
      }
    });
    return response.data.numbers || [];
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    return [];
  }
};

module.exports = fetchData;
