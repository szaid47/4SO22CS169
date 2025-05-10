const fetchData = require('../utils/fetchData');

let numbersWindow = [];

const processNumbers = async (type) => {
  const fetchedNumbers = await fetchData(type);

  if (!fetchedNumbers.length) {
    throw new Error('Something went wrong');
  }

  const prevWindow = [...numbersWindow];
  const newUnique = [];

  for (let num of fetchedNumbers) {
    if (!numbersWindow.includes(num) && !newUnique.includes(num)) {
      newUnique.push(num);
    }
  }

  numbersWindow = [...numbersWindow, ...newUnique];

  const windowSize = parseInt(process.env.WINDOW_SIZE, 10);
  if (numbersWindow.length > windowSize) {
    numbersWindow = numbersWindow.slice(-windowSize);
  }

  const avg = numbersWindow.reduce((a, b) => a + b, 0) / numbersWindow.length;

  return {
    windowPrevState: prevWindow,
    windowCurrState: numbersWindow,
    numbers: fetchedNumbers,
    avg: parseFloat(avg.toFixed(2))
  };
};

module.exports = { processNumbers };
