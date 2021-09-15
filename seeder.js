const seeder = require("mongoose-seed")
const Room_Channel = require('./models/rooms');
const db = "mongodb+srv://smarthotelSystemUser:Hx0meBXMo2RjawLb@smarthotel.i3gmt.mongodb.net/realtimechat_database?retryWrites=true&w=majority"



seeder.connect(db, function () {

    // Load Mongoose models
    seeder.loadModels(['./models/rooms']);

    // Clear specified collections
    seeder.clearModels(['Room_Channel'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(room_data, function (err, done) {
            if (err) {
                return console.log("Seeding err", err)
            }
            if (done) {
                return console.log("Seeding done", done)
            }
            seeder.disconnect();
        });

    });
});
// Data array containing seed data - documents organized by Model
const room_data = [
    {
        'model': 'Room_Channel',
        'documents': [
            {
                'chat_channel_name': 'Business',

            },
            {
                'chat_channel_name': 'Technology',

            },
            {
                'chat_channel_name': 'Sports',

            },
            {
                'chat_channel_name': 'General Chat',

            },

        ]
    }
];



