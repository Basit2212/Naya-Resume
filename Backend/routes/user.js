const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

router.get('/account', verifyToken, (req, res) => {
  res.json({
    message: 'You are authorized!',
    user: req.user
  });
});

module.exports = router;
