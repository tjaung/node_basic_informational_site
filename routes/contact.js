const path = require('path')
const express = require('express')

// const rootDir = require('./util/path');

const router = express.Router()
const contactPath = path.join(__dirname, '/../','views', 'contact-me.html')
console.log(contactPath)
router.get('/', (req, res, next) => {
    res.sendFile(contactPath)
})

module.exports = router