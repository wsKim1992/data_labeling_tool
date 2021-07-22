const path = require("path");
const MiniCssExtract = require("mini-css-extract-plugin");
const HtmlWebpackPlugIn = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode:"development",
    entry:'./scss/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    devtool:"inline-source-map",
    optimization:{
        minimizer:[
            new TerserPlugin({}),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                include:[path.resolve(__dirname,'scss')],
                use:[
                    {loader:MiniCssExtract.loader},
                    "css-loader",
                    "resolve-url-loader",
                    {
                        loader:"sass-loader",
                        options:{sourceMap:true}
                    }
                ]
            },{
                test:/\.css$/,
                use:[
                    {loader:MiniCssExtract.loader},
                    "css-loader"
                ]
            },{
                test:/\.(png|jpg)/,
                include:[path.join(__dirname,'img')],
                use:[
                    {
                        loader:'file-loader',
                        options:{outputPath:"img"}
                    }
                ]
            },{
                test:/favicon\.ico$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[ext]"
                    }
                }
            },{
                test:/\.(svg|ttf|eot|woff|woff2)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        outputPath:"webfonts"
                    }
                }
            }
        ]
    },
    plugins:
    [
        new MiniCssExtract({
            name:"[name].[ext]"
        }),
        new HtmlWebpackPlugIn({
            filename:"draw.html",
            template:"./draw.html"
        })
    ]
};