const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    toDos : [
        {
            _id : Schema.Types.ObjectId,
            title: {type: String},
            completed : {type: Boolean}
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);