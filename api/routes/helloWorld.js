var express = require('express');
var router = express.Router();
var dbc = require('../db/dbc');

router.get('/', async (req, res, next) => {
  var result = await dbc
    .collection('colleges')
    .findOne({ name: 'test college' });
  console.log(result);
  res.json(result);
});

module.exports = router;
