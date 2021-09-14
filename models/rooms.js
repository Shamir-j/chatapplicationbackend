const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chartChannelSchema = new Schema({
    chat_channel_name: {
        type: String,
        required: true
    },
    chat_channel_created_at: {
        type: Date,
        required: true,
        default: mongoose.now()
    },

    chat_channel_message_updated_at: {
        type: Date,
        required: false
    },

    message_information: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message',
            required: false
        }
    ]

});
module.exports = mongoose.model('Room_Channel', chartChannelSchema);
