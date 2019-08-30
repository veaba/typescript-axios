# typescript-axios
使用typescript 重写axios


## LICENSE

本仓库在 Axios [MIT license](https://github.com/axios/axios/blob/master/LICENSE) 下修改、使用、学习

## 了解下TS 的泛型

https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Enums.html

## axios官方 的接口声明
> https://github.com/axios/axios/blob/master/index.d.ts


## 特别说明

有些文件可能在新建时候带有idea 创建者信息，并非说明对该代码有那个啥。

## 疑惑

### axios源码中，大量使用具名函数

具名函数：

```js
console.time('具名函数');
var a=[66,99,44].map(function hello(item) {
  return item*2
});
console.info(a);
console.timeEnd('具名函数')

```
不清楚和以下有什么区别：
```js
console.time('匿名函数');
var b =[66,99,44].map(function(item) {
  return item*2
});
console.info(b);
console.timeEnd('匿名函数')

```
而如果使用箭头函数，则为：

```js
console.time('箭头函数');
var c=[66,99,44].map(item=>item*2);
console.info(c);
console.timeEnd('箭头函数');
```

- 具名函数：0.785888671875ms
- 匿名函数: 0.740966796875ms
- 箭头函数: 0.459228515625ms

### 暴露 all/spread 干嘛的？

暴露 all/spread 干嘛的？ [src/index.ts:31](src/index.ts )


## dev

npm install

npm run dev

使用vscode tsc --watch 项目路径


## todo 

- 取消token ,test如果用户配置了这里，似乎在使用setTimeInterval 出现内存过载的问题，以前在开发时候遇到
- let cookies = require('../headers/cookies') // todo 如何让它改成为import？这个module是一个立即执行函数
- todo 后续ts输出成为ts，然后用于deno开发试试2019年8月22日10:47:23

- 为什么webpack 打包.ts 文件为什么空白
- response 丢失了config！！

## 为什么process 这样的结构

而且
Object.prototype.toString.call(process) 
也不是[object process] 
而是 [object process]
```text
const process=
{ nextTick: [Function],
  title: 'browser',
  browser: true,
  env: {},
  argv: [],
  version: '',
  versions: {},
  on: [Function: noop],
  addListener: [Function: noop],
  once: [Function: noop],
  off: [Function: noop],
  removeListener: [Function: noop],
  removeAllListeners: [Function: noop],
  emit: [Function: noop],
  prependListener: [Function: noop],
  prependOnceListener: [Function: noop],
  listeners: [Function],
  binding: [Function],
  cwd: [Function],
  chdir: [Function],
  umask: [Function] }

```

## demo
```js


/* ******************* demo *********************** */
// const axiosIns: any = axios.create({});
//
// console.info(52545);
// // req 拦截器
// axiosIns.interceptors.request.use((req: any) => {
// 	if (!req.url) {
// 		console.info('请检查，url为空：' + req.url);
// 	}
// 	return req;
// }, (err: any) => {
// 	return Promise.reject(err.request);
// });
// // res 拦截器
// axiosIns.interceptors.response.use((res: any) => {
// 	if (res && res.data) {
// 		return Promise.resolve(res.data);
// 	}
// 	return res.data;
// }, (err: any) => {
// 	return Promise.resolve(err.response);
// });
//
//
// axiosIns.get('http://baidu.com')
// 	.then((res: any) => {
// 		console.log('res:', res)
// 	})
// 	.catch((err: any) => {
// 		console.log('err:', err)
// 	});

```

