const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        require:true
    },
    date: {
        type: String,
        require:true
    },
    category: {
        type: String,
        require:true
    }

})
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;