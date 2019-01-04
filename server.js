const http=require('http');
const app=require('./user');

const port =process.env.PORT || 3000;

const server =http.createServer(app);

server.listen(port);
