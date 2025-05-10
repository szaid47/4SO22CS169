const express = require('express');
const dotenv = require('dotenv');
const stockRoutes = require('./routes/stockRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', stockRoutes);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));