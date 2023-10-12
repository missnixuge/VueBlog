
这里仅仅是vue项目


*********************************************************
### 项目下载后，首先安装依赖包
```
npm install
```

### 安装成功后，运行即可
```
npm run serve // 请不要把 再一直用 dev 命令了
```
然后你就可以直接访问 http://localhost:8081 默认使用mockjs加载数据
3

## 功能
- 首页
- 标签
- 留言
- 友链
- 关于




## Tips：

本项目默认已启用mockjs 
如果你想关闭，可以直接修改mock目录下的 index.js 文件
blog({ mock: false });

```
如果你想换一个端口，可以直接修改根目录下的 vue.config.js 文件

  devServer: {
    port: 2364, // 当前 admin 项目的端口号
    https: false,

而且也要代理下后端的接口地址，如果你使用 proxy 来实现跨域的话（如果用 CORS 跨域，这里就不用配置了）：

    proxy: {
      // 配置多个代理
      "/api": {
        target: "http://localhost:8081",//这里改成你自己的后端api端口地址，记得每次修改，都需要重新build

```

### 如果要部署，先执行bulid
```
npm run build

```
### dist目录就是打包好的文件









