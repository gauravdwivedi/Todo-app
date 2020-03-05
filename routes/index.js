const express = require('express');
const homeController = require('../controllers/home_controller');
const router = express.Router();
router.get('/', homeController.home);
router.post('/createtask', homeController.create);
router.get('/deletetask', homeController.delete);
module.exports = router;