import { isStandardBrowserEnv, isNumber, isString } from "../utils";
export default (
    isStandardBrowserEnv() ?

        // 标准浏览器envs支持文档.cookie
        (function standradBroserEnv() {
            return {
                write: function write(name: string, value: string, expires: number, path?: string, domain?: string, secure?: boolean) {
                    const cookie = []
                    cookie.push(name + '=' + encodeURIComponent(value))

                    if(isNumber(expires)){
                        cookie.push('expires='+new Date(expires).toUTCString())// 源码这里是hitoGMTString
                    }

                    if(isString(path)){
                        cookie.push('path='+path)
                    }
                    if(isString(domain)){
                        cookie.push('domain='+domain)
                    }
                    if(secure===true){
                        cookie.push('secure')
                    }
                    document.cookie=cookie.join('; ')
                },
                read:function read(name:string){
                    const match:any=document.cookie.match(new RegExp('(^|;\\s*)('+name+')=([^;]*)'))
                    return (match?decodeURIComponent(match[3]):null)
                },
                remove:function remove(name:string){
                    this.write(name,'',Date.now()-86400000)
                }
            }
        })() :

        // 非标准浏览器env（web workers，react native）缺乏所需的支持。
        (function nonStandradBroserEnv() {
            return {
                write: function write() { },
                read: function read() { return null },
                remove: function remove() { },
            }
        })()
)