var express = require('express');
var controller = require('../controllers/group.controller');


var router = express.Router();

router.get('/:groupId', controller.index);
router.post('/member', controller.member);

router.post("/create", controller.create);

module.exports = router;