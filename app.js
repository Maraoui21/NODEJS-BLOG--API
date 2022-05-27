const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const { use } = require('bcrypt/promises');



const app = express();

app.use(cors());
app.use(cookieParser())


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.sendFile('./public/index.html',{root:__dirname});
});




// articles route
app.use('/api', require('./routes/article'));

// label route
app.use('/Label',require('./routes/label'));

// users route 

app.use('/users',require('./routes/users'));

// comment route

app.use('/comment',require('./routes/comment'))

// login route

app.use('/login',require('./routes/login'))


app.use(express.static('public'));





app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
