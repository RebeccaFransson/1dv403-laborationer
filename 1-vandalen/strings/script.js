"use strict";

window.onload = function(){

	function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null; //en funktion som fungerar som nullOrWhiteSpace
}

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){ 
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		var p1 = "";
		console.log("funkar hit iallfall...");
		for (var i = 0; i < str.length; i++) {//kolla varje bokstav i strängen
		
		if(isEmptyOrSpaces(str)){
			return ["Skriv ett meddelande i textfältet!"]
		}

		else if(str[i] == str[i].toUpperCase()){
		console.log("toUpperCase");
			p1 += str[i].toLowerCase();

		}
		else if(str[i] == str[i].toLowerCase()){
		console.log("toLowerCase" + p1);
			p1 += str[i].toUpperCase(); 
		}

		};
		return p1.replace(/A/gi, "#"); //ersätter alla a, stora som små, med #
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		
		//else{
		//	return ["Nu blev det något galet!"]
		//}
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
