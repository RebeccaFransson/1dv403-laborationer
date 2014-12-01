"use strict";
/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */
 


var messageBoard = {//här ska vara en metod som kommer trigga igång de andra metoderna

    messages: [],//skapar tom array
    
    init: function(){//privat function
        
        var submit = document.getElementById("send"); //knappen
        
        submit.addEventListener("click", function(a){//när vi klickar på submit hoppar vi 
        messageBoard.newObjekt(a);//till newObject funktionenegenskapen 
        });
                     
    },
      
    newObjekt: function(a){//här skapas ett nytt objekt t arrayn
        var text = document.querySelector("textarea"); //texten
        a.preventDefault(); //formuläret skickas inte vidare.
        
        if( text.value !== ""){
            messageBoard.messages.push(new Message(text.value, new Date())); // skickar värderna till konstruktorn
            var lastPost = messageBoard.messages.length - 1;
            messageBoard.outputMessage(lastPost);//skickar meddelandets id till metoden där jag skriver ut meddelanden
            messageBoard.countMessage();//räknar meddelanden

			text.value = "";
		}
    },
    
    outputMessage: function(messageId){//här skrivs meddelandet ut
        var add = document.querySelector("ul");//alla ul taggar i message-div
        
        //skapa nya div taggar och får ids som ska läggas till i add sedan
        //var newUl = document.createElement("ul");
        var newLi = document.createElement("li");
        var newDelete = document.createElement("div");//skapar delete - div tag
        var newA = document.createElement("a");
        var newA2 = document.createElement("a"); //delete och time kunde inte dela samma a-tag
        var newTime = document.createElement("div");
        var newPText = document.createElement("p");
        var newPDate = document.createElement("p");
        
        //sätter attribut till de nya taggarna
        newDelete.setAttribute("class", "delete");
        newA.setAttribute("href", "#");
        newA2.setAttribute("href", "#");
        newTime.setAttribute("class", "time");
        newPText.setAttribute("class", "text");
        newPDate.setAttribute("class", "date");
        
        
        //lägger till de nya taggarna
        //add.appendChild(newUl);
        add.appendChild(newLi); 
        newLi.appendChild(newDelete);
        newDelete.appendChild(newA);
        newLi.appendChild(newTime);
        newTime.appendChild(newA2);
        newLi.appendChild(newPText);
        newLi.appendChild(newPDate);
        
        
        //Lägger till texten i p taggen
        newPText.innerHTML += messageBoard.messages[messageId].getHTMLText();
        console.log("texten: "+messageBoard.messages[messageId].getHTMLText());
        
        //Lägger till datument i en annan p tagg
        newPDate.innerHTML += messageBoard.messages[messageId].getDateText();
        //console.log("Datumet: "+messageBoard.messages[messageId].getHTMLDate());
        
        
        //radera meddelanden
        newA.onclick = function(e){
			e.preventDefault();
			if( confirm("Vill du verkligen radera meddelandet?")){
				messageBoard.remove(messageId);
			}
		}
        
        newA2.onclick = function(e){
			e.preventDefault();
			alert(messageBoard.messages[messageId].toString());
		}
    },
    
    countMessage: function(){//lägger till antal i existerande divtagg
        
        var count = messageBoard.messages.length;
        document.querySelector("#count").innerHTML = "Antal meddelanden: "+count;
        console.log("hur många meddelanden: "+count);
    },
    
    remove: function(messageId){
		messageBoard.messages.splice(messageId, 1); //på postionen messageId, ta bort ett item
		messageBoard.readAllMessages(messageId);
		messageBoard.countMessage();
		
	},
	
	readAllMessages: function(messageId){
	    
		//tar bort alla meddelande(li) i ul-taggen
		document.getElementById("messageTag").innerHTML = "";
		//document.querySelectorAll("li").replace(/<(?:.|\n)*?>/gm, '')
        console.log("tar bort alla meddelanden ");
        
		//loppar igenom obektet och skriver ut dem som är kvar
		for (var i = 0; i < messageBoard.messages.length; i++) {
			messageBoard.outputMessage(i);
		};
		console.log("skriver ut meddelanden som är kvar");
		

	},
   
    
    
};
    //console.log(messageBoard.messages[1].getText());
window.onload = messageBoard.init;


/*var message = ['Ge inte ut ditt lösenord till någon']; //första meddelandet
message.push('här är ett meddelande');
console.log("Meddelanden i arrayn: "+message);
console.log("längd på arrayn: "+message.length);
console.log("Meddelanden nummer två: "+message);*/