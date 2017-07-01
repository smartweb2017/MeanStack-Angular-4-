const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const multer = require('multer');



// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');
const roles = require('./routes/roles');
const uploads = require('./routes/uploads');
const stores = require('./routes/stores');
const company = require('./routes/companies');

// Port Number
const port = 80;

//Optimize Response Body
app.use(compression());

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/roles', roles);
app.use('/upload', uploads);
app.use('/stores', stores);
app.use('/companies', company);
// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});