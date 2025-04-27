// src/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config();

// 导入路由
const appStoreRoutes = require('./routes/appStoreRoutes');

// 初始化应用
const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api', appStoreRoutes);

// 首页路由
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'App Store API 服务正在运行',
        endpoints: {
            reviews: '/api/reviews'
        }
    });
});

// 处理未找到的路由
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: '找不到请求的资源'
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器在 ${process.env.NODE_ENV} 模式下运行，端口: ${PORT}`);
});