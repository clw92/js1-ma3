// question 1

const sum = (a, b) => a + b;

//question 2

var url = 'https://api.rawg.io/api/games?genres=sports';

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		loadGames(json);
	})
	.catch(function(error) {
		console.dir(error);
	});

function loadGames(json) {
	console.dir(json);
	const games = json.results;
}

function jsn(json) {
	for (i = 0; 1 < 5; i++) {
		console.log(json.results);
	}
}
//question 3

var sentence = 'These cats are outrageous.';

var changedsentence = sentence.replace(/cats/, 'giraffes');

console.log(changedsentence);

//question 5

const container = document.querySelector('.container');
const button = document.querySelector('.button');

container.removeChild(button);

//question 7

var url2 = 'https://api.rawg.io/api/games/3801';

fetch(url2)
	.then(function(response) {
		return response.json();
	})
	.then(function rating(json) {
		const rating2 = document.querySelector('.rating');
	});
