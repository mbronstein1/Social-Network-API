const { User } = require('../models');

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
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('thoughts')
        .then((results) => {
            res.status(200).json(results)
        })
        .catch((err) => res.status(500).json(err))
    },
};