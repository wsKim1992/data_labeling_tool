const path = require('path');

module.exports = {
    name:'canvas_draw',
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.jsx']
    },
    entry:{
        app:['./client'],
    },//입력
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties'],
            }
        }]
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },//출력
};