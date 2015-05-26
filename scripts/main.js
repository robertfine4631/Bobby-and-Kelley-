//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

var places = [
{ country: 'Australia', city: 'Brisbane'},
{ country: 'Spain', city: 'Barcelona'},
{ country: 'Mexico', city: 'Durango'}
];


function forEach(list, callback) {
	for (var i = 0; i < list.length; i++){
		callback(list[i]);
	}
};


forEach(places, function(place) {
	console.log('I want to go to ' + place.city + ', ' + place.country);
});


// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.

// map
function map (list, callback) {
	
	var newArr = [];

	forEach(list, function (li) {

		newArr.push(callback(li));

	});

	return newArr;
}



var cities = map(places, function (place) {

	return place.city + " is cool";
 
});

console.log(cities);


// filter
function  filter (list, callback) {
	
	var newArr = [];

	forEach(list, function (li) {

		newArr.push(callback(li));

	});

	return newArr;
}



var countries = map(places, function (place) {

	return place.country + " is a pretty swell place to go!";
 
});

console.log(countries);

// reduce


function reduce (x, y){
	var sum = 0;
	forEach(
		sum + y;
		)
	return sum;
} 
	

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [B] Drives, Person [A] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////



// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) { /* Do stuff*/ }

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2