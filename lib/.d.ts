/**
 * @TODO TODO
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
import { inflate } from "zlib";

export interface AxiosTransformer{
    (data:any,headers?:any):any
}

declare namespace Axios{
    interface defaults {
        headers?:any
        adapter:()=>void
        transformRequest?:AxiosTransformer|AxiosTransformer[]
        transformResponse?:AxiosTransformer|AxiosTransformer[]
        timeout:number
        xsrfCookieName:string
        xsrfHeaderName:string
        maxContentLength:number
        validateStatus:(status:number)=>boolean
    }
    interface options{
        path:string
        method:Methods
        headers:any
        agent:string
        auth:string
        maxRedirects?:any,
        maxBodyLength?:number,
        host?:string,
        hostname?:string
        socketPath?:string
        port?:string|number
    }

    interface config {
        data:string|object,
        url:string,
        params:object
        // responseType,
        // paramsSerializer
        timeout:number
        // withCredentials:boolean
    }
    interface response {
        data:any
    }

    interface request{
        // addEventListener
        // upload
    }
}
export default Axios

