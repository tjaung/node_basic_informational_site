const path = require('path')
const express = require('express')

// const rootDir = require('./util/path');

const router = express.Router()
const homePath = path.join(__dirname, '/../','views', 'index.html')
console.log(homePath)
router.get('', (req, res, next) => {
    res.sendFile(homePath)
})

module.exports = router