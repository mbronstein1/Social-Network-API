const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// const { formatDate, formatTime } = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, "Please enter a thought"],
            // minLength: 1, *this is unnecessary because it is already a required field
            maxLength: 280
        },
        createdAt: {
            // type: Date,
            // default: Date.now,
            // get: (date) => {
            //     if (date) return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()} at ${new Date(date).toLocaleTimeString()}`;
            // get: `${formatDate} at ${formatTime},
            // }
            type: String,
            default: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()} at ${new Date().toLocaleTimeString()}`,
        },
        username: { //this will be found in the req.params when creating a new thought to keep track of which user created it
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thoughts = model('thoughts', thoughtSchema)

module.exports = Thoughts;