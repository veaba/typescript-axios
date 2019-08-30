const path = require('path');
module.exports={
    // entry:'./dist/index.js',
    // entry:'./test/c-ts.ts',
    entry:'./src/index.ts',
    // entry:'./test/c.js',
    target: "node",//必须注释，否则浏览器无法使用
    // 默认生产不优化代码下是260k
    mode:"development",
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.ts?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        // extensions:['.js']
        extensions:['.tsx','.ts','.js']
    },
    // 后续ts输出成为ts，然后用于deno开发试试2019年8月22日10:47:23
    output:{
        // filename:"c.js",
        filename:"axios-ts.js",
        path:path.resolve(__dirname,'pro')
    }
};
