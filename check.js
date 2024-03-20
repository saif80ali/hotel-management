// Vn2d2EuTHXgPOxwI31HAcKU6CPnSJ7hC
var unirest = require("unirest");

var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

req.query({
	"q": "London,uk",
	"lat": "0",
	"lon": "0",
	"callback": "test",
	"id": "2172797",
	"lang": "null",
	"units": "\"metric\" or \"imperial\"",
	"mode": "xml, html"
});

req.headers({
	"x-rapidapi-key": "b89dc30c01msh208bd1b4b4c4706p1ab919jsn903dde0110f3",
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});