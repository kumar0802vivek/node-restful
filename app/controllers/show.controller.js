const request = require('request');
module.exports = {
	showDetails: function (req, res) {
        if (!req.params.id) {
			res.status(500);
			res.send({ "Error": "You have not pass id in URL." });
			console.log("You have not pass id in URL.");
		}
		request.get({ url: "http://api.tvmaze.com/shows/" + req.params.id+"?embed[]=cast&embed[]=episodes"}, function (error, response, body) {
            if (!error && response.statusCode == 200) {
				var JSONObject = JSON.parse(body);
				//console.log(JSONObject._embedded.cast[5]);
                res.render('pages/item-details', { results: JSONObject, topicHead: JSONObject.name });
			}else{
				console.log('Error while getting the results!')
			}
		});
	}
};
