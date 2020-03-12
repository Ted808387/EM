'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_PATH: '"https://vue-course-api.hexschool.io"', //會更改，所以直接先放這 (網址)
  CUSTOMPATH: '"tedcode"', //自己的api path
})
