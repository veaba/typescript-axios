/***********************
 * @desc 通过组合指定的URL创建新的URL
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 * @param {string} baseURL
 * @param {string} relativeURL
 * @returns {string}
 ***********************/
export default ((baseURL:string,relativeURL:string):string=>{
    return relativeURL?
    baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''):baseURL
})