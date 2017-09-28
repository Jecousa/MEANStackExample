const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to DB
mongoose.connect(config.database);


//Connect MEssage
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

//DB Error
mongoose.connection.on('error', (err) =>{
  console.log('database error: ' + err);
});

const app = express();

const users = require('./routes/users');

//Port #
const port = 3002;

app.use(cors());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Minddleware

app.use(bodyParser.json());

//Body Parser Minddleware

app.use(passport.initialize());
app.use(passport.session());

 require('./config/passport')(passport);

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
  res.send('sanity check!');
});

app.get('*',(reg, res)=> {
  res.send("Invalid Endpoint");
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, () => {
  console.log('Server Started' + port);
});
