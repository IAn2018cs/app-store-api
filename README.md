
# App Store API

一个简单的 API 服务，用于获取 Apple App Store 应用评论。

## 功能

- 获取应用评论

## 安装

```bash
# 克隆仓库
git clone <repository-url>
cd app-store-api

# 安装依赖
npm install

# 配置环境变量
# 复制 .env.example 到 .env 并根据需要修改
```

## 使用方法

```bash
# 开发模式启动
npm run dev

# 生产模式启动
npm start
```

## API 端点

### 获取应用评论

```
GET /api/reviews
```

查询参数:
- `id`: 应用的 iTunes trackId (例如: 553834731)
- `appId`: 应用的 iTunes bundleId (例如: com.midasplayer.apps.candycrushsaga)
- `country`: 国家/地区代码 (默认: us)
- `page`: 页码 (默认: 1, 最大: 10)
- `sort`: 排序方式 (recent 或 helpful, 默认: recent)

注意: 必须提供 `id` 或 `appId` 中的一个。

示例请求:
```
GET /api/reviews?id=553834731&page=1&sort=recent
GET /api/reviews?appId=com.midasplayer.apps.candycrushsaga&page=2&sort=helpful
```

## 许可证

MIT
