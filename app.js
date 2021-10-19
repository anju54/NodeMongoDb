
const express = require('express');
const mongoose  = require('mongoose');
const db = require('./db').DB_URL;
const app = express();

mongoose.connect(db);

var studentrouter = require('./routes/student.js');

app.use('/stu',studentrouter);

app.get('/', (req,res) => {

    res.send("we are at home");
});

// imports routes
const postRoutes = require('./routes/post.js');
app.use('/post',postRoutes);

mongoose.connection.on("connected", ()=> {
    console.log("db connected!!");
})


app.listen(8085);