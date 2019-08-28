/**
 * @desc 声明文件 declare namspace XXX{
 *  interface xx:{
 *      x:number,
 *      o:?number
 *  }
 * }
 */

import {
    Methods,

} from "./types";

export interface AxiosTransformer {
    (data: any, headers?: any): any
}

declare namespace struct {
}

interface Defaults {
    headers?: any
    adapter: () => void
    transformRequest?: AxiosTransformer | AxiosTransformer[]
    transformResponse?: AxiosTransformer | AxiosTransformer[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    validateStatus: (status: number) => boolean
}

interface Options {
    path: string
    method: Methods
    headers: any
    agent: string
    auth: string
    maxRedirects?: any,
    maxBodyLength?: number,
    host?: string,
    hostname?: string
    socketPath?: string
    port?: string | number
}

interface Config {
    data: string | object,
    baseURL:string|undefined,
    url: string,
    params: object
    method: string,
    headers:any,
    adapter:any,
    responseType: string,
    paramsSerializer: any,
    transformRequest:any,
    transfromResponse:any,
    timeout: number
    withCredentials: boolean,
    cancelToken?:{
        throwIfRequested:any
    }
}

interface Response {
    data: any,
    headers:any,
}

interface Request {
    // addEventListener
    // upload
}

interface Interceptors {
    request: any,
    response: any
}
interface Interceptor {
    fulfilled:any
    rejected:any
}
interface Executor {
    (fn:Function):void
}

// 实现Axios 类的interface
// 参考 https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html

export {
    Defaults,
    Options,
    Config,
    Response,
    Request,
    Interceptors,
    Interceptor,
    Executor
}

