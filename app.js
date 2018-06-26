const express = require('express')
const request = require('superagent')

const app = express()
const HOST = 'http://api.douban.com/v2'

/**
* CROS Support
*/
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUt, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

/*
* 正在热映
*/
app.get('/movie/in_theaters', (req, res) => {
  const sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (err, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
/*
* 即将上映
*/
app.get('/movie/coming_soon', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
/*
* 搜索
*/
app.get('/movie/search', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
/*
* top250
*/
app.get('/movie/top250', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
/*
* 北美票房
*/
app.get('/movie/us_box', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
/*
* 电影条目剧照
*/
app.get('/movie/subject/:id/photos', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
/*
* 影人条目信息
*/
app.get('/movie/celebrity/:id', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res)
  sreq.on('end', (error, res) => {
    if (error) {
      console.log(error)
    }
    console.log(res)
  })
})
app.listen(process.env.PORT || 8989, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8989')
})
