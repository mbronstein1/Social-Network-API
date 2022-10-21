const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: [true, "Please enter a thought"],
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()} at ${new Date(date).toLocaleTimeString()}`;
        }
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
    toJSON: {
        virtuals: true,
    }
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought;