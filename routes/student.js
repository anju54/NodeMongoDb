const { application } = require('express');
const express = require('express');
const mongoose  = require('mongoose');
const studentModel = require('../models/student');

var router =    express.Router();

router.get( '/', (req,res,next) => {

    res.send("welcoming student");
})

router.get('/add', (req,res,next) => {

    let newStudent = new studentModel ({
        id : 11,
        name : "Anupa",
        age : 25
    });
    
    newStudent.save( function(err,newStudent){
        if(err)
            console.log("error...");
            else
            res.send({message: "user created", studen: newStudent});
    })
})

module.exports = router;

