require('./employee.model');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, err => {
    if(!err){
        console.log('Success');
    }else{
        console.log('Error in DB connection: ' + err);
    }
})
