/**
 * @desc Axios 入口文件
 */

import Axios from './core/Axios'
import defaults from './defaults'

/**
 * @desc 创建Axios 实例
 * 
 */



const createInstance = (defaultConfig:any) => {
    return new Axios(defaultConfig)
}

const config = {
    url: "xx"
}

// 创建要导出的默认实例
const axios:any = createInstance(defaults)
// 暴露类Axios
axios.Axios = Axios

// 用于创建新实例的工厂模式函数
axios.create = (instanceConfig: any) => {
    return createInstance({ ...axios.defaults, ...instanceConfig || {}})
}

// 暴露 axios 的Cancel & CancelToken
axios.Cancel = () => import('./cancel/Cancel')//todo
axios.CancelToekn = () => import('./cancel/CancelToken')//todo
axios.isCancel=()=>import('./cancel/isCancel')

// todo 暴露 all/spread 干嘛的？
axios.all=(promises:any)=>{
    return Promise.all(promises)
}

axios.spread=()=>import('./headers/spread')//todo



/* ******************* demo *********************** */
const axiosIns= axios.create({})

// req 拦截器
axiosIns.interceptors.request.use((req:any) => {
	if(!req.url){
		console.info('请检查，url为空：'+req.url);
	}
	
	return req;
}, err => {
    return Promise.reject(err.request);
}
// res 拦截器
axiosIns.interceptors.response.use((res:any) => {
	if (res && res.data) {
		return Promise.resolve(res.data);
	}
	return res.data;
}, err => {
	return Promise.resolve(err.response);
});


axiosIns.get('http://baidu.com')
.then(res=>{
    console.log('res:',res)
})
.catch(err=>{
    console.log('err:',err)
})

export default axios