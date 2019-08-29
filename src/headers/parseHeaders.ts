import { forEach, trim } from "../utils";

// node忽略其重复项的头
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
];

/**
 *  Parse headers into an object
 * ```js
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 * @param {string} headers 需要解析的Headers
 * @returns {object} 把Header解析为对象
 */
export default (headers: any) => {
    const parsed:any = {};
    let key: any = undefined;
    let val: any = undefined;
    let i: any = undefined;

    if (!headers) return parsed;

    forEach(headers.split('\n'), function parser(line: string) {
        i = line.indexOf(':');
        key = trim(line.substr(0, i)).toLowerCase();
        val = trim(line.substr(i + 1));

        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;

            if (key) {
                if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;

                if (key === 'set-cookie') {
                    parsed[key] = (parsed[key] ? parsed[key] : []).concat([val])
                } else {
                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val
                }
            }
        }
    });
    return parsed
}
