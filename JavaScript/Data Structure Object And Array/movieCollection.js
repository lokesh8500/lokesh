//create an object containing title, year, actors(array) print every actor
//Concepts: Nested arrays, Objects

let movie1 = {
	Title: "Avengers",
	Year: 2015,
	Actors: ["IronMan","BlackWidow","CaptiainAmarica","Vision","SpiderMan","Hulk"]
};
console.log(movie1.Title);
movie1.Actors.forEach(Actors=> {
	console.log(Actors);
});
