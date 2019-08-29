/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/29 0029 下午 3:26
 ***********************/

class Home{
	constructor(a){
		this.a=a;
		this.name="IamHomeClass"
	}
	getName(){
		return this.name
	}
	say(){
		console.info('hahah');
	}
}


const home= new Home('中国');

console.info(home);
console.info(home.prototype);
console.info(home.getName());
console.info(home.__proto__);
console.info(home.constructor.prototype);
