const express = require('express');

const User = require("../../models/UserList")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require('express-validator');
const { Router } = require('express');

const router =express.Router();
router.post('/',
async(req, res) => {
  console.log(req.body)
  const { userId, password } = req.body;
  try {

      //see if user exist
      let user = await User.findOne({ userId });
      console.log(user)
     
      if (!user) {
          return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] })
      }
      else{
        if(userId==user.userId && password==user.password){
          res.send('login Successfull')
        }
        else{
          return res.status(400).json({ errors: [{ msg: 'password is Wrong' }] })
        }

      }
  } catch (err) {
      console.log(err)
      res.status(500).send('server error');
  }
})

module.exports = router;