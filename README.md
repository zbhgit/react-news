##### 新闻客户端

[效果预览](http://www.zhangbinhe.com/react-news)

*此项目基于react、react-router、Ant Design开发的新闻客户端。实现注册、登录、评论、收藏等功能*

1. 开发环境有create-react-app搭建，当引入Antd的时，需配置webpack文件，实现按需加载Antd组件，使打包文件减小。通过此次配置webpack文件，使自己对webpack有了一定的了解，接触到webpack的基本使用
2. 使用Antd Design组件库，快速搭建视图部分
3. 此项目使用react-router（2）版本设计前端路由，实现SPA单页应用
4. 使用react-responsive实现PC和移动端适配，结合Antd UI组件实现更快的开发
5. 使用基于promise的fetch 实现与后端的交互，因不兼容老版本的浏览器， 所以需要配合whatwg-fetch使用。


###### 克隆本项目到本地运行

```
  $ git clone https://github.com/zbhgit/react-news.git
  $ cd react-news
  $ npm install 
  $ npm start
```
此时浏览器自动打开localhost:3000这个端口，会见到效果，查看手机端效果，请打开开发者工具，或者[效果预览](http://www.zhangbinhe.com/react-news)