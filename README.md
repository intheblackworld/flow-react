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
- [x] flow
- [x] React
- [x] Redux
- [ ] Redux-thunk
- [x] Reselect
- [x] ImmutableJS
- [ ] Semantic or Ant-Design
- [ ] Mock API
- [ ] Axios
- [ ] Ramda
- [ ] dayjs
- [ ] duck pattern
- [ ] reducer helper
- [ ] ajax middleware
- [x] ESLint
- [x] git hook for ESLint
- [x] support decorator
- [x] support async/await
