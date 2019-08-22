import Cancel from './Cancel'
import {Executor} from '../interface'
/**
 * @desc `CancelToken`是可用于请求取消操作的对象。
 * @class 
 * @param {Function} executor 执行器函数
 */
class CancelToken {
    promise:any
    constructor(executor:Executor) {
        let resolvePromise:any=undefined
        this.promise=new Promise((resolve:any)=>{
                resolvePromise=resolve
        })

        const token:any=this;

        executor((message:string):any=>{
            // 已请求取消
            if(token.reason) return

            token.reason=new Cancel(message)
            resolvePromise(token.reason)
        })
    }
}

export default CancelToken