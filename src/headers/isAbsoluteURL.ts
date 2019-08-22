/***********************
 * @name TS
 * @desc 其实 node环境的path.isAbsolute 也是提供了一个方法的
 * @desc 判断是否绝对路径
 * @author Jo.gel
 * @date 2019/8/20 0020
 * @param {string} url 
 * @returns {boolean}
 ***********************/

// export default function  isAbsoluteURL() {

// }
export default (url:any):boolean=>{
    return /^([a-z][a-z\d\+\-\,]*:)?\/\//i.test(url)
}