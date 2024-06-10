const path = require('path')
const express = require('express')

// const rootDir = require('./util/path');

const router = express.Router()
const aboutPath = path.join(__dirname, '/../','views', 'about.html')
console.log(aboutPath)

router.get('/', (req, res, next) => {
    res.sendFile(aboutPath)
})

module.exports = router