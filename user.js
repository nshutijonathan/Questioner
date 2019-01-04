const express =require('express');
const app=express();

app.use((req, res, next) =>{
    res.status(200).json({
        id:'002',
        firstname:'nshuti',
        lastname:'jonathan',
        othername:'andelan',
        email:'andela@gmail.com',
        phonenumber:'0789083823',
        username:'andela',
        registered:'12/12/2018',
        isadmin:'NO',

    })
});

module.exports=app;