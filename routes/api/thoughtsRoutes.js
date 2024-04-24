const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/thoughtsController.js');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/Thoughts/:ThoughtsId/reactions 
router.route('/:thoughtsId/reactions')
.post(createReaction)
.delete(deleteReaction);



module.exports = router;
