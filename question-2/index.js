const express = require('express');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;


app.use('/stocks', stockRoutes);


app.listen(PORT, () => {
  console.log(`Stock service running on port ${PORT}`);
});