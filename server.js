const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,useUnifiedTopology: true 
}).then(() => {
    console.log("connected");    
}).catch(err => {
    console.log('not connected.', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello neha"});
});

const userRoutes = require('./src/routes/user.route')

app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});