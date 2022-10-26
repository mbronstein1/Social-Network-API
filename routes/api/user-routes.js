const router = require('express').Router();
const {
    getUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
    // addNewFriend,
    // deleteFriend,
} = require('../../controllers/user-controller');

//Route to here: /api/users

// GET all users & POST new user
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// GET one user by ID, update user by ID, and DELETE user by ID
router
    .route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

// POST new friend to user's friend list & DELETE friend from user's friend list
// router
//     .route('/:userId/friends/:friendId')
//     .post(addNewFriend)
//     .delete(deleteFriend);


module.exports = router;