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
// Handle earphone delete form on DELETE.
exports.earphone_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: earphone delete DELETE ' + req.params.id);
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