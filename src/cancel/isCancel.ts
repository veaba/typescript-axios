/***********************
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/

export default function isCancel(value:any):boolean {
    return !!(value&&value.__CANCEL__)
}

