/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {Config} from "../.d";
import transfromData from './transformData'
import isCancel from '../cancel/isCancel'
import isAbsoluteURL from '../headers/isAbsoluteURL'
import combineURLs from '../headers/combineURLs'

/**
 * @desc throws 如果请求取消，则抛出一个取消
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

}


