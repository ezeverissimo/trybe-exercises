const express = require('express');
const router = express.Router();
const { User } = require('../models');


const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).send(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
};
router.get('/', getAll)

module.exports = {
  router,
}