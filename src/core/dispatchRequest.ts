/***********************
 * @process
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {Config} from "../interface";
import transformData from './transformData'
import isCancel from '../cancel/isCancel'
import isAbsoluteURL from '../headers/isAbsoluteURL'
import combineURLs from '../headers/combineURLs'
import { forEach } from "../utils";
import defaults from "../defaults";

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

    throwIfCancellationRequested(config);

    // 支持baseURL config
    if(config.baseURL&&!isAbsoluteURL(config.url)){
        config.url=combineURLs(config.baseURL,config.url)
    }

    // 确保headers 存在
    config.headers=config.headers||{};

    // 转换request data
    config.data=transformData(
        config.data,
        config.headers,
        config.transformRequest
    );
    // 扁平化headers
    config.headers={
        ...config.headers.conmon||{},
        ...config.headers[config.method]||{},
        ...config.headers||{}
    };
    // 后期抽离method作为公共变量
    forEach(['delete','get','post','put','patch','common'],(method:string)=>{
        delete config.headers[method]
    });
    // console.info("config:",config);
    // console.info("defaults:",defaults);
    let adapter= config.adapter||defaults.adapter;

    return adapter(config)
    .then((response:any)=>{
        throwIfCancellationRequested(config);
        // 转换数据是不是出了点问题 TODO
        console.info("response11::",response);
        // 转换response Data
        response.data=transformData(
            response.data,
            response.headers,
            config.transfromResponse
        );

        console.info('xxxL:',response);
        return response
    })
    .catch((reason:any)=>{
        if(!isCancel(reason)){
            throwIfCancellationRequested(config);

            // 转换response data
            if(reason&&reason.response){
                reason.response.data=transformData(
                    reason.response.data,
                    reason.response.headers,
                    config.transfromResponse
                )
            }
        }
        return Promise.reject(reason)
    })
}



