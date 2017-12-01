const request = require('request');
module.exports = {
	showSearchResults: function (req, res) {
		console.log(req.query.q);
		if (!req.query.q) {
			res.status(500);
			res.send({ "Error": "You have not pass the search keyword." });
			console.log("You have not pass the search keyword.");
		}
		request.get({ url: "http://api.tvmaze.com/search/shows?q=" + req.query.q }, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var JSONObject = JSON.parse(body);
				//console.log(JSONObject[0]); return;
				res.render('pages/search-results', { results: JSONObject, topicHead: 'Search' });
			}else{
				console.log('Error while getting the results!')
			}
		});
	}
};
