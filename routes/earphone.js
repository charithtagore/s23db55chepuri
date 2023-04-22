var express = require('express');
const earphone_controlers= require('../controllers/earphone');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET home page. */
router.get('/', earphone_controlers.earphone_view_all_Page );

/* GET detail earphone page */
router.get('/detail', earphone_controlers.earphone_view_one_Page);

/* GET create earphone page */
router.get('/create',secured, earphone_controlers.earphone_create_Page);

/* GET create update page */
router.get('/update',secured, earphone_controlers.earphone_update_Page);

/* GET delete earphone page */
router.get('/delete',secured, earphone_controlers.earphone_delete_Page);

module.exports = router;
