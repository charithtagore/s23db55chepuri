var express = require('express');
const earphone_controlers= require('../controllers/earphone');
var router = express.Router();

/* GET home page. */
router.get('/', earphone_controlers.earphone_view_all_Page );

module.exports = router;
