/**
 * @desc Axios core code
 * */

import InterceptorManager from './InterceptorManager'
import {Config} from '../.d'
import mergeConfig from './mergeConfig'
import buildURL from "../headers/buildURL";

/**
 * @desc 创建一个Axios新实例,以es6 class 方式声明
 *
 * */


// todo instanceConfig 以interface实现
class Axios {
    defaults: string;
    interceptors: object;

    constructor(instanceConfig: any) {
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    // todo
    request(config: Config) {
        config=mergeConfig(this.defaults,config);
        return buildURL(config.url,config.params,config.paramsSerializer).replace(/^\?/,'')
    }

    // todo
    getUri(config: Config) {

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
