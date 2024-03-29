const mongoose = require('mongoose');

const footballerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 3,
        maxLength: 20
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
    nationality: String,
    position: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    foot: String,
});

const Footballer =  mongoose.model('Footballer', footballerSchema);

module.exports = Footballer;