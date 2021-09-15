const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const express = require('express');
const jwt = require("jsonwebtoken");
const validator = require("validator");
const io = require("../socket/socket");
const otpGenerator = require("otp-generator");
const router = express.Router()
const mongoose = require('mongoose');


//Import All Mongoose Models
const Message = require("../models/message");
const User = require("../models/user");
const Room_Channel = require("../models/rooms")
const Session = require("../models/user_session")


// Used to create user. Provide email address and password

router.post('/create_user', async (req, res, next) => {

    const { user_email_address, user_password, user_full_name } = req.body;
    try {
        const errors = [];
        if (!validator.isEmail(user_email_address)) {
            errors.push({ message: "Please enter a valid email ddress." });
        }

        if (validator.isEmpty(user_password) || !validator.isLength(user_password, { min: 8 })) {
            errors.push({ message: "Please enter a valid password." });
        }
        if (validator.isEmpty(user_full_name)) {
            errors.push({ message: "Please enter your full name." });
        }
        if (errors.length > 0) {
            const error = new Error("Invalid inputs.");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const existingUser = await User.findOne({ user_email_address: user_email_address });
        if (existingUser) {
            const error = new Error("This email address is already in use.");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const one_time_password = otpGenerator.generate(4, {
            bold: true,
            upperCase: false,
            specialChars: false,
            alphabets: false,
            specialChar: false,
        });
        const hashedPw = await bcrypt.hash(user_password, 12);
        const user = new User({
            user_email_address: user_email_address,
            user_password: hashedPw,
            user_full_name: user_full_name,
            user_is_account_verified: false,
            user_account_verification_code: one_time_password,
            user_account_verification_code_expiry_date: Date.now() + 3600000,
        });
        const createdUser = await user.save();

        return res.status(200).json({
            _id: createdUser._id.toString(),
            user_full_name: createdUser.user_full_name,
            user_email_address: createdUser.user_email_address,
            user_user_name: createdUser.user_user_name,
            user_account_verification_code: createdUser.user_account_verification_code,
        })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});

// router.post('/user_account_verification/:', async (req, res, next) => {

//     const { user_email_address, user_password, user_full_name } = req.body;
//     try {
//         const errors = [];
//         if (!validator.isEmail(user_email_address)) {
//             errors.push({ message: "Please enter a valid email ddress." });
//         }

//         if (validator.isEmpty(user_password) || !validator.isLength(user_password, { min: 8 })) {
//             errors.push({ message: "Please enter a valid password." });
//         }
//         if (validator.isEmpty(user_full_name)) {
//             errors.push({ message: "Please enter your full name." });
//         }
//         if (errors.length > 0) {
//             const error = new Error("Invalid inputs.");
//             error.data = errors;
//             error.code = 400;
//             throw error;
//         }
//         const existingUser = await User.findOne({ user_email_address: user_email_address });
//         if (existingUser) {
//             const error = new Error("This email address is already in use.");
//             error.data = errors;
//             error.code = 400;
//             throw error;
//         }
//         const one_time_password = otpGenerator.generate(4, {
//             bold: true,
//             upperCase: false,
//             specialChars: false,
//             alphabets: false,
//             specialChar: false,
//         });
//         const hashedPw = await bcrypt.hash(user_password, 12);
//         const user = new User({
//             user_email_address: user_email_address,
//             user_password: hashedPw,
//             user_full_name: user_full_name,
//             user_is_account_verified: false,
//             user_account_verification_code: one_time_password,
//             user_account_verification_code_expiry_date: Date.now() + 3600000,
//         });
//         const createdUser = await user.save();

//         return res.status(200).json({
//             _id: createdUser._id.toString(),
//             user_full_name: createdUser.user_full_name,
//             user_email_address: createdUser.user_email_address,
//             user_user_name: createdUser.user_user_name,
//             user_account_verification_code: createdUser.user_account_verification_code,
//         })
//     }
//     catch (error) {
//         res.json({ message: error.message, status: error.code })
//         next()
//     }
// });

// Used to post a message to the database
router.post('/create_message/:room_Id', async (req, res, next) => {


    const { room_Id } = req.params;

    try {
        const errors = [];
        const { message } = req.body;
        const roomInformation = await Room_Channel.findById(room_Id);
        if (!roomInformation) {
            const error = new Error("No room selected");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const userInformation = await User.findById(req.userId);
        if (!userInformation) {
            const error = new Error("Kindly login");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const newMessage = new Message({
            message: message,
            message_created_at: new Date,
            message_created_by: req.userId,
            message_updated_by: req.userId,
            message_updated_at: new Date(),
            user_information: userInformation,
            room_information: roomInformation
        });
        const createdMessage = await newMessage.save();
        roomInformation.message_information.push(createdMessage)
        userInformation.user_messages_information.push(createdMessage);
        await userInformation.save();
        await roomInformation.save();
        io.getIO(roomInformation._id).emit('message', {
            action: 'create',
            category: {
                ...createdMessage._doc,
                _id: createdMessage._id.toString(),
            }
        });
        return res.status(200).json({
            ...createdMessage._doc,
            _id: createdMessage._id.toString(),

        })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});

// Used to post a message to the database
router.post('/create_room', async (req, res, next) => {

    const { chat_channel_name } = req.body;
    try {
        const errors = [];

        const userInformation = await User.findById(req.userId);
        if (userInformation) {
            const error = new Error("Kindly login");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const room = new Room_Channel({
            chat_channel_name: chat_channel_name,
            chat_channel_created_at: new Date(),
            chat_channel_message_updated_at: new Date(),

        });
        const createdRoom = await room.save();
        io.getIO().emit('room', {
            action: 'create',
            category: {
                ...createdRoom._doc,
                _id: createdRoom._id.toString(),
            }
        });
        return res.status(200).json({
            ...createdRoom._doc,
            _id: createdRoom._id.toString(),

        })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});
// Used to login the user before they select the room to use
router.post('/user_login', async (req, res, next) => {

    const { user_email_address, user_password } = req.body;
    try {
        const errors = [];
        if (!validator.isEmail(user_email_address)) {
            errors.push({ message: "Please enter a valid email ddress." });
        }

        if (validator.isEmpty(user_password)) {
            errors.push({ message: "Please enter a valid password." });
        }

        if (errors.length > 0) {
            const error = new Error("Invalid inputs.");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const user = await User.findOne({ user_email_address: user_email_address });
        if (!user) {
            const error = new Error("Please provide a valid email addrerss.");
            error.code = 400;
            throw error;
        }
        const isEqual = await bcrypt.compare(user_password, user.user_password);
        if (!isEqual) {
            const error = new Error("Please provide a valid password.");
            error.code = 400;
            throw error;
        }
        // if (user.user_is_account_verified !== true) {
        //     const error = new Error("Account verification required");
        //     error.code = 401;
        //     throw error;
        //   }
        const newSession = new Session({
            session_started_at: new Date(),
            session_created_by: user.user_full_name,
            user_information: user._id
        });
        await newSession.save();
        const accessToken = jwt.sign(
            {
                userId: user._id.toString(),
                user_email_address: user.user_email_address,
            },
            "amjustsomewheretyingtomakemistakeslifeisfullofstruggles",
            { expiresIn: "30m" });
        return res.status(200).json({
            token: accessToken,
            userId: user._id.toString(),
        })
    }
    catch (error) {

        res.json({ message: error.message, status: error.code })
        next()
    }
});

//logout of users
router.post('/sh_logout', async (req, res, next) => {

    try {
        const userInformation = await User.findById(req.userId);
        if (!userInformation) {
            const error = new Error("Something is wrong try again");
            error.code = 404;
            throw error;
        }

        const newSession = new Session({
            session_ended_at: new Date(),
            user_information: userInformation
        });
        await newSession.save();

        io.getIO().emit('left_message', {
            action: 'logout',
            chat_left: {
                message: userInformation.user_full_name + "has left the chat"
            }
        });
        return res.status(200).json({ status: true })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});

router.get('/messages/:room_Id', async (req, res, next) => {
    const { room_Id } = req.params;
    try {
        const errors = []
        const channelInformation = await Room_Channel.findById(room_Id);
        const messages = await Message.find({ room_information: channelInformation })
            .populate("user_information")
            .populate("room_information");
        if (!messages) {
            const error = new Error("No messages available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

        return res.status(200).json({
            all_messages: messages.map((messages) => {
                return {
                    ...messages._doc,
                    _id: messages._id.toString(),
                };
            }),
        })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});

router.get('/message/:message_Id', async (req, res, next) => {
    try {
        const errors = []
        const { message_Id } = req.params;
        const messages = await Message.findById(message_Id)
            .populate("user_information")
            .populate("room_information");
        if (!messages) {
            const error = new Error("No message available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

        return res.status(200).json({
            ...messages._doc,
            _id: messages._id.toString(),
        });
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});

router.get('/all_rooms', async (req, res, next) => {
    const { room_Id } = req.params;
    try {
        const errors = []
        const channelInformation = await Room_Channel.find()
            .populate("message_information");
        if (!channelInformation) {
            const error = new Error("No rooms available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

        return res.status(200).json({
            all_rooms: messages.map((channelInformation) => {
                return {
                    ...channelInformation._doc,
                    _id: channelInformation._id.toString(),
                };
            }),
        })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});


router.get('/room/:room_Id', async (req, res, next) => {
    try {
        const { room_Id } = req.params;
        const errors = []
        const userInformation = await User.findById(req.userId);
        if (!userInformation) {
            const error = new Error("No user information available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const channelInformation = await Message.findById(room_Id)
            .populate("message_information");
        if (!channelInformation) {
            const error = new Error("No room information available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

        io.getIO().emit('message', {
            action: 'get',
            room_welcome: {
                message: "Hi" + userInformation.user_full_name + "Welcome to" + channelInformation.chat_channel_name + "."
            }
        });
        return res.status(200).json({
            ...channelInformation._doc,
            _id: channelInformation._id.toString(),
        });
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});


router.get('/all_users', async (req, res, next) => {

    try {
        const errors = []
        const userInformation = await User.find()
            .populate("user_messages_information");
        if (!userInformation) {
            const error = new Error("No rooms available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

        return res.status(200).json({
            all_users: userInformation.map((userInformation) => {
                return {
                    ...userInformation._doc,
                    _id: userInformation._id.toString(),
                };
            }),
        })
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});


router.get('/user/:user_Id', async (req, res, next) => {
    try {
        const errors = []
        const { user_Id } = req.params;
        const userInformation = await User.findById(user_Id)
            .populate("user_messages_information");
        if (!userInformation) {
            const error = new Error("No room information available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

        return res.status(200).json({
            ...userInformation._doc,
            _id: userInformation._id.toString(),
        });
    }
    catch (error) {
        res.json({ message: error.message, status: error.code })
        next()
    }
});
module.exports = router

