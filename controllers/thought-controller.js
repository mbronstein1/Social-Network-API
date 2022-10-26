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
    },
    getOneThought(req, res) {
        Thoughts.findOne({_id: req.params.thoughtId})
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err))
    },
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body,
            { new: true }
            )
            .then((results) => res.status(200).json({message: 'Successfully updated thought', results}))
    },
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => 
                !thought
                ? res.status(404).json({ message: 'No thought found with this id!'})
                : User.findOneAndUpdate(
                    { username: thought.username },
                    { $pull: { thoughts: req.params.thoughtId}}
                    )
                    .then((user) => 
                        !user
                            ? res.status(404).json({ message: 'Thought deleted but no username associated with this thought id'})
                            : res.status(200).json('Thought successfully deleted')
                        )
                )
                .catch((err) => res.status(500).json(err))
    }
};