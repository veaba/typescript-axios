import {forEach, isArray, isDate, isObject, isURLSearchParams} from "../utils";

function encode(val: string) {
    return encodeURIComponent(val)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}

/**
 * @desc 通过在末尾附加参数来构建URL
 * @param url
 * @param params
 * @param paramsSerializer
 */
export default function buildURL(url: string, params: any, paramsSerializer: any): string {
    if (!params) return url;

    let serializedParams: any = undefined;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params)
    } else if (isURLSearchParams(params)) {
        serializedParams = params.toString()
    } else {
        const parts: string[] = [];
        forEach(params, function serialize(val: any, key: string) {
            if (val === null || typeof val === 'undefined') return;
            if (isArray(val)) {
                key = key + '[]'
            } else {
                val = [val]
            }
            forEach(val, function parseValue(v: any) {
                if (isDate(v)) {
                    v = v.toISOString()
                } else if (isObject(v)) {
                    v = JSON.stringify(v)
                }
                parts.push(encode(key) + '=' + encode(v))
            })
        })
        serializedParams = parts.join('&')
    }
    if (serializedParams) {
        const hashMarkIndex = url.indexOf('#')
        if (hashMarkIndex !== -1) {
            url = url.slice(0, hashMarkIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }

    return url;

}
