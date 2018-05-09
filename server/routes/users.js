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

router.get(':/id', (req, res) => {
  let id = req.params.id;
  User
    .findById(id, (err, user) => {
      if (user) {res.status(200).json(users)}
      else {res.status(404).send('ID does not exist!')}
    })
    .then(res.status(200).json(user))
});

router.post('/', (req, res) => {
  let newUser = req.body
  User
    .save()
    .then(
      newUser => {
        res.status(201).json(users)
      });
});

router.put(':/id', (req, res) => {
  let id = req.params.id;
  let update = req.body
  User
    .findByIdAndUpdate(id, update)
    .then(user => {
      res.status(204).json(user);
    });
});

router.delete(':/id', (req, res) => {
  let id = req.params.id
  if (id) {
    users.findByIdAndRemove(id)
      .then(users => {
        if (id) {
          res.status(200).json(users)
        }
      })
  }
});

module.exports = router;