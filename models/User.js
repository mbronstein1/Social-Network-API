const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter an email address"],
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            "Please add a valid email address."
        ]
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
    toJSON: {
        virtuals: true,
    }
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = mongoose.model('User', userSchema);

module.exports = User;