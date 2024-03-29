import { isStandardBrowserEnv } from '../utils'
import { isString } from 'util';
export default (
    isStandardBrowserEnv() ?

    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
        const msie=/(msie|trident)/i.test(navigator.userAgent);
        const urlParsingNode= document.createElement('a');
        let originURL:any=undefined;
        /**
         * @desc 解析url
         *
         */
        function resolveURL(url:string){
            let href=url;
            if(msie){
                // IE需要设置两次属性来规范化属性
                urlParsingNode.setAttribute('href',href);
                href=urlParsingNode.href
            }

            urlParsingNode.setAttribute('href',href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href:urlParsingNode.href,
                protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,''):'',
                host:urlParsingNode.host,
                search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,''):'',
                hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,''):'',
                hostname:urlParsingNode.hostname,
                port:urlParsingNode.port,
                pathname:(urlParsingNode.pathname.charAt(0)==='/')?urlParsingNode.pathname:'/'+urlParsingNode.pathname
            }
        }
        originURL=resolveURL(window.location.href);

        /**
         * @desc 确定URL是否与当前位置共享同一源
         * @param {string} requestURL
         * @returns {boolean}
         *
         */
        return function isURLSameOrigin(requestURL?:string) {
            const parsed:any=(isString(requestURL))?resolveURL(requestURL):requestURL;
            return (parsed.protocol===originURL.protocol&&parsed.host===originURL.host)
        }
    })() :
    (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
            return true
        }
    })
)
