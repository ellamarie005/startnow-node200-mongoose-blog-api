const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Blog = require('../models/Blog');
let dbUser = null;


router.get('/', (req, res) => {
  Blog
    .find()
    .then(blogs => {
      res.status(200).json(blogs);
    })
});

router.get('/featured', (req, res) => {
  Blog
    .where("featured", true)
    .then(blogs => {
      res.status(200).json(blogs)
    })
});

router.get('/:id', (req, res) => {
  Blog
    .findById(req.params.id)
    .then(blog => {
      if (blog) {
        return res.status(200).json(blog)
      }
      else { res.status(404).send('ID does not exist') }
    })
  // Blog
  // .findById(req.params.id, (err, blog) => {
  //   if (err) {
  //     return res.status(404).send('Invalid ID');
  //   } else {return res.status(200).json(blog)}
  // })
});

router.post('/', (req,res) => {
  User
      .findById(req.body.authorId)
      .then(user => {
          dbUser = user;
          const blog = new Blog(req.body);
          blog.author = user._id;
          return blog.save();
      })
      .then(blog => {
          dbUser.blogs.push(blog);
          dbUser.save().then(() => res.status(201).json(blog));
      });
});


router.put('/:id', (req, res) => {
  Blog
    .findByIdAndUpdate(req.params.id, req.body)
    .then(blog => {
      res.status(204).json(blog);
    });
});

router.delete('/:id', (req, res) => {
  if (req.params.id) {
    Blog
      .findByIdAndRemove(req.params.id)
      .then(blog => {
        if (req.params.id) {
          res.status(200).json(blog)
        }
      });
  }
});

module.exports = router;