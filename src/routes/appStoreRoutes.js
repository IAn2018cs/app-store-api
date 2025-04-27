// src/routes/appStoreRoutes.js
const express = require('express');
const router = express.Router();
const { getAppReviews } = require('../controllers/appStoreController');

/**
 * @route   GET /api/reviews
 * @desc    获取应用商店评论
 * @access  Public
 */
router.get('/reviews', getAppReviews);

module.exports = router;