//arquivo padrao de config do webpack, ele é escrito em commons js

const webpack = require('webpack')

//pegando o modo que é setado no script build npm start = dev, npm run build = prod
const modoDev = process.env.NODE_ENV !== 'production'

//plugins
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimeCssAssetsPlugins = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  //ponto de entrada q o webpack vai pegar o codigo
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  entry: './src/principal.js',
  //pasta de saida dos arquivos
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  optimization: {
    //minificar css e js
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new optimeCssAssetsPlugins({})
    ]
  },
  plugins: [
    //extrai o css para um arquivo externo
    new miniCssExtractPlugin({
      //nome do arquivo css gerado
      filename: "estilo.css"
    })
  ],
  module: {
    //regras de loaders
    rules: [{
      //criterio para entrar na regra
      test: /\.s?[ac]ss$/,
      use: [
        //extrai o css para um arquivo externo
        miniCssExtractPlugin.loader,
        //add o css compilado dentro do output de saida do webpack
        //'style-loader', //add dentro da dom a tag <style>
        'css-loader', //interpreta @import, url()...
        'sass-loader'
      ]
    }, {
      //tratando imagens
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  }
}