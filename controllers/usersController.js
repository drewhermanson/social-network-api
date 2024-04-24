const { User, Thought } = require('../models');

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const userData = await User.find().populate('students');
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUsers(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.usersId })
        .populate('thoughts');

      if (!userData) {
        return res.status(404).json({ message: 'No User with that ID' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUsers(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a User
  async deleteUsers(req, res) {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.usersId });

      if (!userData) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      const thoughtsData = await Thought.findOneAndUpdate(
        { user: req.params.usersId },
        { $pull: { thoughts: req.params.usersId } },
        { new: true }
      );

      if (!thoughtsData) {
        return res.status(404).json({
          message: 'user deleted, but no thoughts found',
        });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update a User
  async updateUsers(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.usersId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userData) {
        res.status(404).json({ message: 'No User with this id!' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a friend
  async addFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.usersId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!userData) {
        return res.status(404).json({ message: 'No User with this id!' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove a friend
  async removeFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.usersId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!userData) {
        return res.status(404).json({ message: 'No User with this id!' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
