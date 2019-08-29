/**
 * @desc Axios core code
 * */

import InterceptorManager from './InterceptorManager'
import {Config,Interceptors,Interceptor} from '../interface'
import mergeConfig from './mergeConfig'
import buildURL from "../headers/buildURL";
import dispatchRequest from './dispatchRequest'
import { throws } from 'assert';
const pkg = require('../../package.json');
/**
 * @desc 创建一个Axios新实例,以es6 class 方式声明
 *
 * */


class Axios {
    defaults: string;
    interceptors: Interceptors;
    constructor(instanceConfig: any) {
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }
    // 保护axios version
    get version(){
        return pkg.version||''
    }
    // 如果尝试去设置，则抛出错误
    set version(val){
        throw "Can't setting the Axios version";
    }

    request(config: Config) {
        config = config || {};


        config = mergeConfig(this.defaults, config);

        console.info('haha:\n',config);

        config.method = config.method ? config.method.toLowerCase() : 'get';//默认get,并转换小写method字段

        // 连接拦截器中间件
        let chain:any= [dispatchRequest,undefined];
        let promise= Promise.resolve(config);




        // 向第一项添加
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor:Interceptor) {
            chain.unshift(interceptor.fulfilled,interceptor.rejected)
        });

        // 向后面添加
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor:Interceptor) {
            chain.push(interceptor.fulfilled,interceptor.rejected)
        });

        console.info("chain:",chain);
        while (chain.length){
            promise=promise.then(chain.shift(),chain.shift())
        }
        return promise
    }

    getUri(config: Config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '')
    }

    delete(url: string, config: any) {
        return this.request({...config, ...{method: 'delete', url}})
    }

    get(url: string, config: any) {
        return this.request({...config, ...{method: 'get', url}})
    }

    head(url: string, config: any) {
        return this.request({...config, ...{method: 'head', url}})
    }

    options(url: string, config: any) {
        return this.request({...config, ...{method: 'options', url}})
    }

    post(url: string, data: any, config: any) {
        return this.request({...config, ...{method: 'post', url, data}})
    }

    put(url: string, data: any, config: any) {
        return this.request({...config, ...{method: 'put', url, data}})
    }

    patch(url: string, data: any, config: any) {
        return this.request({...config, ...{method: 'patch', url, data}})
    }
}


export default Axios
