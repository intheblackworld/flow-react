### Install flow
```bash
brew update
brew install flow
yarn add flow-bin -D
```

### Use flow with vscode
1. 安裝 vscode ESLint 套件
2. 設定 .eslintrc
3. 安裝需要 package

[ref](https://zhuanlan.zhihu.com/p/26310058)

### Use flow with babel/webpack/react
[ref](https://medium.com/@fastphrase/integrating-flow-into-a-react-project-fbbc2f130eed)

```
// 使用 flow-typed 指令安裝第三方套件可以讓你定義他們的 interface
yarn global add flow-typed
// ex. flow-typed install rxjs@5.0.x
```


### TODO List
enviroment design
- [x] 可使用 flow
- [x] React
- [x] 可使用 Redux
- [x] 可使用 Reselect
- [x] Redux-thunk
- [x] 可使用 ImmutableJS
- [ ] Semantic or Ant-Design
- [x] Mock API (使用 mock-json-server)
- [ ] Axios
- [x] Ramda
- [x] dayjs
- [ ] reducer helper
- [x] React Router with Dynamic imports
- [ ] react-router-redux   目的就是要把react-router 的history 跟store 互相同步, 也就是說store 裡面會有router 的狀態
- [ ] persistence state
- [ ] react-motion
- [ ] chart
- [ ] favicon
- [ ] localStorage
- [ ] 強制在指定檔案加上 /* @flow */ 字段，並且 git hook 檢查，如果指定的檔案沒有 @flow 不給 push
- [x] webpack alias
- [x] duck pattern

- [x] ajax middleware
- [x] eslint
- [x] git hook
- [x] 可使用 decorator  [React.js 用 @decorator 來裝飾你的 Component 吧！ – Larry・Blog](https://larrylu.blog/react-decorator-hoc-2536db2737cb)
- [x] 可使用 async await [Webpack 4 与 Babel/preset-env 升级不完全指南 · Issue #14 · zchen9/code · GitHub](https://github.com/zchen9/code/issues/14)  [Await Off My Shoulders: Enabling Async/Await in Webpack | CodingItWrong](https://codingitwrong.com/2018/02/05/await-off-my-shoulders.html)

### Webpack 目标
- [ ] 1. debug 容易
- [ ] 2. 打包速度快
- [x] 3. 写 scss
- [x] 4. chunk 模式
- [ ] 5. 分离 development, production 配置 [login-flow/makewebpackconfig.js at master · mxstbr/login-flow · GitHub](https://github.com/mxstbr/login-flow/blob/master/makewebpackconfig.js)
- [ ] 6. 添加 .env 参数
- [x] 7. webpack dynamic imports