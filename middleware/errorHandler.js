// middleware/errorHandler.js

module.exports = (err, req, res, next) => {
    console.error(err.stack); // Logs detailed error in console

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        message,
        // Only include stack in development:
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
};
