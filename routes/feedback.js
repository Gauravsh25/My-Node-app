const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ success: true, message: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
