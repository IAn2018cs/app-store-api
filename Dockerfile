# 使用官方 Node.js 镜像作为基础镜像
FROM node:23-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN npm ci --only=production

# 复制项目文件
COPY . .

# 设置环境变量
ENV NODE_ENV=production

# 暴露端口
EXPOSE $PORT

# 启动应用
CMD ["node", "src/app.js"]