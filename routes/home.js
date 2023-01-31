const express = require('express')
const {homeView} = require('../controllers/homecontroller')
const router = express.Router();
router.get('/', homeView);
module.exports = router;
