/**
 * @desc `Cancel` 引发的取消对象
 * @class
 * @param {string} message
 */

 class Cancel {
     message:string;
     __CANCEL__:boolean;
     constructor(message:string) {
         this.message=message;
         this.__CANCEL__=true
     }
     toString(){
         return 'Cancel '+(this.message?':'+this.message:"")
     }
 }

 export default Cancel
