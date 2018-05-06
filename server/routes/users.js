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
  let id = req.params.id
  User
    .findById()
    .then(users => {
      res.status(200).json(users)
    });
});

router.post('/', (req, res) => {
  User
    .save()
    .then(
      users => {
        res.status(200).json(users)
      });
});

router.put(':/id', (req, res) => {
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