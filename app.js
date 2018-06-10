const express = require('express')
const userController=require('./controllers/user.controller');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/users',userController.create);

app.listen(3000, () => console.log('Example app listening on port 3000!'));