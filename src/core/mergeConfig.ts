/***********************
 * @name TS
 * @desc 合并config
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
import {forEach, isObject} from "../utils";

export default function mergeConfig(config1:any,config2:any) {
    config2=config2||{};
    const config:any={};
    forEach(['url','method','params','data'],function valueFromConfig2(prop:string) {
        if(typeof config2[prop]!=='undefined'){
            config[prop]=config2[prop]
        }
    });

    forEach(['headers','auth','proxy'],function mergeDeepProperties(prop:string){
        // test这里使用：解构操作符，需要待验证
        if(isObject(config2[prop])){
            config[prop]={...config1[prop],...config2[prop]}
        }else if(typeof config2[prop]!=='undefined'){
            config[prop]=config2[prop]
        }else if(isObject(config1[prop])){
            config[prop]={...config1[prop]}
        }else if(typeof config1[prop]!=='undefined'){
            config[prop]=config1[prop]
        }
    });

    forEach(['baseURL','transformRequest','transformResponse','paramsSerializer',
        'timeout','withCredentials','adapter','responseType','xsrfCookieName',
        'xsrfHeaderName','onUploadProcess','onDownloadProgress','maxContentLength',
        'validateStatus','maxRedirects','httpAgent','httpsAgent','cancelToken',
        'socketPath'
        ],
        function defaultToConfig2(prop:string){
        if(typeof config2[prop]!=='undefined'){
            config[prop]=config2[prop]
        }else if(typeof config1[prop]!=='undefined'){
            config[prop]=config1[prop]
        }
    });
    return config
}

