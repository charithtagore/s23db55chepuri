var express = require('express');
const earphone_controlers= require('../controllers/earphone');
var router = express.Router();

/* GET home page. */
router.get('/', earphone_controlers.earphone_view_all_Page );

/* GET detail earphone page */
router.get('/detail', earphone_controlers.earphone_view_one_Page);

/* GET create earphone page */
router.get('/create', earphone_controlers.earphone_create_Page);

/* GET create update page */
router.get('/update', earphone_controlers.earphone_update_Page);

/* GET delete earphone page */
router.get('/delete', earphone_controlers.earphone_delete_Page);

module.exports = router;
