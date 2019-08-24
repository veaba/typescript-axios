/***********************
 * @name TS todo
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/

class InterceptorManager  {
    handlers:any[];
    constructor(){
        this.handlers=[]
    }
    use(fulfilled:any,rejected:any){
        this.handlers.push({
            fulfilled,
            rejected
        });
        return this.handlers.length-1
    }
    eject(id:any){

    }
    forEach(fn:any){

    }

}
export default InterceptorManager

