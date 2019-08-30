/**
 *@desc axios 工具类函数
 *
 */
import isBuffer from 'is-buffer'

/**
 * @desc 判断值是否是数组
 * @param {Object} val
 * @returns {boolean} 是数组,true，否则false
 */
function isArray(val: any):boolean {
    return toString.call(val) === '[object Array]'
}

/**
 * @desc 判断是否是ArrayBuffer
 * @param val
 * @returns 是 则true，否则false
 */

function isArrayBuffer(val: any):boolean {
    return toString.call(val) === '[object ArrayBuffer]'
}

/**
 * @desc 判断是否formData
 */
function isFormData(val: any):boolean {
    return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

/**
 * @desc 判断val是否是ArrayBuffer的视图
 * @param {Object} val
 * @returns {boolean}
 */

function isArrayBufferView(val: any):boolean {
    let result: any;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && (val.buffer instanceof ArrayBuffer)
    }
    return result
}

/**
 * @desc 判断字符串
 * @param {string} val
 * @returns {boolean}
 *
 */
function isString(val: any):boolean {
    return typeof val === 'string'
}

/**
 * @desc 判断是数字类型
 * @returns {boolean}
 */
function isNumber(val: any):boolean {
    return typeof val === 'number'
}

/**
 * @desc 判断是undefined类型
 * @returns {boolean}
 */
function isUndefined(val: any):boolean {
    return typeof val === 'undefined'
}


/**
 * @desc 判断是否是object
 *
 */
function isObject(val: any):boolean {
    return val !== null && typeof val === 'object'
}

/**
 * @desc 判断是Date类型
 * @returns {boolean}
 */
function isDate(val: any):boolean {
    return toString.call(val) === '[object Date]'
}

/**
 * @desc 判断是file 类型
 * @returns {boolean}
 */
function isFile(val: any):boolean {
    return toString.call(val) === '[object File]'
}

/**
 * @desc 判断是blob类型
 * @returns {boolean}
 */
function isBlob(val: any):boolean {
    return toString.call(val) === '[object Blob]'
}

/**
 * @desc 判断是function
 * @returns {boolean}
 */

function isFunction(val: any):boolean {
    return toString.call(val) === '[object Function]'
}

/**
 * @desc 判断stream
 */
function isStream(val: any):boolean {
    return isObject(val) && isFunction(val.pipe)
}

/**
 * @desc 判断是URL Search Params
 *
 */
function isURLSearchParams(val: any):boolean {
    return (typeof URLSearchParams !== 'undefined') && (val instanceof URLSearchParams)
}

/**
 * @desc 删除开始到结束的多余空白
 */

function trim(str: any):string {
    return (str || '').replace(/^\s*/, '').replace(/\s*$/, '')
}

/**
 * @desc 检查是否允许在标准的浏览器上
 */

function isStandardBrowserEnv():boolean {
    if ((typeof navigator !== 'undefined') && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
        return false
    }
    return (typeof window !== 'undefined' && typeof document !== 'undefined')
}

/**
 * @desc 迭代为每个项调用函数的数组或对象。
 * 如果“obj”是一个数组，则调用数组回调，传递每个项的值、索引和完整数组。
 * 如果“obj”是一个对象，则将调用回调来传递每个属性的值、键和完整对象。
 *
 * @param obj 要迭代的对象
 * @param fn 为每个项调用的回调
 *
 */
function forEach(obj:any,fn:any):void{
    if(obj===null||typeof obj==='undefined'){
        return
    }

    // 强制转换数组，如果不是数组的话
    if(typeof obj!=='object'){
        obj=[obj]
    }

    if(isArray(obj)){
        // 迭代数组
        for(let i=0,l=obj.length;i<l;i++){
            fn.call(null,obj[i],i,obj)
        }
    }else{
        // 迭代对象key
        for(let key in obj){
            if(Object.prototype.hasOwnProperty.call(obj,key)){
                fn.call(null,obj[key],key,obj)
            }
        }
    }
}

export{
    isArray,
    isArrayBuffer,
    isArrayBufferView,
    isBlob,
    isDate,
    isFile,
    isFormData,
    isFunction,
    isNumber,
    isObject,
    isStandardBrowserEnv,
    isStream,
    isUndefined,
    forEach,
    isURLSearchParams,
    trim,
    isBuffer,
    isString
}
