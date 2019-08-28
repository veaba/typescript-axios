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
const axios: any = createInstance(defaults);
// 暴露类Axios
axios.Axios = Axios;

// 用于创建新实例的工厂模式函数
axios.create = (instanceConfig: any) => {
	return createInstance({ ...axios.defaults, ...instanceConfig || {} })
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



/* ******************* demo *********************** */
const axiosIns: any = axios.create({});

// req 拦截器
axiosIns.interceptors.request.use((req: any) => {
	if (!req.url) {
		console.info('请检查，url为空：' + req.url);
	}
	return req;
}, (err: any) => {
	return Promise.reject(err.request);
});
// res 拦截器
axiosIns.interceptors.response.use((res: any) => {
	if (res && res.data) {
		return Promise.resolve(res.data);
	}
	return res.data;
}, (err: any) => {
	return Promise.resolve(err.response);
});


axiosIns.get('http://baidu.com')
	.then((res: any) => {
		console.log('res:', res)
	})
	.catch((err: any) => {
		console.log('err:', err)
	});


interface SearchFnc {
	(source: string, subString: string): boolean
}
let mySearch: SearchFnc;

mySearch = function fn (source: string, subString: string):boolean{
	let result = source.search(subString);
	return result > -1
};
let x:SearchFnc;
x= (source: string, subString: string)=>{
let result = source.search(subString);
 	return result > -1
 };

console.log(mySearch);
// source: string, subString: string
// let result = source.search(subString)
// return result > -1
export default axios
