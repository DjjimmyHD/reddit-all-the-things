const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req,res, next) => {
  console.log('route hit');
  knex('post')
  .then(post => res.json(post))
  .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  knex('post')
    .insert(req.body)
    .returning('*')
    .then(posts => res.json(posts[0]))
    .catch(err => next(err))
})
router.patch('/:id',(req,res,next) => {
  console.log('patches', req.body);
    knex('post')
      .update(req.body)
      .where({id: req.params.id})
      .returning('*')
      .then(posts => res.json(posts[0]))
      .catch(err => next(err))
})


router.delete('/:id', (req,res,next) => {
  knex('post')
  .del()
  .where({id: req.params.id})
  .then(()=> res.end())
  .catch(err => next(err))
})
 module.exports = router
