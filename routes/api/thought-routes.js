const router = require('express').Router();
const {
    getThoughts,
    createThought,
    // getOneThought,
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction
} = require('../../controllers/thought-controller')

//Route to here: /api/thoughts

//GET all thoughts & POST new thought
router
    .route('/')
    .get(getThoughts)
    .post(createThought);

//GET one thought by ID, update thought by ID, and DELETE thought by ID
// router
//     .route('/:thoughtId')
//     .get(getOneThought)
//     .put(updateThought)
//     .delete(deleteThought);

//POST new reaction & DELETE reaction
// router
//     .route('/:thoughtId/reactions')
//     .post(createReaction)
//     .delete(deleteReaction)

module.exports = router;