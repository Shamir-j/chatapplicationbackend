const fs = require("fs");
const path = require("path");
const axios = require("axios");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const express = require('express');
const jwt = require("jsonwebtoken");
const date = require("date-and-time");
const validator = require("validator");
const io = require("../socket/socket");
const otpGenerator = require("otp-generator");
const { generateID } = require("generate-unique-id");
const router = express.Router()
const mongoose = require('mongoose');


//Import All Mongoose Models
const Message = require("../models/message");
const User = require("../models/user");
const Room_Channel = require("../models/rooms")


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

router.post('/user_account_verification/:', async (req, res, next) => {

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

// Used to post a message to the database
router.post('/create_message/:room_Id', async (req, res, next) => {

    const { room_Id, message } = req.body;
    const { room_Id } = req.params;
    try {
        const errors = [];

        const roomInformation = await User.findById(req.userId);
        if (roomInformation) {
            const error = new Error("No room selected");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const userInformation = await User.findById(room_Id);
        if (userInformation) {
            const error = new Error("Kindly login");
            error.data = errors;
            error.code = 400;
            throw error;
        }
        const message = new Room_Channel({
            message: message,
            message_created_at: new Date,
            message_created_by: req.userId,
            message_updated_by: req.userId,
            message_updated_at: new Date(),
            user_information: userInformation,
            room_information: roomInformation
        });
        const createdMessage = await message.save();
        roomInformation.message_information.push(createdMessage)
        userInformation.user_messages_information.push(createdMessage);
        await userInformation.save();
        await roomInformation.save();

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
        const accessToken = jwt.sign(
            {
                userId: user._id.toString(),
                user_email_address: user.user_email_address,
            },
            "amjustsomewheretyingtomakemistakeslifeisfullofstruggles",
            { expiresIn: "30m" });

        // exports.updateUser = (req, res, next) => {
        //     return User.findById(req.params.id)
        //         .then(user => {
        //             if (!user)
        //                 throw new Error('Target user does not exist. Failed to update.')
        //             const { name } = req.body
        //             if (name) user.name = name
        //             return user.save()
        //         })
        //         .then(result => {
        //             res.json(result)
        //             return result
        //         })
        //         .catch(next)
        //         .then(user => {
        //             if (user && typeof user.log === 'function') {
        //                 const data = {
        //                     action: 'update-user',
        //                     category: 'users',
        //                     createdBy: req.user.id,
        //                     message: 'Updated user name',
        //                 }
        //                 return user.log(data)
        //             }
        //         }).catch(err => {
        //             console.log('Caught error while logging: ', err)
        //         })
        // }


        return res.status(200).json({
            refreshToken: refreshToken,
            token: accessToken,
            userId: user._id.toString(),
        }).catch(next)
            .then(user => {
                if (user && typeof user.log == 'function') {
                    const data = {
                        action: 'user-login',
                        category: 'users',
                        createdBy: user._id,
                        message: 'User logged in'
                    },
                    return user.log(data)
                }
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
  
      await SH_Hotel_Token.findOneAndDelete({
        sh_refresh_token: sh_refresh_token,
        sh_user_id: req.userId,
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
        const messages = await Message.find({ room_information: channelInformation });
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

router.get('/messages/:message_Id', async (req, res, next) => {
    try {
        const errors = []
        const messages = await Message.findById(message_Id);
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
        const errors = []
        const channelInformation = await Message.findById(room_Id)
        .populate("message_information");
        if (!channelInformation) {
            const error = new Error("No room information available at the moment. Please try again.");
            error.data = errors;
            error.code = 400;
            throw error;
        }

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
module.exports = router

