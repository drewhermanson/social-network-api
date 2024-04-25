const { User, Thought } = require('../models');

module.exports = {
  // Get all Thoughts
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find()
      .select('-__v');

      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a Thoughts
  async getSingleThoughts(req, res) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.thoughtsId })
      .select('-__v');

      if (!thoughtData) {
        return res.status(404).json({ message: 'No thoughts with that name' });
      }

      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Thoughts
  async createThoughts(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { thoughts: thoughtData._id } },
        { new: true }
      );
      
      if (!userData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a Thought
  async deleteThoughts(req, res) {
    try {
      const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtsId });

      if (!thoughtData) {
        res.status(404).json({ message: 'No Thoughts with that ID' });
      }

      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a Thoughts
  async updateThoughts(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thoughtData) {
        res.status(404).json({ message: 'No Thoughts with this id!' });
      }

      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Reaction
  async createReaction(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $addToSet: { reactions: req.body } }
      );

      if (!thoughtData) {
        res.status(404).json({ message: 'No Thoughts with this id!' });
      }

      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a Reaction
  async deleteReaction(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thoughtData) {
        res.status(404).json({ message: 'No Thoughts with this id!' });
      }

      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
