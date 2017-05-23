const express = require('express')
const router = express.Router()

router.get('/*', (req, res, next) => {
  const options = {
    root: __dirname + '/../redditApp'
  }
    res.sendFile('index.html', options, (err) => {
      if(err) return next(err)

      console.log('Index file sent to browser');
    })

})
 module.exports = router
