const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sessionSchema = new Schema({
    session_started_at: {
        type: Date,
        required: true,
        default: mongoose.now()
    },
    session_created_by: {
        type: String,
        required: true
    },
    session_ended_at: {
        type: Date,
        required: false
    },
    user_information: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },

 
});
module.exports = mongoose.model('Session', sessionSchema);
