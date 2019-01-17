const express=require('express');
const app = express();
app.use(express.json());
const routeUser = require('./controllers/users');
const routeMeetup = require('./controllers/meetups');
const routeQuestion = require('./controllers/questions');




app.use('/api/v1/users', routeUser);
app.use('/api/v1/meetups', routeMeetup);
app.use('/api/v1/questions', routeQuestion);


const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`the server started on port ${port}...`));
module.exports = app;

