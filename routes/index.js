var nespressoJSON = require('../nespresso.json');

// home
exports.home = function(req, res) {

	var nespresso = nespressoJSON;
	var product = nespresso.shop;

	res.render('home', {
		title: "Nespresso",
		shop: product,
		machine: nespresso.machine
	});
};

// notFound
exports.notFound = function(req, res) {
	var nespresso = nespressoJSON;
	var product = nespresso.shop;

	res.render('notFound', {
		title: "This is not the page you are looking for",
		shop: product,
		machine: nespresso.machine
	});
};