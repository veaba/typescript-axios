/**
 * @desc Axios 入口文件
 */

import Axios from './core/Axios'
import defaults from './defaults'


/**
 * @desc 创建Axios 实例
 *
 */
const createInstance = (defaultConfig: any) => {
	return new Axios(defaultConfig)
};

// 创建要导出的默认实例
// const axios: any = new Axios(defaults);
const axios: any = createInstance(defaults);

// 暴露类Axios
axios.Axios = Axios;

// 用于创建新实例的工厂模式函数
axios.create = function create (instanceConfig: any){
	return new Axios({ ...axios.defaults, ...instanceConfig || {} })
};

// 暴露 axios 的Cancel & CancelToken
axios.Cancel = () => import('./cancel/Cancel');
axios.CancelToken = () => import('./cancel/CancelToken');
axios.isCancel = () => import('./cancel/isCancel');

// 暴露 all/spread 干嘛的？
axios.all = (promises: any) => {
	return Promise.all(promises)
};

axios.spread = () => import('./headers/spread');

export default axios


