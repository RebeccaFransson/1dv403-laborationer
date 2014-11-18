"use strict";

var makePerson = function(persArr){
	

	var arrName = persArr.map(function (persArr){return persArr.name;}); //gör en ny array med bara namnen
	var arrAge = persArr.map(function (persArr){return persArr.age;}); //gör en ny array med bara nummer

	function minAge(){
		return Math.min.apply(Math, arrAge);
		//sortera och ta ut lägsta värdet
	}
	function maxAge(){
		return Math.max.apply(Math, arrAge);
		//sortera och ta ut högsta
	}
	function averageAge(){
		return Math.round(arrAge.reduce(function(previous, current){return previous + current;})/persArr.length); //plussar ihop alla arrayn värden med hjälp av reduce-metoden
		//valueOf(maxAge() + minAge());
		//maxAge - minAge
	}
	function names(persArr){
		return arrName.sort(function(a, b){return a.localeCompare(b)}).join(", ").toString(); //jämnför a med b, för att kunna få bokstäverna i rätt ordning, tex ÅÄÖ
		//kalla på name
		//sort i bokstavsordning sepererade med ","
		//och retunera soreterad name
	}

	// Din kod här...
	return {minAge: minAge(), maxAge: maxAge(), averageAge: averageAge(), names: names()};
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
