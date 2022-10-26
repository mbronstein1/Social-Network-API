const { User, Thoughts } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find({})
            .select('-__v')
            .populate('thoughts')
            .then((results) => {
                res.status(200).json(results)
            })
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((results) => res.status(200).json(results))
            .catch((err) => res.status(500).json(err))
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .then((results) => {
                res.status(200).json(results)
            })
            .catch((err) => res.status(500).json(err))
    },
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
            .then((results) => res.status(200).json(results))
            .catch((err) => res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : Thoughts.findOneAndDelete({username: user.username})
            )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'User deleted but no thought associated with this username' })
                    : res.status(200).json('User successfully deleted')
            )
            .catch((err) => res.status(500).json(err))
    }
};