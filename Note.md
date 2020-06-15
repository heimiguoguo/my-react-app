素材
https://haltu.github.io/muuri/
http://golden-layout.com/


UI框架需求点
1. 可拖拽改变容器大小
2. 可拖拽改变容器位置
3. 可最大化最小化

https://hexagonsf.visualstudio.com/_git/platform


* create-react-app脚手架本身webpack配置支持jsx，支持scss，需要自己安装node-sass, sass-loader
  ```javascript
    npm i node-sass sass-loader -D
  ```

* Using React Hook, if component name start with lower-case letter, error below will occur

  ```javascript
  React Hook "useState" is called in function "withoutMemo" which is neither a React function component or a custom React Hook function.eslint(react-hooks/rules-of-hooks)
  ```

* echarts-for-react

  ```javascript
  npm i echarts echarts-for-react
  ```

* npm怎么升级所有的包？

* 使用antd DatePicker需要install moment.js

  ```javascript
  npm i moment
  ```

* import redux-persist
  ```javascript
  npm i redux-persist
  ```

  + 引入了redux-persist，每次刷新页面redux-persist都会自动加载之前的state并且初始化state，所以reducer参数state不需要设置默认值

