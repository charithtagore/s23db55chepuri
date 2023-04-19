var earphone = require('../models/earphone');
// List of all earphone
// List of all earphone
exports.earphone_list = async function (req, res) {
    try {
        theearphone = await earphone.find();
        res.send(theearphone);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific earphone.
// for a specific earphone.
exports.earphone_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await earphone.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle earphone create on POST.
exports.earphone_create_post = async function (req, res) {
    console.log(req.body)
    let document = new earphone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"earphone_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.color = req.body.color;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle earphone delete on DELETE.
exports.earphone_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await earphone.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle earphone update form on PUT.
exports.earphone_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: earphone update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.earphone_view_all_Page = async function (req, res) {
    try {
        theearphone = await earphone.find();
        res.render('earphone', { title: 'earphone Search Results', results: theearphone });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle earphone update form on PUT.
exports.earphone_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await earphone.findById(req.params.id)
        // Do updates of properties
        if (req.body.brand)
            toUpdate.brand = req.body.brand;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle a show one view with id specified by query
exports.earphone_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earphone.findById( req.query.id)
    res.render('earphonedetail',
   { title: 'earphone Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for creating a earphone.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earphone_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earphonecreate', { title: 'earphone Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a earphone.
// query provides the id
exports.earphone_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await earphone.findById(req.query.id)
    res.render('earphoneupdate', { title: 'earphone Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.earphone_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await earphone.findById(req.query.id)
    res.render('earphonedelete', { title: 'earphone Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };