const express = require('express');
const router = express.Router();
const checkJwt = require('../middleware/authMiddleware'); // Auth0 middleware

router.get('/account', checkJwt, (req, res) => {
  res.json({
    message: 'You are authorized!',
    user: req.user, // contains decoded Auth0 token data
  });
});

module.exports = router;
