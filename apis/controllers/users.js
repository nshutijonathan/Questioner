const users = require('../models/user.js');
const express = require('express');
const router = express.Router();
router.get('api/v1/user',(req,res)=>{
    res.status(200).json({
        id:'001',
        firstname:'nshutiI',
        lastname:'jonathan',
        othername:'andelan',
        email:'andela@gmail.com',
        phonenumber:'0789083823',
        username:'andela',
        registered:'12/12/2018',
        isadmin:'NO',

});
});

router.get('/user',(req,res)=>{
  res.status(200).json({
    msg:'sucessfully logged in',
 });
});

module.exports = router;