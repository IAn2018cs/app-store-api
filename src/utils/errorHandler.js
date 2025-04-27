// src/utils/errorHandler.js

/**
 * 统一错误响应格式
 */
const errorResponse = (res, message, statusCode = 500, error = null) => {
    return res.status(statusCode).json({
        success: false,
        error: message,
        details: error ? error.message : null
    });
};

module.exports = { errorResponse };