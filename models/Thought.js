const { Schema, model } = require('mongoose');
const Reactions = require('./Reaction');
const { formatDate, formatTime } = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, "Please enter a thought"],
            // minLength: 1, *this is unnecessary because it is already a required field
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return `${formatDate(date)} ${formatTime(date)}`;
            },
        },
        username: { //this will be found in the req.params when creating a new thought to keep track of which user created it
            type: String,
            required: true,
        },
        reactions: [Reactions],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thoughts = model('thoughts', thoughtSchema)

module.exports = Thoughts;