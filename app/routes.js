//Create a new express router
const express = require('express'),
router = express.Router(),

//Include controllers into it
mainController = require('./controllers/main.controller'),
searchController = require('./controllers/search.controller')

//Handle the redirection
router.get('/', mainController.showHome);
router.get('/search',searchController.showSearchResults);

//export router
module.exports = router;
