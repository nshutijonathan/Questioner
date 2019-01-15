const express=require('express');
const app=express();
var a=4;
var b=20;
app.get('/',(req,res)=>{
  res.status(200).json({
    msg:'sucessfully logged in',

  });
});

app.get('/user',(req,res)=>{
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
app.get('/meetup',(req,res)=>{
  res.status(200).json({
    id:'ert5',
    createdon:'20,12.2019',
    location:'kcc',
    images:'https://www.google.com/search?q=transform+africa&rlz=1C1JZAP_enRW827RW827&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjs8O_R4d3fAhUI1-AKHZ_kCjgQ_AUIDigB&biw=1360&bih=647#imgrc=ix-ZtEGzYdUzzM:',
    topic:'blockchain',
    happeningon:'1/1/2019',
    tags:'save the world',
  });
});
app.get('/Question',(req,res)=>{
res.status(200).json({
id:'12',
createdon:'30/07/2018',
createdBy:'nshuti jonathan',
meetup:'kcc',
title:'asking',
body:'why did you choose topic blockchain',
votes:'20',
});
});
app.get('/Rsvp',(req,res)=>{
res.status(200).json({
id:'14',
meetup:'222ffg',
user:'124',
Response:'yes',

});
});
app.get('/POST/meetup',(req,res)=>{
res.status(200).json({
status:'345',
data:[{
  topic:'muslim day',
  location:'kigali',
  happeningon:'2/3/2019',
  tags:['el']
}]
});
});
app.get('/meetups',(req,res)=>{
res.status(200).json({
  status:114,
  data:[{
    id:'204',
    title:'beveen',
    location:'kigali heights',
    happeningon:'12/03/2019',
    tags:'empowering leaders',

  },{
    id:'304',
    title:'ANDELA OPEN SESSIONS',
    location:'Westewelle',
    happeningon:'1/03/2019',
    tags:'empowering leaders',
  }
]
});
});
app.get('/meetups/upcoming',(req,res)=>{
  res.status(200).json({
    status:'20019',
    data:[{
      id:'34',
      title:'js conference',
      location:'kampala',
      happeningon:30/3/2019,
      tags:'enjoy yourselves',
      
    },{
      id:'34',
      title:'python conference',
      location:'kenya',
      happeningon:01/2/2019,
      tags:'enjoying coding',
    }]
  });
});
const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`the server started on port ${port}...`));

