const express = require('express');

const Team = require("../../models/TeamList")
const config = require('config')

const { Router } = require('express');

const router =express.Router();
router.get('/Team', async(req, res) => {
  try {
         const team = await Team.find({});
        res.json(team);
  } catch (err) {
      console.log(err.message);
      res.status(500).send('server error')
  }
});

module.exports = router;