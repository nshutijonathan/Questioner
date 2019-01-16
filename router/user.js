const express = require('express');
const User = require('../controller/user')

const router = express.Router();

router.get('/:userId', User.getUser);


module.exports = router;
