//Create a new express router
const express = require('express'),
router = express.Router(),

//Include controllers into it
mainController = require('./controllers/main.controller'),
searchController = require('./controllers/search.controller'),
showController = require('./controllers/show.controller')

//Handle the redirection
router.get('/', mainController.showHome);
router.get('/search',searchController.showSearchResults);
router.get('/shows/:id',showController.showDetails);

//export router
module.exports = router;
