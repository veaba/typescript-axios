/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/20 0020 下午 5:31
 ***********************/
const axios =  require('../dist/index');


// TODO 为什么绑定在default上面

const axiosIns= axios.create({});


console.time('测试时间');
axiosIns.get('http://127.0.0.1:8080',{})
	.then((res) => {
		console.log('res:',res.data)
	})
	.catch((err) => {
		console.log('err:',)
	});


console.timeEnd('测试时间');

