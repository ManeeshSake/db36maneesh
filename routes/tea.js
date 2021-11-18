var express = require('express'); 
const tea_controlers= require('../controllers/tea'); 
var router = express.Router();
// GET request for one tea.
router.get('/tea/:id', tea_controlers.tea_detail); 
 
/* GET teas */ 
router.get('/', tea_controlers.tea_view_all_Page ); 

/* GET detail tea page */
router.get('/detail', tea_controlers.tea_view_one_Page);

router.put('/tea/:id', tea_controlers.tea_update_put);

router.get('/create', tea_controlers.tea_create_Page);

router.get('/update', tea_controlers.tea_update_Page);

router.get('/delete', tea_controlers.tea_delete_Page);

module.exports = router; 