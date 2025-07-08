const express = require('express');
const router = express.Router();

// Import and use your modules' routes here
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

// Later, you can easily add:
// const productRoutes = require('./productRoutes');
// router.use('/products', productRoutes);

module.exports = router;
