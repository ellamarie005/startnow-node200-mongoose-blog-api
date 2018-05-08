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
  User
    .findById(req.params.id)
    .then(users => {
      if (user) {
      res.status(200).json(users)} else {
        res.status(404).send('ID does not exist!')
      }
    });
});

router.post('/', (req, res) => {
  let newUser = req.body
  User
    .save(newUser)
    .then(
      users => {
        res.status(201).json(users)
      });
});

router.put(':/id', (req, res) => {
  let id = req.params.id;
  let update = req.body
  User
    .findByIdAndUpdate()
    .then(users => {
      res.status(200).json(users);
    });
});

router.delete(':/id', (req, res) => {
  users.findByIdAndRemove()
  .then(users => {
    res.status(200).json(users)
  })
});

module.exports = router;