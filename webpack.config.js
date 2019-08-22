const path = require('path')
module.exports={
    entry:'./src/axios.ts',
    mode:"development",
    devtool:'inline-srouce-map',
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    // todo 后续ts输出成为ts，然后用于deno开发试试2019年8月22日10:47:23
    output:{
        filename:"axios_ts.js",
        path:path.resolve(__dirname,'pro')
    }
}