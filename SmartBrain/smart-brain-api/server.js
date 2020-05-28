const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const app = express();

const postgresPassword = process.env.PASSWORD;

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: postgresPassword,
    database: 'smart-brain',
  },
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  db.select('*')
    .from('users')
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post('/signin', (req, res) => signin.handleSignin(req, res, db, bcrypt));
app.post('/register', (req, res) =>
  register.handleRegister(req, res, db, bcrypt)
);
app.get('/profile/:id', (req, res) => profile.handleGetProfile(req, res, db));
app.put('/image', (req, res) => image.handleImage(req, res, db));
app.post('/imageUrl', (req, res) => image.handleApiCall(req, res));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
