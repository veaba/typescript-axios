const path = require('path');
module.exports={
    entry:'./dist/index.js',
    // target: "node",
    mode:"development",
    // devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    node:{
      process:true
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    // 后续ts输出成为ts，然后用于deno开发试试2019年8月22日10:47:23
    output:{
        // filename:"js-export.js",
        filename:"axios-ts.js",
        path:path.resolve(__dirname,'pro')
    }
};
