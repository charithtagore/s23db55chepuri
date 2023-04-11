var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var earphone_controller = require('../controllers/earphone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// earphone ROUTES ///
// POST request for creating a earphone.
router.post('/earphone', earphone_controller.earphone_create_post);
// DELETE request to delete earphone.
router.delete('/earphone/:id', earphone_controller.earphone_delete);
// PUT request to update earphone.
router.put('/earphone/:id', earphone_controller.earphone_update_put);
// GET request for one earphone.
router.get('/earphone/:id', earphone_controller.earphone_detail);
// GET request for list of all earphone items.
router.get('/earphone', earphone_controller.earphone_list);
module.exports = router;