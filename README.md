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

## 异或。axios源码中，大量使用具名函数

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
