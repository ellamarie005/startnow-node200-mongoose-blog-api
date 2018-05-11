const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  User
    .find()
    .then(users => {
      res.status(200).json(users);
    });
});

router.get('/:id', (req, res) => {
  User
    .findById(req.params.id)
    .then(user => {
      if(user) {
        return res.status(200).json(user)
      } else {res.status(404).send('ID does not exist')}
    })
});

router.post('/', (req, res) => {
let user = new User(req.body)
user
.save(err => {
  if (err) {return res.status(404).send(err)}
  else return res.status(201).json(user)
})
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let update = req.body
  User
    .findByIdAndUpdate(id, update)
    .then(user => {
      res.status(204).json(user);
    });
});

router.delete('/:id', (req, res) => {
  if (req.params.id) {
    User
    .findByIdAndRemove(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
  }
});

module.exports = router;