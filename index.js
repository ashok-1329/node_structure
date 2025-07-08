const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());


// Initialize DB tables if not exist
const initializeDB = require('./config/initializeDB');
initializeDB();

// load central route handler
const routes = require('./routes');
app.use('/api', routes);

// Global Error Handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));