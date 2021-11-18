var tea = require("../models/tea");

// List of all teas
exports.tea_list = function (req, res) {
    res.send("NOT IMPLEMENTED: tea list");
};


// Handle tea create on POST.
exports.tea_create_post = async function (req, res) {
    let document = new tea();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.tea_type = req.body.tea_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    console.log(req.body);
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// List of all teas
exports.tea_list = async function (req, res) {
    try {
        theteas = await tea.find();
        res.send(theteas);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific tea. 
exports.tea_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await tea.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};



exports.tea_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await tea.findById(req.params.id)
        // Do updates of properties 
        if (req.body.tea_type)
            toUpdate.tea_type = req.body.tea_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
// Handle tea delete on DELETE.
exports.tea_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await tea.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.tea_view_all_Page = async function (req, res) {
    try {
        theteas = await tea.find();
        res.render('tea', { title: 'Tea Search Results', results: theteas });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};





exports.tea_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('teacreate', { title: 'Tea Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

exports.tea_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await tea.findById(req.query.id)
        res.render('teaupdate', { title: 'Tea Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.tea_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await tea.findById(req.query.id)
        res.render('teadelete', {
            title: 'Tea Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.tea_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await tea.findById(req.query.id)
        res.render('teadetail',
            { title: 'Tea Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};