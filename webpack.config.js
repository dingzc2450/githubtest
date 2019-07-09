const htmlpulugin=require('html-webpack-plugin');
const  path=require('path');
const  css=require('mini-css-extract-plugin');
exports.default={
    devServer:{
        port: '9090'
    },
    entry:{
        main:'./src/index.js'
    },
    plugins:[
        new htmlpulugin({
            template:'./src/index.tplt.html'
        }),
        new css({
            filename: './src/index.css'
        })
    ],
    output: {
        filename:'index.js',
        path: path.resolve('./dist')
      },
    
    mode:'production',
    module:{
        rules:[{
            test: /.css$/,
            use: [
              css.loader,
              'css-loader',]
        },
        {
            test: /.js$/,
            exclude: path.resolve('node_modules'),
            loader: 'babel-loader',
            options: {
              presets: ['env'], // babel-preset-env
              plugins: ['transform-runtime',
              'transform-decorators-legacy'],
            },
          }
           
        ],
      
        
    }
    
};