const express = require('express')
const {goodbyeView} = require('../controllers/goodbyecontroller')
const router = express.Router();
router.get('/', goodbyeView);
module.exports = router;
