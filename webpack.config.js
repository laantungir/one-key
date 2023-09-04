// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
// const source = path.resolve(__dirname, 'src')


const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


const config = {
    context: __dirname,

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
        extensions: ['.ts', '.js', '.mjs'],
      },

    resolve: {
        modules: ["qrcode-svg"],
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
        fallback: {
          "fs": false,
        } 
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },


    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
   
};

module.exports = () => {
    target: 'node';
    resolve:{
        extensions:['.js','.jsx'];
     }
    plugins: [
        new NodePolyfillPlugin()
    ]
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};

