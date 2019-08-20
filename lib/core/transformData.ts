/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {forEach} from "../utils";

/**
 * @desc 转换请求或响应的数据
 *
 * */
export default function transformData(data:any,headers:any,fns:any){
    forEach(fns,function transform(fn:any) {
        data=fn(data,headers)
    });
    return data
}
