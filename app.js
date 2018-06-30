const express = require('express')
const request = require('superagent')

const app = express()
const HOST = 'http://api.douban.com/v2'

/**
 * CORS support.
 */

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})
/*
* type
*/
app.get('/movie/:type', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {}
    console.log('end')
  })
})
/*
* search
*/
app.get('/movie/search', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {}
    console.log('end')
  })
})
/*
* detail
*/
app.get('/movie/subject/:id', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', function (error, res) {
    if (error) {}
    console.log('end')
  })
})
/*
* 电影条目剧照
*/
app.get('/movie/subject/:id/photos', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {}
    console.log('end')
  })
})
/*
* 影人条目信息
*/
app.get('/movie/celebrity/:id', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {}
    console.log('end')
  })
})

app.listen(8081, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8081')
})
