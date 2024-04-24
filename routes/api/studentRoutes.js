const router = require('express').Router();
const {
  getUsers,
  getSingleUsers,
  createUsers,
  deleteUsers,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers).post(createUsers);

// /api/users/:usersId
router.route('/:usersId').get(getSingleUsers).delete(deleteUsers);

// /api/users/:usersId/friends/:friendId
router.route('/:usersId/friends/:friendId').delete(removeAssignment);

module.exports = router;
