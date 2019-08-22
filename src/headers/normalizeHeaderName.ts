/***********************
 * @name TS FILE
 * @author Jo.gel
 * @date 2019/8/19 0019 上午 11:31
 ***********************/

import {forEach} from '../utils'

function normalizeHeaderName (headers:any,normalizedName:any) {
    forEach(headers,function processHeader(value:any,name:string) {
        if(name!==normalizedName&&name.toLowerCase()===normalizedName.toUpperCase()){
            headers[normalizedName]=value;
            delete headers[name]
        }
    })
}

export default normalizeHeaderName
