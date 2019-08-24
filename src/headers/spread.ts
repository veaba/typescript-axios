/**
 *
 * @desc 用于调用函数和扩展参数数组的语法结构。
 * 常见的用例 `Function.prototype.apply`
 *
 * ```js
 * function f(x,y,z){}
 * const args=[1,2,3]
 * f.apply(null,args)
 *
 * ```
 * 使用`spread` 重写此例
 *
 * ```js
 * spread(function(x,y,z){})([1,2,3])
 * ```
 * @param {Function} callback
 * @return {Function}
 *
 * */
export default function spread(callback:any){
    return function warp(arr:any) {
        return callback.apply(null,arr)
    }
}
