---
icon: html5
date: 2024-01-04
category:
  - 前端
  - html5
tag:
  - 基础
order: 1
excerpt: <p>html基础知识汇总</p>
editLink: false
---
# HTML基础

## 1 语法规范

1. 尖括号
2. 通常是成对出现
3. 标签分成包含和并列关系

## 2 标签

### 2.1 基本结构标签

#### 2.1.1 根标签

`<html> </html>`

#### 2.1.2 头部标签

1. `<head> </head>`
2. 其中必须设置的是标题标签 `<title> </title>`

#### 2.1.3 主体标签

`<body> </body>`

#### 2.1.4 vs code一键生成的骨架标签

```html
<!DOCTYPE html>   <!-- 文档类型声明标签，必须写到页面最前-->
<html lang="en">  <!-- lang语言种类-->
<head>
    <meta charset="UTF-8"> <!-- 字符集-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
</body>
</html>
```

### 2.2 语义标签

#### 2.2.1 标题标签

1. 标题（Heading）是通过< h1> - < h6> 标签来定义的
2. `<h1> 一级标题 </h1>`
3. 使用标题标签后独占一行并加粗

#### 2.2.2 段落标签

`<p>一个段落</p>`

#### 2.2.3 换行标签

1. `<br/>`
2. 单标签
3. 只是另起一行，不会产生段落之间的大间隙

### 2.3 文本格式化

#### 2.3.1 加粗

1. `<strong> </strong>`
2. `<b> </b>`

#### 2.3.2 斜体

1. `<em> </em>`
2. `<i> </i>`

#### 2.3.3 下划线

1. `<del> </del>`
2. `<s></s>`

#### 2.3.4 删除线

1. `<ins> </ins>`
2. `<u> </u>`

### 2.4 盒子标签

#### 2.4.1 div

1. `<div> </div>`
2. 一行只能放一个div

#### 2.4.2 span

1. `<span></span>`
2. 一行可以放很多个

### 2.5 图像标签

`<img src="图像URL"/>`

#### 2.5.1 图像标签属性

1. src：< img>标签的必须属性，用于指定图像文件的路径和文件名
2. alt：替换文本，图片不能显示时显示的文本
3. title：提示文本，鼠标放到图像上显示的文字
4. width：图像宽度像素
5. height：图像高度像素
6. border：图像边框像素

#### 2.5.2 图像路径

##### 相对路径

1. 同一级路径：直接写上文件名
2. 上一级路径：`../`
3. 下一级路径：`/`

##### 绝对路径

1. 本地绝对地址
2. 网络绝对地址

### 2.6 超链接标签

#### 2.6.1 语法格式

1. `<a href="跳转目标" target="目标弹出方式"> </a>`
2. herf：必须属性，指定链接目标地址
3. target：默认为 `_self `当前页面打开，还可以选择 `_blank `在新窗口中打开页面

#### 2.6.2 链接分类

1. 外部链接：herf直接写网络绝对地址
2. 内部链接：herf写本地相对地址
3. 空连接：herf写#
4. 下载链接：herf写文件地址
5. 锚点链接：快速定位到页面的某个位置
   * 链接文本：`<a herf="#two"> </a>`
   * 目标位置标签 `<id="two">`

### 2.7 注释标签

1. `<!-- -->`
2. 快捷键：ctrl + /

### 2.8 特殊字符

[特殊字符汇总(opens new window)](https://blog.csdn.net/weixin_40848638/article/details/83269598)

1. 空格：&nbsp；
2. 小于号：&lt；
3. 大于号：&gt；

### 2.9 表格标签

#### 2.9.1 表格基本语法

1. 定义表格：`<table></table>`
2. 定义行：`<tr></tr>`
3. 定义单元格 `<td></td>`

#### 2.9.2 表头单元格标签

1. `<th></th>`
2. 居中加粗显示

#### 2.9.3 表格属性

1. 不常用，一般用css来设置
2. align：规定表格相对周围元素的对齐方式
3. border：规定边框
4. cellpadding：边沿和内容之间的空白
5. cellspacing：单元格之间的空白距离
6. width：表格宽度

#### 2.9.4 表格结构标签

1. 头部区域标签：`<thead></thead>`
2. 主题区域标签：`<tbody></tbody>`

#### 2.9.5 合并单元格

##### 合并单元格方式

1. 跨行合并：rowapan=“合并单元格个数”
2. 跨列合并：colspan=“合并单元格个数”

##### 目标单元格

1. 跨行：最上侧
2. 跨列：最左侧

### 2.10 列表标签

用于布局网页的

#### 2.10.1 无序列表

1. 无序列表语法格式

```html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
</ul>
```

2. < ul>标签里只能出现< li>标签，不能出现其他内容
3. < li>标签里可以放任何标签，是一个容器
4. 无序列表带有样式属性，实际使用的时候用css设置

#### 2.10.2 有序列表

1. 有序列表语法格式

```html
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
</ol>
```

2. < ol>标签里只能出现< li>标签，不能出现其他内容
3. < li>标签里可以放任何标签，是一个容器
4. 有序列表带有样式属性，实际使用的时候用css设置

#### 2.10.3 自定义列表

1. 自定义列表语法格式

```html
<dl>
    <dt>名词1</dt>
    <dd>名词1解释1</dd>
    <dd>名词1解释1</dd>
</dl>
```

2. < dl>标签里只能出现< dt>、< dd>标签，不能出现其他内容

### 2.11 表单标签

#### 2.11.1 表单域

1. 表单域是包含表单元素的区域，实现用户信息的收集和传递
2. 表单域语法格式

```html
<form action="url地址" method="提交方式" name="表单域名称">
</form>
```

3. 表单域属性
   * action：用于指定接收并处理表单数据的服务器程序的url地址
   * method：get/post，设置表单数据的提交方式
   * name：指定表单的名称

#### 2.11.2 表单控件（表单元素）

##### input输入表单元素

1. 语法规范 `<input type="属性值"/>`
2. input为单标签
3. type属性必须要写
   * text:文本，直接显示
   * password：文本，影藏显示
   * radio：单选按钮，圆的
   * checkbox：多选按钮，方的
   * submit:点击按钮将表单域的元素值送入后台
   * reset：重置表单域里的元素值
   * button：普通按钮，启动js脚本
   * file：文件域按钮，上传文件 ![QQ图片20201125203719.png](https://i.loli.net/2020/11/25/reIfvEMKwmYdVjP.png)
4. name属性 单选按钮的表单元素name属性一致，才能实现多选一
5. value属性 表单元素默认值
6. checked属性 单选按钮和复选框的属性，显示默认勾选
7. maxlength 规定输入字段中的字符最大长度

##### label标签

1. 点击label标签内的文本时，浏览器自动将光标转到对应的表单元素
2. 语法规范

```html
<label for="sex">男</label>
<input type="radio" name="sex" id="sex"/>
```

3. 核心是label标签的for属性与相关元素的id属性相同

##### select下拉表单元素

1. 语法规范

```html
<select>
    <option>选项1</option>
    <option>选项2</option>
</select>
```

2. select里至少包含一个option
3. option里定义selected属性=“selected”默认选定

##### textarea 文本域表单元素

1. 可以定义多行文本输入
2. 语法规范 `<textarea>默认文字</textarea>`
3. cols属性设定一行显示的字数
4. rows属性设定显示多少行

#### 提示信息

## 3 Emmet语法

### 3.1 快速生成HTML

1. 生成标签：直接输入标签名+ tab
2. 生成多个标签：* tab
3. 父子级关系： > tab
4. 兄弟级关系： + tab
5. 带有类名： .
   带有id名字： #
6. 自增符号： $
7. 标签默认文字用{}括起来

## 4 HTML5 标签

### 4.1 HTML5新增语义化标签

1. 头部标签 `<header>`
2. 导航标签 `<nav>`
3. 内容标签 `<article>`
4. 定义文档某个区域 `<section>`
5. 侧边栏标签 `<aside>`
6. 尾部标签 `<footer>`
7. 这种语义化的标签主要是针对搜索引擎
8. 新标签页面中可使用多次

### 4.2 HTML5新增多媒体标签

1. 音频标签 `<audio>`
2. 视频标签 `<video>`

#### 4.2.1 视频标签

1. 只支持三种视频格式：MP4; WebM; Ogg
2. 尽量使用MP4
3. 语法 `<video src="文件地址" controls="controls"></video>`

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    <source src="movie.webm" type="video/webm">
    <object data="movie.mp4" width="320" height="240">
        <embed src="movie.swf" width="320" height="240">
    </object> 
</video>
```

4. 常见属性 ![视频常见属性.jpg](https://i.loli.net/2021/03/09/6bJMcTtvLQrsouz.jpg)

#### 4.2.2 音频标签

1. 只支持三种音频格式：MP3; Wav; Ogg
2. 都支持MP3
3. 语法 `<audio src="文件地址" controls="controls"></audio>`
4. 常见属性 ![音频常见属性.jpg](https://i.loli.net/2021/03/09/8KMULaAo41VZ7Ss.jpg)

### 4.3 HTML新增input类型

![input常见类型.jpg](https://i.loli.net/2021/03/11/x9FTJQz1rdEcnyq.jpg)

### 4.4 HTML新增表单属性

![新增表单属性.jpg](https://i.loli.net/2021/03/11/7n6vgFai32RCPlk.jpg)
