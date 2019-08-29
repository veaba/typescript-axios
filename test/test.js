/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/20 0020 下午 5:31
 ***********************/
const axios =  require('../dist/axios');


console.info('axios：\n',axios);
// TODO 为什么绑定在default上面

const axiosIns= axios.create();

console.info("dddddL:",axiosIns);
//
// axiosIns.get('http://baidu.com',{})
// 	.then((res) => {
// 		console.log('res:', res)
// 	})
// 	.catch((err) => {
// 		console.log('err:', err)
// 	});



