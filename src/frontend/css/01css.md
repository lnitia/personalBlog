---
icon: css3
date: 2024-01-04
category:
  - 前端
  - css
tag:
  - 基础
order: 1
excerpt: <p>css基础知识汇总</p>
editLink: false
---
# CSS基础

## 1 CSS简介

1. 主要使用场景：优化网页页面
2. css层叠样式表，标记语言
3. 主要用于设置HTML的文本内容、图片外型、网页布局

## 2 语法规范

1. 规则由选择器和一条或多条声明构成
2. 选择器用于指定CSS样式的HTML标签，花括号是对该对象设置的具体样式
3. 属性和属性值以“键值对”的形式出现

```html
<html>
<head>
    <title>测试</title>
    <style>
        h4 {
            color: cornflowerblue;
        }
    </style>
</head>
<body>
    <h4>你喜欢的食物</h4>
</html>
```

## 3 代码风格

### 3.1 样式格式

1. 紧凑格式
2. 展开格式：一行只写一个属性

### 3.2 样式大小写

一般使用小写

### 3.3 空格规范

1. 属性值前，冒号后面写一个空格
2. 选择器和大括号前写一个空格

## 4 选择器

### 4.1 基础选择器

#### 4.1.1 标签选择器

1. HTML标签名作为选择器
2. 会对所有该标签下的内容进行设定

#### 4.1.2 类选择器

1. 语法标准

```html
<style>
    .red {
        color = red；
    }
</style>
<div class=“red”>想要变红色的文字</div>
```

2. 用class属性进行选择
3. 可以选择一个或者某几个标签
4. 不能用标签的名字选为类名
5. 长类名用-连接
6. 一个标签可以使用多个类名，多个类名之间用空格隔开

#### 4.1.3 id选择器

1. 通过#定义id，以id属性选择
2. 语法标准

```html
<style>
    #red {
        color = red；
    }
</style>
<div id=“red”>想要变红色的文字</div>
```

3. 只能调用一次，具有唯一性

#### 4.1.4 通配符选择器

1. 用*，表示选取页面所有标签
2. 语法标准

```html
<style>
    * {
        color = red；
    }
</style>
<div>想要变红色的文字</div>
```

3. 通配符选择器不需要调用

### 4.2 复合选择器

把基础选择器进行组合形成的 ![复合选择器总结.jpg](https://i.loli.net/2020/11/30/ADSCtpy9XRWmGuv.jpg)

#### 4.2.1 后代选择器

1. 又叫包含选择器，只能选择后代
2. 语法：父类 后代 {样式说明}
3. 后代和父类用空格分开
4. 最终选择的是子类
5. 后代可以是子类也可以是子类的子类
6. 两个都可以是任意的基础选择器

```html
<style>
    ul.nav li a {
        color: red;
    }
</style>
```

#### 4.2.2 子选择器

1. 又称子元素选择器，只能选择某元素最近一级子代
2. 语法：父类>子类 {样式说明}

```html
<style>
    ul.nav>a {
        color: red;
    }
</style>
```

#### 4.2.3 并集选择器

1. 选择多组标签，同时定义相同的样式，用于集体声明
2. 语法：用逗号分隔
3. 任何形式的选择器都可以作为并集选择器的一部分

#### 4.2.4 伪类选择器

1. 像某些标签添加特殊效果：比如给连接添加特殊效果
2. 语法：用冒号表示

##### 链接伪类

1. `a:link` 选择所有未访问的连接
2. `a:visited` 选择所有已访问的连接
3. `a:hover` 选择鼠标指针位于其上的连接
4. `a:active` 选择活动连接（鼠标按下未弹起的连接）
5. 为了确保能够生效，必须使用LVHA的顺序写
6. 浏览器中a有固定样式，要改变必须用a来设定

##### ：focus伪类选择

1. 用于获取光标所在的表单元素
2. 语法 `input:focus{样式说明}`

## 5 字体属性

### 5.1 字体系列

1. 语法标准

```html
<style>
    div {
        font-family: "Microsoft Yahei"；
    }
</style>
<div>想要变微软雅黑的文字</div>
```

2. 多个字体之间用空格隔开
3. 一个字体有空格时，最好用“”框起来
4. 多个字体的作用是前面的字体找不到的时候寻找下一个字体

### 5.2 字体大小

1. `{font-size: 20px}`
2. 标题标签比较特殊，需要单独指定文字大小

### 5.3 字体粗细

1. `{font-weight :normal/400}`
2. 正常=normal=400
3. 加粗=bold=700
4. 数字在100-900里选

### 5.4 文字样式

1. `{font-style: italic}`
2. italic: 倾斜
3. normal：正常

### 5.5 字体复合属性

1. `{font: font-style font-weight font-size/line-height font-family}`
2. 顺序有要求，不需要的属性可以省略，但是必须保留font-size和font-family ![字体属性总结.png](https://i.loli.net/2020/11/27/EoWxsXwkpaSRbJm.png)

## 6 文本属性

定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等

### 6.1 文本颜色

1. 语法

```css
div{
    color: red;
}
```

2. 属性内容
   * 预设值（red）
   * 16进制数：#+6个数字
   * rgba值

### 6.2 对齐文本

1. text-align属性用于设置元素内文本内容的水平对齐方式
2. 语法

```css
div{
    text-align: center;
}
```

### 6.3 装饰文本

1. text-decoration属性规定添加到文本的修饰，可以给文本添加下划线、删除线、上划线等
2. 语法

```css
div{
    text-decoration: underline;
}
```

3. 属性内容
   * none：默认，没有装饰线
   * underline：下划线
   * overline：上划线
   * line-through：删除线

### 6.4 文本缩进

1. text-indent属性用来指定文本首行缩进
2. 语法

```css
div{
    text-indent: 2em;
}
```

3. em是一个相对尺寸，当前元素一个文字大小的距离

### 6.5 行间距

1. line-height属性用于设置行高
2. 语法

```css
div{
    line-height: 2em;
}
```

3. 行高=上间距+文本高度+下间距

![文本属性总结.jpg](https://i.loli.net/2020/11/29/VvieGfpDOP4wEAt.jpg)

## 7 引入方式

### 7.1 行内样式表（行内式）

1. 在标签内部写上style属性
2. 语法 `<div style="color: red"></div>`
3. 一定要是双引号，写法要符合CSS

### 7.2 内部样式表（嵌入式）

1. css写入html内部，写在< style>标签里
2. 理论上< style>可以放在任何地方，但一般放在head里
3. 可以控制整个页面
4. 代码结构清晰，但并没有完全分离

### 7.3 外部样式表

1. 样式单独写到CSS文件中，HTML引用CSS文件
2. 在HTML页面中，使用link标签引入
3. 语法 `<link rel="stylesheet" href="css文件路径">`

## 8 Emmet语法

### 8.1 快速生成CSS

1. 简写+tab

### 8.2 快速格式化代码

1. shift+alt+f

## 9 元素显示模式

1. 元素显示模式：标签以什么方式显示 ![元素显示模式总结.jpg](https://i.loli.net/2020/11/30/FujXR23vVxbSi9p.jpg)

### 9.1 块元素

1. 典型块元素：< div> < h1>
2. 独占一行
3. 宽度、高度、内外边距都可以控制
4. 宽度默认是父级的100%
5. 是一个容器及盒子，里面可以放行内元素或者块级元素
6. 文字类元素内不能使用块元素

### 9.1.1 行内元素

1. 典型行内元素：< a> < span>
2. 相邻行内元素在一行上，一行显示多个
3. 宽高设置是无效的
4. 宽度默认是本身内容的宽度
5. 行内元素不能放块元素
6. 链接里不能再放链接
7. 链接可以放块元素

### 9.1.2 行内块元素

1. 特殊标签： < img/> < input/> < td>
2. 相邻行内块元素在一行上，之间会有空白间隙，一行可以显示多个
3. 默认宽度是本身内容的宽度
4. 宽度、高度、内外边距都可以控制

### 9.1.3 元素显示模式的转换

1. 转换成块元素 `display:block;`
2. 转换成行内元素 `display:inline;`
3. 转换成行内块元素 `display:inline-block;`

## 10 背景

通过CSS背景属性，可以给页面元素添加背景样式 ![背景总结.jpg](https://i.loli.net/2020/12/08/oHEUbfjnd18iMYy.jpg)

### 10.1 背景颜色

1. 语法 `background-color: 颜色值;`
2. 默认值：transparent（透明）

### 10.2 背景颜色线性渐变

1. CSS3新增属性
2. 语法 `background: -浏览器私有前缀-linear-gradient(起始方向,颜色1,颜色2,....)`
3. 必须添加浏览器私有前缀

### 10.3 背景图片

1. 实际开发常见于logo或者一些装饰性的小图片或者超大的背景图片
2. 优点是非常便于控制位置
3. 语法 `background-image : none/url();`

### 10.4 背景平铺

1. 语法 `background-repeat: repeat/no-repeat/repeat-x/repeat-y;`
2. 默认情况是repeat
3. 背景颜色和背景图片可以同时添加，背景颜色位于最下层

### 10.5 背景图片位置

1. 语法 `background-position: x y;`
2. x,y都可以使用方位名词和精确单位
3. 方位名词
   * top
   * center
   * bottom
   * left
   * right
4. 两者都是方位名词，两个名词的顺序无关
5. 只指定一个方位名词，另一个默认为center
6. 精确单位第一个是x坐标，第二个是y坐标，顺序不能替换
7. 如果只指定一个精确单位，一定是x，垂直默认居中
8. 参数可以是混合单位。第一个是x坐标，第二个是y坐标，顺序不能替换

### 10.6 背景附着

1. 设置背景图片是固定还是随着页面其余部分滚动
2. 语法 `background-attachment: scroll/fixed;`

### 10.7 背景复合写法

1. 约定顺序：颜色+地址+平铺+滚动+位置
2. 语法 `background: transparent url() repeat fixed top;`

### 10.8 背景色半透明

1. 语法 `background: rgba(0,0,0,0.3)`
2. alpha透明度，0-1之间
3. 习惯性把0.3中的0去掉
4. 只是设置背景色半透明，对盒子里的内容没有影响

## 11 CSS三大特性

### 11.1 层叠性

1. 相同选择器设置相同的样式，后面的会覆盖前面的
2. 冲突，后者覆盖
3. 不冲突，不层叠

### 11.2 继承性

1. 子标签会集成父标签里的样式
2. 子元素可以集成父元素的样式（text-,font-,line-以及color属性）

### 11.3 优先级

1. 选择器相同，则执行层叠性
2. 选择器不同，按权重大小 ![选择器权重一览.jpg](https://i.loli.net/2020/12/08/2D6LouejckKPaGz.jpg)
3. 权重是4组数字组成，不会进位
4. 复合选择器需要权重叠加

## 12 盒子模型

### 12.1 border边框

1. 由边框宽度、边框样式、边框颜色组成
2. `border : border-width // border-style // border-color`
3. 边框样式
   * solid：实线边框
   * dashed：虚线边框
   * dotted：点线边框
4. 边框复合写法 `border: 1px solid red;`没有编写顺序要求
5. 边框分开编辑 `border-top`编辑上边框
6. 表格边框合并 `border-collapse:collapse;`
   相邻表格边框合并在一起
   只对table相关
7. 边框会影响盒子实际大小
   盒子的实际大小 = 盒子高/宽 + 2*边框宽度 + padding

### 12.1.1 content内容

装文字、图片、盒子

### 12.1.2 padding内边距

1. 设置盒子边框和内容之间的距离
2. `padding-top // padding-bottom // padding-left // padding-right`
3. 内边距复合写法 ![内边距复合写法规律.jpg](https://i.loli.net/2020/12/09/OFIypx8LNCKAouR.jpg)
4. 内边距会影响盒子实际大小
   盒子的实际大小 = 盒子高/宽 + 2*边框宽度 + 各部分padding
5. 如果盒子没有指定宽度，是继承的父级的宽度，加padding值的时候不会撑大盒子

### 12.1.3 margin外边距

1. 设置盒子之间的距离
2. `margin-top // margin-bottom // margin-left // margin-right`
3. 外边距复合写法
   与内边距一致
4. 块级盒子水平居中:盒子设置宽度，左右外边距设置为auto `margin: 0 auto`
5. 行内元素、行内块元素居中：给父级添加 `text-align: center;`
6. 嵌套关系中父子元素中的父元素会取两者最大外边距，解决方法：
   * 父元素定义上边框
   * 父元素定义上内边距
   * 父元素添加 `overflow: hidden;`
7. 浏览器中会设置初始内外边距建议清除

```css
* {
    padding: 0;
    margin: 0;
}
```

### 12.1.4 圆角边框

1. 语法 `border-radius: 圆角半径;`
2. 参数可以用精确数和百分比
3. 参数可以写四个，从左上角顺时针旋转
4. 可以指定特定角 `border-top-left-radius: 圆角半径`

### 12.1.5 盒子阴影

1. 语法格式 `box-shadow: h-shadow v-shadow blur spread color inset`
2. 参数含义 ![参数含义.jpg](https://i.loli.net/2020/12/12/21DkEKJ5fuzeYsh.jpg)
3. 只要前两个参数是必须写的
4. 影子不占空间

## 13 浮动

1. 浮动可以改变标签默认的排列方式
2. 多个块级元素横向排列用浮动

### 13.1 浮动语法

`选择器 { float: none|left|right;}`

### 13.2 浮动特性

1. 脱标
   * 浮动的元素在标准流中不占据位置
   * 浮动元素和标准流的元素不在一个图层上
2. 一行显示并且顶部对齐
   * 浮动的元素互相贴在一起，不会有缝隙
   * 父级宽度装不下时，另起一行对齐
3. 具有行内块元素的特性

### 13.3 浮动布局注意点

1. 浮动和标准流的父元素一起使用
2. 一个元素浮动了，理论上兄弟元素也都应该浮动
3. 浮动的盒子只会影响浮动盒子后面的标准流，不会影响前面的标准流

### 13.4 清除浮动

1. 父盒子无法设置高度的时候需要清除浮动
2. 语法 `选择器 {clear: left|right|both}`
3. 清除浮动的方法

   * 额外标签法：在最后一个浮动元素后写一个空标签，设置清除浮动
     新标签必须是块级元素
   * 父元素添加overflow：属性设置hidden|auto|scroll
     无法显示溢出的部分
   * :after伪元素法：

   ```css
   .clearfix:after {
       content: "";
       display: block;
       height: 0;
       clear: both;
       visibility: hidden;
   }
   ```

   * 双微元素清除浮动

   ```css
   .clearfix:before,.clearfix:after {
       content: "";
       display: table;
       height: 0;
   }
   .clearfix:after {
       clear: both;
   }
   .clearfix {
       *zoom: 1;
   }
   ```

## 14 书写顺序

1. 布局定位属性：display|position|float|clear|visibility|overflow
2. 自身属性：width|height|margin|padding|border|background
3. 文本属性：color|font|text-decoration|text-align|vertical-align|white-space|break-word
4. 其他属性（CSS3）：content|cursor|border-radius|box-shadow|background

## 15 定位

### 15.1 定位组成

1. 定位：将盒子定在某一个位置，所以定位也是在摆放盒子，按照定位的方式移动盒子
2. 定位 = 定位模式 + 边偏移
3. 定位模式：用于指定一个元素在文档中的定位方式
4. 边偏移：决定该元素的最终位置

### 15.2 定位模式

通过CSS的position属性来设置

#### 15.2.1 static静态定位

*仅作了解*

1. 默认定位方式，无定位的意思
2. 静态定位按照标准流摆放位置，没有边偏移

#### 15.2.2 relative相对定位

1. 相对定位是元素在移动位置的时候，是相对于它原来的位置来说的
2. 语法 `选择器 { position: relative;}`
3. 原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待
4. 不脱标，继续保持原来位置
5. 主要的作用是限制绝对定位

#### 15.2.3 absolute绝对定位

*重要*

1. 绝对定位是元素在移动位置的时候，是相对于它祖先元素来说的
2. 语法 `选择器 { position: absolute;}`
3. 如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位
4. 如果祖先有定位，则以最近一级的有定位祖先元素为参考点移动位置
5. 绝对定位不再占有原来的位置，脱离标准流

#### 15.2.4 fixed固定定位

*重要*

1. 元素固定到浏览器可视区的某个位置
2. 语法 `选择器 { position: fixed;}`
3. 以浏览器的可视窗口为参照点移动，与父级和滚动条没有关系
4. 固定定位不占有原先的位置
5. 技巧：固定在版心右侧位置 `选择器 { position: fixed;left:50%;margin-left:版心宽度的一半}`

#### 15.2.5 sticky粘性定位

*仅作了解*

1. 某些情况是固定定位，某些情况是相对定位
2. 语法 `选择器 { position: sticky;}`
3. 以浏览器可视窗口为参照点移动元素
4. 占有原先的位置
5. 必须添加边偏移中的一个，否则则为相对定位

### 15.3 边偏移

边偏移就是定位盒子移动到最终位置

1. top：顶端偏移量
2. bottom：底部偏移量
3. left：左侧偏移量
4. right：右侧偏移量

### 15.4 子绝父相

1. 子级使用绝对定位，父级则需要使用相对定位
2. 子级使用绝对定位，可以放在父级任何地方，不会影响兄弟
3. 父级需要加定位限制子级位置，且需要占有位置

### 15.5 定位叠放次序

1. 语法 `选择器 { z-index: 1;}`
2. 数值可以是正整数、负整数或者0，默认auto，数值越大，盒子越靠上
3. 如果数值相同，按照书写顺序，后来者居上
4. 数字后面不能加单位
5. 只有定位的盒子才有z-size属性

### 15.6 定位的扩展

1. 绝对定位的盒子居中 `选择器 { position: absolute;left:50%;margin-left:-盒子宽度的一半}` `选择器 { position: absolute;top:50%;margin-top:-盒子高度度的一半}`
2. 定位特殊特性
   * 行内元素添加绝对或者固定定位，可以直接设置高度和宽度
   * 块级元素添加绝对或者固定定位，默认是内容大小
   * 脱标的盒子不会除法外边距塌陷
3. 绝对定位会完全压住盒子
   * 浮动会压住标准流盒子，但不会压住标准流的文字
   * 绝对或者固定定位会压住标准流的文字

## 16 元素的显示与隐藏

### 16.1 display

1. display属性用于设置一个元素如何显示
2. `display:none;`隐藏对象，隐藏后元素不占有原先的位置
3. `display:block;`显示对象；转换为块级元素
4. 搭配JS可以做很多网页特效

### 16.2 visibility

1. visibility属性用于指定一个元素可见还是隐藏
2. `visibility:visible;`元素可见
3. `visibility:hidden;`元素隐藏，隐藏后元素占有原先的位置

### 16.3 overflow

1. overflow属性指定了内容溢出的元素框时的状态
2. `overflow:hidden;`溢出内容隐藏
3. `overflow:scroll;`溢出内容显示滚动条，不溢出的时候也显示滚动条
4. `overflow:auto;`需要的时候添加滚动条
5. 对于定位的盒子要慎用，会切掉框架外的内容

## 17 精灵图

1. 精灵技术：将网页中的一些小背景图像整合到一张大图中，减少服务器的接受和发送请求的次数

### 17.1 精灵图使用

1. 主要针对背景图片使用，把多个小的背景图片整合到一张大图中
2. sprite：精灵图或者雪碧图，集成的大图
3. 通过移动背景图片的方式选择精灵图中的小图，`background-position`
4. 往上往左移动为负值

## 18 字体图标

1. 主要用于显示网页中通用、常用的一些小图标
2. 展示的是一个图标，但本质是文字

### 18.1 字体图标优点

1. 轻量级：一旦加载了，图标会马上渲染出来，减少服务器请求
2. 灵活性
3. 兼容性：支持所有浏览器

### 18.2 字体图标下载

1. [icomoon字体库(opens new window)](https://icomoon.io/)
2. [iconfont字体库(opens new window)](https://www.iconfont.cn/)

### 18.3 字体图标引入

1. 把下载包里面的fonts文件夹放在CSS文件的根目录下
2. 字体声明

```css
@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?p4ssmb');
  src:  url('fonts/icomoon.eot?p4ssmb#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?p4ssmb') format('truetype'),
    url('fonts/icomoon.woff?p4ssmb') format('woff'),
    url('fonts/icomoon.svg?p4ssmb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

### 18.4 字体图标追加

1. 把压缩包里的selection.json重新上传，再下载压缩包替代原文件

## 19 CSS三角

### 19.1 原理

1. 在宽高都为0的盒子设置border时会产生三角形

### 19.2 代码

```css
div {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-left-color: pink;
}
```

### 19.3 定位

1. 子绝父相
2. 要移动border的两倍

## 20 用户界面样式

1. 界面样式：更改用户操作样式

### 20.1 鼠标样式

1. 设置鼠标在对象上时的光标形状
2. 语法 `选择器 {cursor: pointer}` ![常见鼠标样式.jpg](https://i.loli.net/2021/03/06/l8j6G5TQZaEtXWb.jpg)

### 20.2 表单轮廓线

1. 取消表单轮廓线 `outline: none;`

### 20.3 固定文本域

2. 防止拖动文本域 `resize: none;`

## 21 vertical-align

1. 图片和表单的垂直居中
2. 设置元素的垂直对齐方式，只针对行内元素或者行内块元素有效
3. 语法 `vertical-align : 参数`
4. baseline：默认，元素放置在父元素的基线上
5. top：顶线对齐
6. middle：中线对齐
7. bottom：底线对齐

### 21.1 图片底侧空白间隙

1. vertical-align不选择基线对齐
2. 把图片转换成块级元素

## 22 溢出文字省略号显示

### 22.1 单行文本溢出

1. 强制一行内显示文本 `white-space: nowrap;`
2. 超出部分隐藏 `overflow: hidden;`
3. 文字用省略号替代超出的部分 `text-overflow: ellipsis;`

### 22.2 多行文本溢出

1. 有比较大兼容性问题，适合webKit浏览器或移动端

```css
{
    overflow: hidden;
    text-overflow: ellipsis;
    /* 弹性伸缩盒子模型显示 */
    display: -webkit-box;
    /* 限制在一个块元素显示的文本行数 */
    -webkit-line-clamp:2;
    /* 设置或检索伸缩盒对象的子元素排列方式 */
    -webkit-box-orient: vertical;  
}
```

## 23 布局技巧

### 23.1 margin负值运用

1. 解决盒子边框变粗的问题：向左移动使右边的盒子边框压住左边盒子边框
2. `margin-left: -1px;`
3. 在使用这个技巧时，添加hover属性变化，左边的盒子有边框不能展示
4. 添加相对定位
5. `position: relative;`
6. 如果盒子里有定位，则提高盒子的层级
7. `z-index: 1`

### 23.2 文字围绕浮动元素

1. 巧妙应用浮动元素不会压住文字的技巧
2. 图片添加浮动，文字为标准流

## 24 CSS初始化

### 24.1 标签内外边距清零

```css
* {
    margin: 0;
    padding: 0;
}
```

### 24.2 斜体文字不倾斜

```css
em,
i {
    margin: 0;
    padding: 0;
}
```

### 24.3 去掉列表格式

```css
li {
    list-style: none;
}
```

### 24.4 图片初始化

```css
img {
    border: 0;
    vertical-align: middle;
}
```

### 24.5 按钮鼠标样式手

```css
button {
    cursor: pointer;
}
```

### 24.6 链接初始化

```css
a {
    color: #666;
    text-decoration: none;
}
a:hover {
    color:#c81623
}
```

### 24.7 主页面初始化

```css
body {
    /* 文字抗锯齿 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei
    color: #666;
}
```

### 24.8 清除浮动

```css
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0;
}
```

## 25 CSS3新特性

1. 有兼容性问题，ie9+才支持
2. 移动端支持优于PC端

### 25.1 CSS3新增选择器

#### 25.1.1 属性选择器

1. 根据元素特定的属性选择元素 ![属性选择器.jpg](https://i.loli.net/2021/03/15/hxsZJpR3SmcyNr8.jpg)
2. 语法 `标签名[att]`

#### 25.1.2 结构伪类选择器

1. 根据文档结构来选择元素，常用于根据父级选择器里面的子元素 ![结构伪类选择器.jpg](https://i.loli.net/2021/03/15/KHjrG7fevaTNsnM.jpg)
2. nth-child(n)可以选择某个父元素的一个或多个特定的子元素
   * n可以是数字，关键字和公式
   * n如果是数字，就是选择第n个子元素，序号从1开始
   * n可以是关键字：even偶数；odd奇数 `父类选择器 子类选择器:nth-chile(even/odd)`
   * n可以是公式，n是一个从0开始每次+1往后计算的；此处必须是n不能是其他字母
   * 会把父类的所有孩子都标上序号，执行时先看nth-child(n)，再看子类选择器是否匹配
3. nth-of-type(n)会把指定了元素的孩子标上序号，先看子类选择器，再看后面的n

#### 25.1.3 伪元素选择器

1. 利用CSS创建新标签元素，不需要HTML标签，简化HTML结构 ![常见伪元素选择器.jpg](https://i.loli.net/2021/03/16/XIuNozyJB2fRZmt.jpg)
2. before和after创建一个元素，但属于行内元素
3. 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
4. 语法 `element::before{}`
5. 里面必须写content属性，里面写文字内容
6. before在父元素内容的前面创建元素，after在父元素内容的后面插入元素
7. 伪元素选择器和标签选择器一样，权重为1
8. 可以用来清除浮动

### 25.2 CSS3盒子模型

1. CSS3中可以通过box-sizing来指定盒子模型，有两个值：content-box;border-box
2. box-sizing默认是content-box，盒子大小=width+padding+border
3. box-sizing为border-box时，盒子最终大小为width；但有前提：padding+border< width

### 25.3 CSS3滤镜filter

1. filter CSS属性将模糊或颜色偏移等图形效果应用于元素
2. 语法 `filter 函数();`
3. blur()函数模糊处理，数值越大越模糊

### 25.4 CSS3 calc函数

1. calc()函数让声明一些CSS属性值时执行一些计算

### 25.5 CSS3过渡

1. 过渡动画:从一个状态渐渐得过渡到另一个状态
2. 语法 `transition: 要过渡的属性 花费时间 运动曲线 何时开始`
3. 属性：想要变化的css属性，宽度高度 背景颜色 内外边距 要想所有属性直接写all
4. 花费时间：单位是秒，必须写单位
5. 运动曲线：默认是ease
6. 何时开始：单位是秒（必须写单位）可以设置延迟触发时间，默认是0s
7. 谁来变换给谁加transition，不写在:hover里
8. 如果需要多个属性，用逗号分隔

### 25.6 CSS3转换transform

#### 25.6.1 2D转换

1. 2D转换是改变标签在二维平面上的位置和形状的一种技术
2. 同时写的时候要把位移先写

##### 移动：translate

1. 改变元素在页面中的位置
2. 语法 `transform: translate(x,y) |transform: translateX(n)`
3. 定义2D转换中的移动，沿着X和Y轴移动元素
4. 最大优点：不会影响其他元素的位置
5. 百分比单位是相对于自身元素的
6. 对行内标签没有效果

##### 旋转：rotate

1. 让元素在2维平面内顺时针旋转或者逆时针旋转
2. 语法 `transform: rotate(度数)`
3. rotate里面写度数，单位是deg，且不能省略
4. 角度为正，顺时针旋转
5. 默认旋转中心是元素的中心点

##### 设置元素转换中心点

1. 语法 `transform-origin: x y;`
2. 后面的参数x、y要用空格隔开
3. x y默认转换的中心点是元素的中心点（50% 50%）
4. 还可以给x y设置像素或者方位名词

##### 缩放：scale

1. 控制元素的放大还是缩小
2. 语法 `transform: scale(x,y)`
3. x、y用逗号隔开
4. `transform: scale(1,1)`不变，`transform: scale(2,2)`放大一倍
5. 如果只写一个参数则默认两个参数一致
6. 优势：可以设置转换中心点，默认以中心点缩放。而且不影响其他盒子

##### 2D转换综合写法

1. 格式 `transform: translate() rotate() scale()`
2. 顺序会映像转换效果，位移要放在最前面

### 25.7 CSS3动画

1. 先定义动画
2. 再使用动画

#### 25.7.1 keyframes定义动画

1. 语法

```css
@keyframes 动画名称 {
    0% {
        开始的样式
    }
    100%{
        结束的样式
    }
}
```

2. 动画序列
   * 0%是动画开始；100%是动画完成。这中柜子就是动画序列
   * 可以用from to关键字代替0%和100%

#### 25.7.2 元素使用动画

1. 语法 `animation-name:动画名称;animation-duration:持续时间;`
2. 可以添加多个动画用逗号隔开

#### 25.7.3 动画常见属性

1. animation-name：动画名字，必须写
2. animation-duration：动画完成一个周期所需的事件秒或者毫秒，必须写
3. animation-timing-function：规定动画的速度曲线，默认ease
   * ![animation-timing-function值.png](https://i.loli.net/2021/03/31/p89BSVWsI4qU2vu.png)
   * steps就是分几步完成动画
4. animation-delay：规定何时开始，默认0
5. animation-iteration-count：规定动画被播放的次数，默认1；可以选择infinite
6. animation-direction：规定动画是否在下一周期你想播放，默认是normal；alternate逆播放
7. animation-fill-mode：规定动画结束后状态，保持forwards；回到其实位置backwards
8. animation-play-state：规定动画是都正在运行或暂停，默认是running；paused暂停

#### 25.7.4 动画简写属性

1. 语法 `animation:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画开始或结束的状态`

## 26 移动端基础

### 26.1 meta视口标签

1. 语法 `<meta name="viewport" content="width=device-width, user=scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`
2. 属性说明 ![属性说明.png](https://i.loli.net/2021/03/27/pwEM8zuanek1ql6.png)

### 26.2 二倍图

1. 由于视网膜屏技术，设计移动端时要放大2倍来设计，防止模糊
2. 背景缩放background-size：规定背景图像的尺寸
3. 语法 `background-size: 背景图片宽度 背景图片高度;`
4. 只写一个参数是指定的宽度，高度等比例缩放
5. cover把背景图像扩展至足够大，使背景图像完全覆盖背景区域，可能有部分背景图片显示不全
6. contain把图像扩展至最大尺寸，使其宽度和高度完全适应内容区域，可能由部分内容存在空白

## 27 流式布局float、clear和vertical-align属性将失效

### 27.1 flex布局父项常见属性

#### 27.1.1 flex-direction

1. 设置主轴的方向，项目的排列方向
2. 属性值
   * row：默认值，从左到右
   * row-reverse：从右到左
   * column：从上到下
   * column-reverse：从下到上

#### 27.1.2 justify-content

1. 设置主轴上的子元素排列方式
2. 属性值
   * flex-start：默认值，从头部开始
   * flex-end：贴着尾部对齐
   * center：居中对齐
   * space-around：平分剩余空间
   * space-between：先两边贴边再平分剩余空间

#### 27.1.3 flex-warp

1. 设置子元素是否换行
2. flex布局中默认子元素是不换行的，放不下会缩小子元素
3. 属性
   * nowarp：默认，不换行
   * warp：会换行

#### 27.1.4 align-content

1. 设置侧轴上的子元素排列方式（多行）
2. 子项出现换行的情况
3. 属性
   * flex-start：从上到下
   * flex-end：从下到上
   * center：挤在一起居中
   * space-around：子项在册周平分神域空间
   * space-between：梓州在侧周先分布两头，再平分神域空间
   * stretch： 默认值，拉伸

#### 27.1.5 align-items

1. 设置侧轴上的子元素排列方式（单行）
2. 属性
   * flex-start：从上到下
   * flex-end：从下到上
   * center：挤在一起居中
   * stretch： 默认值，拉伸

#### 27.1.6 flex-flow

1. flex-direction和flex-warp的连写
2. 语法 `flex-flow: row warp;`

### 27.2 flex布局子项常见属性

#### 27.2.1 flex属性

1. 定义子项目分配剩余空间，用flex来表示占多少份数
2. 语法 `flex: 份数;`
3. 默认是0

#### 27.2.2 align-self

1. 控制子项自己在侧轴上的排列方式
2. 允许某个项目与其他项目不一样的对其方式

#### 27.2.3 order

1. 定义项目的排列顺序
2. 数值越小，排列越靠前，默认是0

## 28 rem适配布局

### 28.1 rem基础

1. rem是一个相对单位（root em）
2. 其基准是html元素的字体大小

### 28.2 媒体查询

1. 媒体查询（Meida Query）是CSS3新语法
2. 使用@media查询，可以针对不用的媒体类型定义不同的样式
3. @media可以针对不同的屏幕粗存设置不同的样式
4. 重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
5. 语法

```css
@media 媒体类型 关键字 (媒体特性) {
}
```

6. 媒体类型
   * all：用于所有设备
   * print：用于打印机和打印预览
   * screen：用于电脑屏幕，平板电脑，智能手机
7. 关键字
   * and：且
   * not：非
   * only：置顶某个特定媒体类型
8. 媒体特性
   * width：定义输出设备中页面课件区域的宽度
   * min-width：定义输出设备中页面最小可见区域宽度
   * max-width：定义输出设备中页面最大可见区域宽度

### 28.3 媒体查询引入资源

1. 写几套css针对不同的屏幕引入
2. `<link rel="stylesheet" href="#" media="screen and (min-width: 320px)">`

### 28.4 less基础

1. less是CSS的扩展语言，也称为CSS预处理器

#### 28.4.1 less变量

1. 语法 `@变量名:值;`
2. 变量命名规范
   * 必须有@为前缀
   * 不能包含特殊字符串
   * 不能以数字开头
   * 大小写敏感

#### 28.4.2 less嵌套

1. 子元素的样式直接写在父元素里面
2. 伪类、交际选择器在内层选择器前面加&

#### 28.4.3 less运算

1. 任何数字、颜色或者变量都可以参与运算（加减乘除）
2. 除法不能直接使用，需要加括号包含起来
3. 运算符左右必须用空格隔开
4. 两数运算只有一个有单位，以有单位的为准
5. 如果两个数单位不一，最后结果以第一个数的单位为准
6. 颜色也可以运算

## 29 响应式布局

### 29.1 布局容器

1. 根据屏幕宽度确定布局容器大小，布局容器宽度是确定的

```css
.container {
    margin:0 auto;
}
/* 超小屏幕 */
@media screen and (max-width:767px) {
    .container {
        width: 100%;
    }
}
/* 小屏幕 */
@media screen and (min-width:768px) {
    .container {
        width: 750px;
    }
}
/* 中等屏幕 */
@media screen and (min-width:992px) {
    .container {
        width: 970px;
    }
}
/* 大屏幕下 */
@media screen and (min-width:1200px) {
    .container {
        width: 1170px;
    }
}
```

### 29.2 bootstrap使用

#### 29.2.1 创建文件夹结构

1. 复制Bootstrap相关文件夹

#### 29.2.2 创建html骨架结构

#### 29.2.3 引入相关样式文件

`<link rel="stylesheet" href="bootstrap/css/文件名">`

#### 29.2.4 书写内容

1. bootstrap通过类来控制样式
2. 修改样式的时候注意权重问题

### 29.3 ootstrap布局容器

1. bootstrap需要为页面内容和栅格系统包裹一个.container容器
2. container类
   * 响应式布局容器 固定宽度
   * 大屏（>=1200px）宽度定位1170px
   * 中屏（>=992px）宽度定位970px
   * 小屏（>=768px）宽度定位750px
   * 超小屏100%
3. container-fluid类
   * 流式布局容器 百分百宽度
   * 占据全部视口（viewport）的容器
   * 适合于单独做移动端开发

### 29.4 bootstrap栅格系统

1. 将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局
2. bootstrap将container自动分为12列
3. ![QQ截图20210415211806.png](https://i.loli.net/2021/04/15/4ofBlHWK63wsgXh.png)
   * 行（row）必须放在container容器里面
   * 实现列的平均划分需要给列添加类前缀
   * 类前缀意思
     * xs-extra small：超小
     * sm-small：小
     * md-medium：中等
     * lg-large：大
   * 列（column）大于12，多余的列所在的元素江北作为一个整体另起一行排列
   * 每一列默认有左右15像素的padding
   * 可以同事为一列指定对个设备的类名，以便划分不同份数例如 `class="col-md-4 col-sm-6"`

#### 29.4.1 列嵌套

1. 栅格系统内置的栅格系统将内容再次嵌套。可以通过添加一个新的.row元素和一系列.col-sn等元素分割已经存在的列中
2. 列嵌套最好加一个行盒子，这样可以取消父元素的padding

#### 29.4.2 列偏移

1. 使用 `.col-md-offset-份数`类可以将列向右侧偏移

#### 29.4.3 列排序

1. 通过使用 `.col-md-push-份数`和 `.col-md-pull-份数`类很容易改变列的顺序
2. push往右推，pull往左拉

#### 29.4.4 响应式工具

1. 利用媒体查询功能，使用这些工具类可以方便针对不同设备展示或隐藏页面内容 ![响应式工具.png](https://i.loli.net/2021/04/16/oepNdR5r7DTi1hK.png)
