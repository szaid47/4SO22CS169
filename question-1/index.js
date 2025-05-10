const express = require('express');
const app = express();
require('dotenv').config(); 
const numberController = require('./controllers/numberController'); 

const PORT = process.env.PORT || 3000;

app.get('/numbers/:type', numberController.getNumbers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});