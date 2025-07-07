const express = require('express')

const router = express.Router()

const { email,
    syncAuth0User,
    deleteUser,
} = require('../controllers/authController');
const checkJwt = require('../middleware/authMiddleware');


router.post('/email', email);


router.post('/auth0/sync', checkJwt, syncAuth0User);

router.delete('/account/profile/delete', checkJwt, deleteUser);





module.exports = router