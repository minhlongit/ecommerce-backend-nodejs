const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

// init middleware
// hiển thị log
app.use(morgan('dev'))

// bảo mật headers
app.use(helmet())

// giảm kích thước dữ liệu truyền tải, tối ưu hoá hiệu suất
app.use(compression())

// init db

// init routes
app.get('/', (req, res, next) => {
  const strCompress = 'He;;p Compression'
  return res.status(200).json({ message: 'Welcome to E-Commerce API', metadata: strCompress.repeat(10000) })
})
// handling errors

module.exports = app
