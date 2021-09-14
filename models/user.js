const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    user_full_name: {
        type: String,
        required: true
    },
    user_user_name: {
        type: String,
        required: false
    },
    user_email_address: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_created_at: {
        type: Date,
        required: true,
        default: mongoose.now()
    },
    user_updated_at: {
        type: Date,
        required: false
    },
    user_messages_information: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message',
            required: false
        }
    ],

});
module.exports = mongoose.model('User', UserSchema);
