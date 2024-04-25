const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController.js');

// /api/Thoughts
router.route('/').get(getThoughts);

router.route('/:userId').post(createThoughts)

// /api/Thoughts/:ThoughtsId
router.route('/:thoughtsId').get(getSingleThoughts).put(updateThoughts).delete(deleteThoughts);

// /api/Thoughts/:ThoughtsId/reactions 
router.route('/:thoughtsId/reactions').post(createReaction).delete(deleteReaction);


module.exports = router;
