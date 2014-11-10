"use strict";

window.onload = function(){

	
	var birthday = function(date){ //om ej formen ÅÅÅÅ-MM-DD kasta undantag

		if(!isNaN(new Date(date).getTime())) {

			var now = new Date();
			var birth = new Date(date);
			
			console.log(date);
			console.log(birth - now);
			console.log(birth.getFullYear());
			console.log("now = " + now.getDay() + " birth = " + birth.getDay());
			if(now < birth){
				birth.setFullYear(now.getFullYear());//För att uträkningen ska fungera så sätter jag birth-året till året dagens datum har, på så sätt kan vi räkna med mån och dag.
			}	
			else if (now > birth){ 
				birth.setFullYear(now.getFullYear()+1);
			}
				var numberOfDays = Math.ceil((birth - now)/(1000*60*60*24)); //skillnaden
			console.log("dagar tills"+numberOfDays);
			console.log("dag idag"+now.getDay());
			console.log("dag födelse"+birth.getDay());
			
			if(numberOfDays === 365){
					return 0;
				}
			if(numberOfDays > 365){
				return (numberOfDays-356);
			}
			else{
				return (numberOfDays);
			}


		}
		else{
			throw new Error("Du måste skriva ÅÅÅÅ-MM-DD, prova igen!")
		}
		
			// Din kod här.
	};
	// ------------------------------------------------------------------------------
//if(now <= birth){
//				console.log("här blir birth year = now year+1");
//				birth.setFullYear(now.getFullYear()); 
//				console.log(now.getDay());
//			}


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
