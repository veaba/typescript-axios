/***********************
 * @process todo
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {Config} from "../interface";
import transfromData from './transformData'
import isCancel from '../cancel/isCancel'
import isAbsoluteURL from '../headers/isAbsoluteURL'
import combineURLs from '../headers/combineURLs'
import { forEach } from "../utils";
import defaults from "../default";

/**
 * @desc throws 如果请求cancel，则抛出一个cancel
 * */

function throwIfCancellationRequested(config:Config) {
    if(config.cancelToken){
        config.cancelToken.throwIfRequested()
    }
}


/**
 * @desc 使用配置的适配器将请求分派到服务器。
 * */
export default function dispatchRequest(config:Config) {
    throwIfCancellationRequested(config)

    // 支持baseURL config
    if(config.baseURL&&!isAbsoluteURL(config.url)){
        config.url=combineURLs(config.baseURL,config.url)
    }

    // 确保headers 存在
    config.headers=config.headers||{}

    // 转换request data
    config.data=transfromData(
        config.data,config.headers,config.transformRequest
    )

    // 扁平化headers
    config.headers={
        ...config.headers.conmon||{},
        ...config.headers[config.method]||{},
        ...config.headers||{}
    }
    // TODO 后期抽离method作为公共变量
    forEach(['delete','get','post','put','patch','common'],(method:string)=>{
        delete config.headers[method]
    })

    let adapter= config.adapter||defaults.adapter

    return adapter(config)
    .then((response:any)=>{
        throwIfCancellationRequested(config)

        // 转换response Date
        response.data=transfromData(
            response.data,
            response.headers,
            config.transfromResponse
        )
        return response
    })
    .catch((reason:any)=>{
        if(!isCancel(reason)){
            throwIfCancellationRequested(config)

            // 转换response data
            if(reason&&reason.response){
                reason.response.data=transfromData(
                    reason.response.data,
                    reason.response.headers,
                    config.transfromResponse
                )
            }
        }
        return Promise.reject(reason)
    })
}



