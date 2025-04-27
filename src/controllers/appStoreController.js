// src/controllers/appStoreController.js
const store = require('app-store-scraper');
const { errorResponse } = require('../utils/errorHandler');

/**
 * 获取应用评论
 * @param {Object} req - Express请求对象
 * @param {Object} res - Express响应对象
 */
const getAppReviews = async (req, res) => {
    try {
        const {
            id,
            appId,
            country = 'us',
            page = 1,
            sort = 'recent'
        } = req.query;

        // 验证必要参数
        if (!id && !appId) {
            return errorResponse(res, 'id 或 appId 是必须的参数', 400);
        }

        // 验证页码
        const pageNum = parseInt(page);
        if (isNaN(pageNum) || pageNum < 1 || pageNum > 10) {
            return errorResponse(res, '页码必须是1-10之间的有效数字', 400);
        }

        // 处理排序参数
        let sortParam;
        if (sort.toLowerCase() === 'recent') {
            sortParam = store.sort.RECENT;
        } else if (sort.toLowerCase() === 'helpful') {
            sortParam = store.sort.HELPFUL;
        } else {
            sortParam = store.sort.RECENT; // 默认值
        }

        // 构建请求参数
        const params = {
            country,
            page: pageNum,
            sort: sortParam
        };

        // 根据提供的参数添加id或appId
        if (id) params.id = id;
        if (appId) params.appId = appId;

        // 获取评论
        const reviews = await store.reviews(params);

        return res.json({
            success: true,
            count: reviews.length,
            data: reviews
        });

    } catch (error) {
        console.error('获取应用评论失败:', error);
        return errorResponse(res, '获取应用评论失败', 500, error);
    }
};

/**
 * 获取应用详细信息
 * @param {Object} req - Express请求对象
 * @param {Object} res - Express响应对象
 */
const getAppInfo = async (req, res) => {
    try {
        const {
            id,
            appId,
            country = 'us',
            lang,
            ratings = false
        } = req.query;

        // 验证必要参数
        if (!id && !appId) {
            return errorResponse(res, 'id 或 appId 是必须的参数', 400);
        }

        // 构建请求参数
        const params = {
            country
        };

        // 处理可选参数
        if (id) params.id = id;
        if (appId) params.appId = appId;
        if (lang) params.lang = lang;

        // 转换 ratings 参数为布尔值
        if (ratings === 'true' || ratings === '1') {
            params.ratings = true;
        }

        // 获取应用信息
        const appInfo = await store.app(params);

        return res.json({
            success: true,
            data: appInfo
        });

    } catch (error) {
        console.error('获取应用信息失败:', error);
        return errorResponse(res, '获取应用信息失败', 500, error);
    }
};

module.exports = {
    getAppReviews,
    getAppInfo
};