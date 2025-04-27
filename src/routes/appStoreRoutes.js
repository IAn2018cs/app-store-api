// src/routes/appStoreRoutes.js
const express = require('express');
const router = express.Router();
const { getAppReviews, getAppInfo } = require('../controllers/appStoreController');

/**
 * @route   GET /api/reviews
 * @desc    获取应用商店评论
 * @access  Public
 */
router.get('/reviews', getAppReviews);

/**
 * @route   GET /api/app
 * @desc    获取应用详细信息
 * @access  Public
 */
router.get('/app', getAppInfo);

module.exports = router;