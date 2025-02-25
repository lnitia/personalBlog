---
icon: list
date: 2024-08-06
category:
  - 面经
order: 4
excerpt: <p>科大讯飞一面</p>
editLink: false
article: false
---
# 科大讯飞一面

消费者BG虚拟人研发前端岗

## 1 自我介绍

## 2 通过什么渠道学习相关技术，学校有相关课程培训吗

自学+师兄帮助

## 3 学校有学前端课程吗

没有，本科有学计算机基础课程

## 4 JS声明变量的方式

var、let、const、function、class、import

## 5 const在使用之后声明会出现什么现象，为什么

会报错，因为在声明前变量处于暂时性死区

## 6 先调用函数再声明函数有没有问题，为什么

没有问题，因为变量提升：在执行JS代码之前，所有的全局变量（包括函数和var声明的变量），都会绑定到window对象上，只是函数会包含函数体，变量仅仅是一个undefined

## 7 对React、Vue的理解

React自己编写的内容更多，可以实现复杂功能，Vue封装的功能多一点，

## 8 举个例子，Vue封装了的但react没有需要手写的

1. **双向数据绑定** ：Vue 通过 `v-model` 指令轻松实现双向数据绑定，而在 React 中，通常需要手动编写 `onChange` 事件处理器和状态管理来实现类似的功能。
1. **指令** ：Vue 提供了许多内置的指令（如 `v-if`、`v-for`、`v-show` 等），可以直接在模板中使用，而 React 则没有类似的指令，通常需要通过 JavaScript 逻辑在 JSX 中实现这些功能。
1. **计算属性** ：Vue 的计算属性（`computed`）允许你声明依赖于其他数据的属性，React 中通常需要使用 `useMemo` 或手动处理依赖关系

## 9 两个框架本身的实现原理的了解

**React** ：

* **单向数据流** ：数据在 React 中是单向流动的，父组件通过 props 向子组件传递数据，子组件通过回调函数将数据传递回父组件。
* **组件化** ：React 视图层是由一个个组件组成，组件可以通过组合和复用构建复杂的 UI。

vue：

* **双向数据绑定** ：Vue 通过 `v-model` 实现数据与视图的双向绑定，简化了表单处理等场景。
* **响应式系统** ：Vue 的响应式系统通过 `Object.defineProperty` 或 `Proxy` 监听数据的变化，并在数据变化时自动更新视图。
* **指令与模板语法** ：Vue 提供了丰富的模板语法和指令，使得开发者可以更方便地操作 DOM 和绑定数据。

## 10 react常用的生命周期有哪些

* **`componentDidMount`** ：组件第一次渲染完成后调用，适合做一些异步请求或 DOM 操作。
* **`componentDidUpdate`** ：组件更新完成后调用，可以在这里处理组件更新后的逻辑。
* **`componentWillUnmount`** ：组件即将从 DOM 中移除时调用，可以在这里做一些清理工作，比如取消订阅或清除计时器。

## 11 hooks的好处，为什么选择使用hooks

* **简化状态管理** ：Hooks 允许你在函数组件中使用状态和其他 React 特性，无需编写类组件，使代码更加简洁。
* **更好的代码复用** ：通过自定义 Hooks，可以将组件逻辑提取到可重用的函数中，方便在不同组件间共享逻辑。
* **副作用处理** ：`useEffect` Hook 使得在函数组件中处理副作用（如数据获取、订阅、手动更改 DOM 等）变得更加方便。
* **避免 this 问题** ：函数组件中的 Hooks 不使用 `this`，因此减少了 this 指向错误带来的问题。

## 12 网络请求axios在请求之前做一些操作的话最好是在哪个地方进行处理，比如对head做转换处理，如果要对请求进行全局拦截要如何处理

* **请求前的处理** ：可以使用 Axios 的 `interceptors` 来在请求发送前对请求头（headers）或其他参数进行处理。比如添加身份验证 token：

```js
axios.interceptors.request.use(config => {
  // 在请求发送前进行一些操作
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => {
  return Promise.reject(error);
});
```

* **全局拦截** ：同样使用 `interceptors` 来处理请求和响应的拦截。对于响应拦截，可以用来处理全局的错误：

```js
axios.interceptors.response.use(response => {
  // 处理响应数据
  return response;
}, error => {
  // 处理响应错误
  if (error.response.status === 401) {
    // 处理未授权错误，比如跳转到登录页
  }
  return Promise.reject(error);
});
```

## 13 mavonEditor是什么，主要是解决什么问题，有了解这个库的官方文档、大概思路吗

MavonEditor 是一个基于 Vue 的 Markdown 编辑器。它提供了对 Markdown 语法的支持，使用户可以在应用中编写和预览 Markdown 内容。主要解决的问题包括：

* **Markdown 编辑** ：用户可以使用 Markdown 语法来撰写内容，并实时预览结果。
* **语法高亮** ：支持多种编程语言的语法高亮显示。
* **插件支持** ：MavonEditor 提供了扩展的接口，允许开发者根据需求进行功能的扩展

## 14 项目中用nodejs主要是处理什么，是自己写了一个服务接口吗

数据校验、处理、存储

## 15 登录的实现流程思路

1. **用户输入凭据** ：用户输入用户名和密码。
1. **发送请求** ：前端将用户输入的凭据发送到服务器。
1. **服务器验证** ：服务器验证用户名和密码是否正确。
1. **生成 token** ：验证成功后，服务器生成一个 JWT（JSON Web Token）或其他形式的 token，并将其返回给客户端。
1. **存储 token** ：前端将 token 存储在 `localStorage`、`sessionStorage` 或 `cookie` 中。
1. **后续请求带上 token** ：前端在后续的 API 请求中将 token 附加到请求头中，以表明用户的身份。
1. **服务器验证 token** ：服务器在接收到请求时验证 token 的有效性，如果 token 有效，则处理请求，否则返回错误。

## 16 登录是一次接口调用，登录成功后返回成功态，这个成功态是怎么保持在后续的请求中

登录成功后，前端通常会接收到服务器返回的 token。这个 token 可以存储在 `localStorage`、`sessionStorage` 或 `cookie` 中。每次发送 API 请求时，前端会在请求头中附加 token，以验证用户身份。

## 17 token在前端如何存储

sessionStorage

常见的 token 存储方式包括：

* **`localStorage`** ：token 可以跨页面刷新，并且在浏览器关闭后仍然存在，适合用于需要长时间保持登录状态的场景。
* **`sessionStorage`** ：token 仅在当前会话（浏览器窗口或标签页）中有效，浏览器关闭后即被清除，适合用于需要短期登录的场景。
* **`cookie`** ：可以设置 cookie 的有效期和作用域，适用于需要与服务器共享存储的场景，可以通过 HTTP-only 和 Secure 标志增强安全性

## 18 退出登录操作流程

* **清除 token** ：从 `localStorage`、`sessionStorage` 或 `cookie` 中移除 token。
* **通知服务器** （可选）：发送请求给服务器，通知用户退出登录，以便服务器可以清除会话或做其他处理。
* **重定向到登录页** ：通常会将用户重定向到登录页面

## 19 这个过程会调用接口吗

是否调用接口取决于具体实现。一般来说，前端清除 token 即可完成退出登录，但在某些场景下，前端可能需要通知服务器以便服务器清除会话或其他相关数据，这种情况下会调用接口。

## 20 token有在服务侧进行存储吗

没有

（通常情况下，token 是不在服务端存储的。服务端通过验证 token 的签名和 payload 来验证其有效性。但是，在某些安全要求较高的场景下，服务端可能会将 token 存储在数据库中，以便可以主动撤销或失效 token。）

## 21 token如何关联用户信息

express-jwt解析token拿到token中携带的用户信息

（在生成 token 时，服务器通常会将用户的标识（如用户 ID）编码到 token 的 payload 部分。前端携带 token 发起请求时，服务器会解析 token，从中提取出用户标识，然后在数据库中查找对应的用户信息。）

## 22 unity项目中做了哪些工作

## 23 算法相关有学过吗，简单描述一下冒泡排序

相邻两个数之间比较，更大的数放后面

## 24 移动端布局和web端布局的差异

移动端布局：单栏布局，隐藏和折叠

web端布局：多列布局

## 25 休息时间有自己学前端相关的东西吗，会看什么东西、谁的博客等

## 26 对你印象最深刻的一件事，有什么启发

查找源码解决问题

## 27 最近有进行复盘和总结吗

每天总结工作内容和收获

## 28 比较有成就感的事，说一个具体的示例

利用fabric完成二维轨道展示

## 29 个人规划

深度：前端知识深入掌握

广度：大前端、产品方向了解学习

## 30 为什么选择前端方向进行发展

课题组安排+前端有即时成果

## 31 反问

技术栈：react

业务方向：c端产品，虚拟人平台，主要功能有离线视频生产、虚拟人做视频、文本合成语音，提供虚拟人交互平台作为解决方案
