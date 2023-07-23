const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isDevelopment = process.env.NODE_ENV === 'development'
    return {
        mode: 'production',
        entry: {
            app: path.resolve('src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        devtool: isDevelopment ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss|css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        debug: true,
                                        useBuiltIns: 'usage',
                                        corejs: '3.31.1'
                                    }
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
            new HtmlWebpackPlugin({
                title: 'Webpack App',
                filename: 'index.html',
                template: 'src/template.html'
            })
        ],
        devServer: {
            static: {
                directory: 'dist'
            },
            port: 3000,
            open: true,
            compress: false,
            historyApiFallback: true
        }
    }
}