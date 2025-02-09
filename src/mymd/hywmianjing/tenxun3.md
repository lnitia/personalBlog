---
icon: list
date: 2024-07-18
category:
  - 面经
order: 10
excerpt: <p>腾讯三面</p>
editLink: false
article: false
---
# 腾讯三面

## 1. websocket

### 1.1 传输协议

WebSocket 是基于Http 协议的改进，Http 为无状态协议，基于短连接，需要频繁的发起请求，第二 Http 只能客户端发起请求，服务端无法主动请求。

WebSocket 是基于TCP/IP协议，独立于HTTP协议的通信协议。

WebSocket 是双向通讯，有状态，客户端一（多）个与服务端一（多）双向实时响应

WebSocket 是应用在浏览器的 Socket （是 Socket 模型接口的实现），Socket 是一个网络通信接口 （通信规范）

WebSocket协议端口是80

WebSocket SSL协议端口是443

***WebSocket协议不受同源策略影响。***

### 1.2 wss和ws

加密过程：

- 客户端发起一个https的请求，把自身支持的一系列密钥算法发送给服务端
- 服务端选出一种加密算法和HASH算法，以证书的形式返回给客户端。
- 客户端收到服务端响应的证书后，浏览器会生成一串随机密码，然后用证书中的公钥加密。把用 `随机数密码`加密 “握手消息+握手消息HASH值(签名)”和用公钥加密的随机密码 一起发送给服务端
- 服务端拿到客户端传来的密文，用自己的私钥来解密，获取随机密码，再用随机数密码 解密 握手消息与HASH值，并与传过来的HASH值做对比确认是否一致。

### 1.3 何时断开

当刷新页面时，WebSocket 连接会被断开。这是因为刷新页面会重新加载整个页面，包括关闭所有正在运行的 WebSocket 连接，可在页面的 onload 事件中重新建立连接。

另外，有些浏览器可能会在刷新页面时缓存 WebSocket 连接，以便在页面加载完成后快速重新建立连接。但是，这可能取决于浏览器的版本和设置。

离开页面websocket就会自动断开=》在组件销毁时断开（在vue destroy生命周期里面调用 websock.close() 手动关闭）、路由切换时断开（ this.$router.afterEach）

### 1.4 断线重连和心跳机制

心跳机制：在客户端连接成功的回调onopen中即开启心跳。心跳处理函数内部使用定时器延时触发向服务端发送消息的方法，待服务器将消息返回证明是连线成功状态下，继续调用心跳检测方法。

断线重连：若某时间段内客户端发送了消息，而服务端未返回，则认定为断线；这个时候会触发到websocket中的onclose事件，需要重新连接服务（每隔一段时间重新new一个websoket实例的过程）

### 1.5 websocket一对一匹配

在WebSocket传递消息的**Session中有SessionId**可以作为客户端标识，但是并不太适合业务的自定义需求，所以客户端传参需要先定义客户端唯一标识UID，先将**UID使用时间戳生成**。

## 2. 快速排序详细

### 2.1 稳定不稳定（平均nlogn）

快速排序的性能高度依赖于你**选择的基准值**。

最坏为O（n2）：第一个元素用作基准值，且要处理的数组是有序的

最好为O（nlogn）：调用栈的高度为O(log n)，整个算法需要的时间为O(nlog n)

平均为O（nlogn）

### 2.2 快速排序一般优于归并排序

归并排序和快速排序的时间复杂度都是 O(nlogn)，但是通常比其他排序算法快得多，**因为它在原地运行，而不需要创建任何辅助数组来保存临时值**。分配和释放辅助数组所需的时间是显而易见的。

但是在链表时，快速排序在链接列表中仍然非常快。合并排序（链表算法不需要任何额外的辅助存储空间）往往更快，因为它更均匀地将列表分成两半，并且每次执行合并所做的工作比执行分区步骤所做的工作更少。

## 3. 200亿大小的数组选取最大100个数

### 3.1 Top K（分治+小顶堆）

在海量乱序数据中找到前K个数据。例如在海量搜索结果中找到权重最高的前K个结果。

问题：在10亿行浮点数的文件中找到最大的前100个数字。

**思路一：直接排序**

将数据全部排序后取最后100个数。

时间复杂度O（nlogn），空间复杂度10亿*4字节==4GB，需要将数据全部加载到内存中。

**思路二：局部淘汰法**

使用一个数组存储文件前100个浮点数，并排好序，记为序列L。遍历文件中剩余的数字，如果比序列L中最小值还要小则直接丢弃，否则通过插入排序的方式插入序列L并删掉最小数，最终得到的序列L就是前100大的数。

时间复杂度O（n），空间复杂度O（100）

**思路三：快速排序**

以数组最后一个元素作为基准值，不断排序。计算 `[mid, right]`数组长度L

时间复杂度O（nlogn），空间复杂度10亿=》4gb

**思路四：分治法**

将数据分散成多份，通过多台机器分布式运算或者多线程并发计算的方式取得每份数据的Top K，然后汇总结果。

可以解决快速排序等思路中对计算机内存要求较大的问题。

**思路五：小顶堆**

取文件中前K个数在内存中维护一个长度为K的小顶堆，然后从文件中挨个读取数字并和堆顶比较，如果比堆顶小则直接丢弃，否则替换堆顶后调整小顶堆。遍历完文件中所有的数字后，小顶堆中的K个数就是所求的Top K。只需要遍历一次文件中的数字，不存在多次读写数据的问题。

时间复杂度，最好情况下文件中前K个数就是Top K，遍历一遍文件即可，时间复杂度为 O（n） ；最坏情况下遍历文件中每个数都需要调整小顶堆，时间复杂度为O（nlogk）。空间复杂度：只需要在内存中维护小顶堆，空间复杂度为 O（100）

**思路六：并行计算（多线程或者分布式运算）**

划分为m份并行执行以下操作：

每份使用小顶堆法选出最大的100个数

二分法查找m个100的数

**实际情况：**

- 是否并发：并发可以显著提高运行速度，单机多核可以使用Hash将数据划分为多份子数据然后多线程并发排序，多机可以使用Hash+Socket方法将数据分发到多台机器上
- 是否有足够内存：如果机器内存足够可以直接在内存中处理即可，如果机器内存不足可以将原始文件切分成多个小文件

### 3.2 出现次数最多的k个数字

用hash树记录每个数字出现的频率，转化为在各个数字的频率中找到Top K的问题。

### 3.3 第k个数

快速排序+判断左右数组长度来确定

桶排序

多路并归排序
