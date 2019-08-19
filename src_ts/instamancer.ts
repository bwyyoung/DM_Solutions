import * as Instamancer from "instamancer";

module.exports =
	{
		foo: function ()
		{
			test_instamancer()
		}
	}


function test_instamancer()
{
	const options: Instamancer.IOptions =
	{
		total: 100000,
		enableGrafting: true,
		silent: false,
		fullAPI: true
	};

	const hashtag = Instamancer.hashtag("sgmom", options);
	(async () => {
		for await (const post of hashtag)
		{
			console.log(JSON.stringify(post));
		}
	})();
}



/*
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});*/