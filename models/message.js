const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    message_created_at: {
        type: Date,
        required: true,
        default: mongoose.now()
    },
    message_created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    message_updated_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    message_updated_at: {
        type: Date,
        required: false
    },
    user_information: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },

    room_information: {
        type: Schema.Types.ObjectId,
        ref: 'Room_Channel',
        required: false
    },
});
module.exports = mongoose.model('Message', messageSchema);
