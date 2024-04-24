const router = require('express').Router();
const {
  getUsers,
  getSingleUsers,
  createUsers,
  deleteUsers,
  updateUsers,
  addFriend,
  removeFriend,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers).post(createUsers);

// /api/users/:usersId
router.route('/:usersId').get(getSingleUsers).put(updateUsers).delete(deleteUsers);

// /api/users/:usersId/friends/:friendId
router.route('/:usersId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
