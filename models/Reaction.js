const { Schema } = require('mongoose');
// const { formatDate, formatTime } = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
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
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

module.exports = reactionSchema;