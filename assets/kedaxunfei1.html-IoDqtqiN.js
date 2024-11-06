import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as s}from"./app-0mkQjek1.js";const o={},t=s(`<h1 id="科大讯飞一面" tabindex="-1"><a class="header-anchor" href="#科大讯飞一面" aria-hidden="true">#</a> 科大讯飞一面</h1><p>消费者BG虚拟人研发前端岗</p><h2 id="_1-自我介绍" tabindex="-1"><a class="header-anchor" href="#_1-自我介绍" aria-hidden="true">#</a> 1 自我介绍</h2><h2 id="_2-通过什么渠道学习相关技术-学校有相关课程培训吗" tabindex="-1"><a class="header-anchor" href="#_2-通过什么渠道学习相关技术-学校有相关课程培训吗" aria-hidden="true">#</a> 2 通过什么渠道学习相关技术，学校有相关课程培训吗</h2><p>自学+师兄帮助</p><h2 id="_3-学校有学前端课程吗" tabindex="-1"><a class="header-anchor" href="#_3-学校有学前端课程吗" aria-hidden="true">#</a> 3 学校有学前端课程吗</h2><p>没有，本科有学计算机基础课程</p><h2 id="_4-js声明变量的方式" tabindex="-1"><a class="header-anchor" href="#_4-js声明变量的方式" aria-hidden="true">#</a> 4 JS声明变量的方式</h2><p>var、let、const、function、class、import</p><h2 id="_5-const在使用之后声明会出现什么现象-为什么" tabindex="-1"><a class="header-anchor" href="#_5-const在使用之后声明会出现什么现象-为什么" aria-hidden="true">#</a> 5 const在使用之后声明会出现什么现象，为什么</h2><p>会报错，因为在声明前变量处于暂时性死区</p><h2 id="_6-先调用函数再声明函数有没有问题-为什么" tabindex="-1"><a class="header-anchor" href="#_6-先调用函数再声明函数有没有问题-为什么" aria-hidden="true">#</a> 6 先调用函数再声明函数有没有问题，为什么</h2><p>没有问题，因为变量提升：在执行JS代码之前，所有的全局变量（包括函数和var声明的变量），都会绑定到window对象上，只是函数会包含函数体，变量仅仅是一个undefined</p><h2 id="_7-对react、vue的理解" tabindex="-1"><a class="header-anchor" href="#_7-对react、vue的理解" aria-hidden="true">#</a> 7 对React、Vue的理解</h2><p>React自己编写的内容更多，可以实现复杂功能，Vue封装的功能多一点，</p><h2 id="_8-举个例子-vue封装了的但react没有需要手写的" tabindex="-1"><a class="header-anchor" href="#_8-举个例子-vue封装了的但react没有需要手写的" aria-hidden="true">#</a> 8 举个例子，Vue封装了的但react没有需要手写的</h2><ol><li><strong>双向数据绑定</strong> ：Vue 通过 <code>v-model</code> 指令轻松实现双向数据绑定，而在 React 中，通常需要手动编写 <code>onChange</code> 事件处理器和状态管理来实现类似的功能。</li><li><strong>指令</strong> ：Vue 提供了许多内置的指令（如 <code>v-if</code>、<code>v-for</code>、<code>v-show</code> 等），可以直接在模板中使用，而 React 则没有类似的指令，通常需要通过 JavaScript 逻辑在 JSX 中实现这些功能。</li><li><strong>计算属性</strong> ：Vue 的计算属性（<code>computed</code>）允许你声明依赖于其他数据的属性，React 中通常需要使用 <code>useMemo</code> 或手动处理依赖关系</li></ol><h2 id="_9-两个框架本身的实现原理的了解" tabindex="-1"><a class="header-anchor" href="#_9-两个框架本身的实现原理的了解" aria-hidden="true">#</a> 9 两个框架本身的实现原理的了解</h2><p><strong>React</strong> ：</p><ul><li><strong>单向数据流</strong> ：数据在 React 中是单向流动的，父组件通过 props 向子组件传递数据，子组件通过回调函数将数据传递回父组件。</li><li><strong>组件化</strong> ：React 视图层是由一个个组件组成，组件可以通过组合和复用构建复杂的 UI。</li></ul><p>vue：</p><ul><li><strong>双向数据绑定</strong> ：Vue 通过 <code>v-model</code> 实现数据与视图的双向绑定，简化了表单处理等场景。</li><li><strong>响应式系统</strong> ：Vue 的响应式系统通过 <code>Object.defineProperty</code> 或 <code>Proxy</code> 监听数据的变化，并在数据变化时自动更新视图。</li><li><strong>指令与模板语法</strong> ：Vue 提供了丰富的模板语法和指令，使得开发者可以更方便地操作 DOM 和绑定数据。</li></ul><h2 id="_10-react常用的生命周期有哪些" tabindex="-1"><a class="header-anchor" href="#_10-react常用的生命周期有哪些" aria-hidden="true">#</a> 10 react常用的生命周期有哪些</h2><ul><li><strong><code>componentDidMount</code></strong> ：组件第一次渲染完成后调用，适合做一些异步请求或 DOM 操作。</li><li><strong><code>componentDidUpdate</code></strong> ：组件更新完成后调用，可以在这里处理组件更新后的逻辑。</li><li><strong><code>componentWillUnmount</code></strong> ：组件即将从 DOM 中移除时调用，可以在这里做一些清理工作，比如取消订阅或清除计时器。</li></ul><h2 id="_11-hooks的好处-为什么选择使用hooks" tabindex="-1"><a class="header-anchor" href="#_11-hooks的好处-为什么选择使用hooks" aria-hidden="true">#</a> 11 hooks的好处，为什么选择使用hooks</h2><ul><li><strong>简化状态管理</strong> ：Hooks 允许你在函数组件中使用状态和其他 React 特性，无需编写类组件，使代码更加简洁。</li><li><strong>更好的代码复用</strong> ：通过自定义 Hooks，可以将组件逻辑提取到可重用的函数中，方便在不同组件间共享逻辑。</li><li><strong>副作用处理</strong> ：<code>useEffect</code> Hook 使得在函数组件中处理副作用（如数据获取、订阅、手动更改 DOM 等）变得更加方便。</li><li><strong>避免 this 问题</strong> ：函数组件中的 Hooks 不使用 <code>this</code>，因此减少了 this 指向错误带来的问题。</li></ul><h2 id="_12-网络请求axios在请求之前做一些操作的话最好是在哪个地方进行处理-比如对head做转换处理-如果要对请求进行全局拦截要如何处理" tabindex="-1"><a class="header-anchor" href="#_12-网络请求axios在请求之前做一些操作的话最好是在哪个地方进行处理-比如对head做转换处理-如果要对请求进行全局拦截要如何处理" aria-hidden="true">#</a> 12 网络请求axios在请求之前做一些操作的话最好是在哪个地方进行处理，比如对head做转换处理，如果要对请求进行全局拦截要如何处理</h2><ul><li><strong>请求前的处理</strong> ：可以使用 Axios 的 <code>interceptors</code> 来在请求发送前对请求头（headers）或其他参数进行处理。比如添加身份验证 token：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在请求发送前进行一些操作</span>
  config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>全局拦截</strong> ：同样使用 <code>interceptors</code> 来处理请求和响应的拦截。对于响应拦截，可以用来处理全局的错误：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理响应数据</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理响应错误</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理未授权错误，比如跳转到登录页</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-mavoneditor是什么-主要是解决什么问题-有了解这个库的官方文档、大概思路吗" tabindex="-1"><a class="header-anchor" href="#_13-mavoneditor是什么-主要是解决什么问题-有了解这个库的官方文档、大概思路吗" aria-hidden="true">#</a> 13 mavonEditor是什么，主要是解决什么问题，有了解这个库的官方文档、大概思路吗</h2><p>MavonEditor 是一个基于 Vue 的 Markdown 编辑器。它提供了对 Markdown 语法的支持，使用户可以在应用中编写和预览 Markdown 内容。主要解决的问题包括：</p><ul><li><strong>Markdown 编辑</strong> ：用户可以使用 Markdown 语法来撰写内容，并实时预览结果。</li><li><strong>语法高亮</strong> ：支持多种编程语言的语法高亮显示。</li><li><strong>插件支持</strong> ：MavonEditor 提供了扩展的接口，允许开发者根据需求进行功能的扩展</li></ul><h2 id="_14-项目中用nodejs主要是处理什么-是自己写了一个服务接口吗" tabindex="-1"><a class="header-anchor" href="#_14-项目中用nodejs主要是处理什么-是自己写了一个服务接口吗" aria-hidden="true">#</a> 14 项目中用nodejs主要是处理什么，是自己写了一个服务接口吗</h2><p>数据校验、处理、存储</p><h2 id="_15-登录的实现流程思路" tabindex="-1"><a class="header-anchor" href="#_15-登录的实现流程思路" aria-hidden="true">#</a> 15 登录的实现流程思路</h2><ol><li><strong>用户输入凭据</strong> ：用户输入用户名和密码。</li><li><strong>发送请求</strong> ：前端将用户输入的凭据发送到服务器。</li><li><strong>服务器验证</strong> ：服务器验证用户名和密码是否正确。</li><li><strong>生成 token</strong> ：验证成功后，服务器生成一个 JWT（JSON Web Token）或其他形式的 token，并将其返回给客户端。</li><li><strong>存储 token</strong> ：前端将 token 存储在 <code>localStorage</code>、<code>sessionStorage</code> 或 <code>cookie</code> 中。</li><li><strong>后续请求带上 token</strong> ：前端在后续的 API 请求中将 token 附加到请求头中，以表明用户的身份。</li><li><strong>服务器验证 token</strong> ：服务器在接收到请求时验证 token 的有效性，如果 token 有效，则处理请求，否则返回错误。</li></ol><h2 id="_16-登录是一次接口调用-登录成功后返回成功态-这个成功态是怎么保持在后续的请求中" tabindex="-1"><a class="header-anchor" href="#_16-登录是一次接口调用-登录成功后返回成功态-这个成功态是怎么保持在后续的请求中" aria-hidden="true">#</a> 16 登录是一次接口调用，登录成功后返回成功态，这个成功态是怎么保持在后续的请求中</h2><p>登录成功后，前端通常会接收到服务器返回的 token。这个 token 可以存储在 <code>localStorage</code>、<code>sessionStorage</code> 或 <code>cookie</code> 中。每次发送 API 请求时，前端会在请求头中附加 token，以验证用户身份。</p><h2 id="_17-token在前端如何存储" tabindex="-1"><a class="header-anchor" href="#_17-token在前端如何存储" aria-hidden="true">#</a> 17 token在前端如何存储</h2><p>sessionStorage</p><p>常见的 token 存储方式包括：</p><ul><li><strong><code>localStorage</code></strong> ：token 可以跨页面刷新，并且在浏览器关闭后仍然存在，适合用于需要长时间保持登录状态的场景。</li><li><strong><code>sessionStorage</code></strong> ：token 仅在当前会话（浏览器窗口或标签页）中有效，浏览器关闭后即被清除，适合用于需要短期登录的场景。</li><li><strong><code>cookie</code></strong> ：可以设置 cookie 的有效期和作用域，适用于需要与服务器共享存储的场景，可以通过 HTTP-only 和 Secure 标志增强安全性</li></ul><h2 id="_18-退出登录操作流程" tabindex="-1"><a class="header-anchor" href="#_18-退出登录操作流程" aria-hidden="true">#</a> 18 退出登录操作流程</h2><ul><li><strong>清除 token</strong> ：从 <code>localStorage</code>、<code>sessionStorage</code> 或 <code>cookie</code> 中移除 token。</li><li><strong>通知服务器</strong> （可选）：发送请求给服务器，通知用户退出登录，以便服务器可以清除会话或做其他处理。</li><li><strong>重定向到登录页</strong> ：通常会将用户重定向到登录页面</li></ul><h2 id="_19-这个过程会调用接口吗" tabindex="-1"><a class="header-anchor" href="#_19-这个过程会调用接口吗" aria-hidden="true">#</a> 19 这个过程会调用接口吗</h2><p>是否调用接口取决于具体实现。一般来说，前端清除 token 即可完成退出登录，但在某些场景下，前端可能需要通知服务器以便服务器清除会话或其他相关数据，这种情况下会调用接口。</p><h2 id="_20-token有在服务侧进行存储吗" tabindex="-1"><a class="header-anchor" href="#_20-token有在服务侧进行存储吗" aria-hidden="true">#</a> 20 token有在服务侧进行存储吗</h2><p>没有</p><p>（通常情况下，token 是不在服务端存储的。服务端通过验证 token 的签名和 payload 来验证其有效性。但是，在某些安全要求较高的场景下，服务端可能会将 token 存储在数据库中，以便可以主动撤销或失效 token。）</p><h2 id="_21-token如何关联用户信息" tabindex="-1"><a class="header-anchor" href="#_21-token如何关联用户信息" aria-hidden="true">#</a> 21 token如何关联用户信息</h2><p>express-jwt解析token拿到token中携带的用户信息</p><p>（在生成 token 时，服务器通常会将用户的标识（如用户 ID）编码到 token 的 payload 部分。前端携带 token 发起请求时，服务器会解析 token，从中提取出用户标识，然后在数据库中查找对应的用户信息。）</p><h2 id="_22-unity项目中做了哪些工作" tabindex="-1"><a class="header-anchor" href="#_22-unity项目中做了哪些工作" aria-hidden="true">#</a> 22 unity项目中做了哪些工作</h2><h2 id="_23-算法相关有学过吗-简单描述一下冒泡排序" tabindex="-1"><a class="header-anchor" href="#_23-算法相关有学过吗-简单描述一下冒泡排序" aria-hidden="true">#</a> 23 算法相关有学过吗，简单描述一下冒泡排序</h2><p>相邻两个数之间比较，更大的数放后面</p><h2 id="_24-移动端布局和web端布局的差异" tabindex="-1"><a class="header-anchor" href="#_24-移动端布局和web端布局的差异" aria-hidden="true">#</a> 24 移动端布局和web端布局的差异</h2><p>移动端布局：单栏布局，隐藏和折叠</p><p>web端布局：多列布局</p><h2 id="_25-休息时间有自己学前端相关的东西吗-会看什么东西、谁的博客等" tabindex="-1"><a class="header-anchor" href="#_25-休息时间有自己学前端相关的东西吗-会看什么东西、谁的博客等" aria-hidden="true">#</a> 25 休息时间有自己学前端相关的东西吗，会看什么东西、谁的博客等</h2><h2 id="_26-对你印象最深刻的一件事-有什么启发" tabindex="-1"><a class="header-anchor" href="#_26-对你印象最深刻的一件事-有什么启发" aria-hidden="true">#</a> 26 对你印象最深刻的一件事，有什么启发</h2><p>查找源码解决问题</p><h2 id="_27-最近有进行复盘和总结吗" tabindex="-1"><a class="header-anchor" href="#_27-最近有进行复盘和总结吗" aria-hidden="true">#</a> 27 最近有进行复盘和总结吗</h2><p>每天总结工作内容和收获</p><h2 id="_28-比较有成就感的事-说一个具体的示例" tabindex="-1"><a class="header-anchor" href="#_28-比较有成就感的事-说一个具体的示例" aria-hidden="true">#</a> 28 比较有成就感的事，说一个具体的示例</h2><p>利用fabric完成二维轨道展示</p><h2 id="_29-个人规划" tabindex="-1"><a class="header-anchor" href="#_29-个人规划" aria-hidden="true">#</a> 29 个人规划</h2><p>深度：前端知识深入掌握</p><p>广度：大前端、产品方向了解学习</p><h2 id="_30-为什么选择前端方向进行发展" tabindex="-1"><a class="header-anchor" href="#_30-为什么选择前端方向进行发展" aria-hidden="true">#</a> 30 为什么选择前端方向进行发展</h2><p>课题组安排+前端有即时成果</p><h2 id="_31-反问" tabindex="-1"><a class="header-anchor" href="#_31-反问" aria-hidden="true">#</a> 31 反问</h2><p>技术栈：react</p><p>业务方向：c端产品，虚拟人平台，主要功能有离线视频生产、虚拟人做视频、文本合成语音，提供虚拟人交互平台作为解决方案</p>`,75),r=[t];function i(c,d){return a(),e("div",null,r)}const u=n(o,[["render",i],["__file","kedaxunfei1.html.vue"]]);export{u as default};