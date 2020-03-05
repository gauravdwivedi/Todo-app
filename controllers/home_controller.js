const Todo = require('../model/todo');
const express = require('express');
const app = express();


module.exports.home = function (req, res) {
   Todo.find({}, function (err,tasks) {
        if (err) {
            console.log('error in fetching tasks from db');
            return;
        }
        return res.render('home', {
            title: "This is Tasks",
            'task':tasks
        });
    });
}

module.exports.create = function (req, res) {
    console.log(req.body);
    Todo.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category
    }, function (err) {
        if (err) {
            console.log('Error in creating task');
            return;
        } 
            res.redirect('back');  
    });
    
}

module.exports.delete = function (req, res) {  
    
    let id = req.query.id;
    Todo.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error deleting from DB');
            return;
        }
        return res.redirect('back');
    });
}



