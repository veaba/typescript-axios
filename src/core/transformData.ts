/***********************
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {forEach} from "../utils";

/**
 * @desc 转换请求或响应的数据
 * @param data {Object|String} 要转换的数据
 * @param headers {Array} 请求或响应的头
 * @param fns {Array|Function}单个函数或函数数组
 * @returns * 转换后的数据
 * */
export default function transformData(data:any,headers:any,fns:any){
    forEach(fns,function transform(fn:any) {
        data=fn(data,headers)
    });
    return data
}
