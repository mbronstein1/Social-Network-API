const { User, Thoughts } = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thoughts.find({})
            .then((results) => res.status(200).json(results))
            .catch((err) => res.status(500).json(err))
    },
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Thought created, but found no user with that ID.',
                    })
                    : res.json('Created the thought!')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}