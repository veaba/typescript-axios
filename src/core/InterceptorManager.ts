/***********************
 * @desc  拦截器管理器
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {forEach} from "../utils";

class InterceptorManager  {
    handlers:any[];
    constructor(){
        this.handlers=[]
    }
    use(fulfilled:any,rejected:any){
        this.handlers.push({
            fulfilled,
            rejected
        });
        return this.handlers.length-1
    }
    /**
     * @desc 从堆栈中删除拦截器
     * @param {Number} id 由`返回的ID使用`
     * */
    eject(id:any){
        if(this.handlers[id]) this.handlers[id]=null
    }
    /**
     * 迭代所有注册的拦截器
     * 这种方法对于跳过
     * 可能已成为`null`的拦截器调用`eject`。
     * @param {Function} fn 调用每个拦截器的函数
     * */
    forEach(fn:any){
        forEach(this.handlers,function forEachHandler(h:any) {
            if(h!==null) fn(h)
        })
    }

}
export default InterceptorManager

