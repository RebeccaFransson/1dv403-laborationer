"use strict";

window.onload = function(){


var add = document.getElementById("message"); //div-taggen där meddelandena ligger i
var messages = add.getElementsByTagName("ul");

console.log("nodetype: "+add.nodeType);

var write = function(str){
    
    console.log("Kommer in i write-func");
    
    var newLi = document.createElement("li");// skapa list element
    var text = document.createTextNode(str); //texten
    
    console.log("texten: "+str);
    
    newLi.appendChild(text);//lägger texten i listan
    console.log("lägger texten i listan: ");
    messages.HTMLInputElement
   // add.innerHTML +=  messages.appendChild(newLi);//Lägger listan till ul-taggen
	}


    var p = document.getElementById("value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		write(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
		
	
	});
	
};