"use strict";
/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */
 


var messageBoard = {//här ska vara en metod som kommer trigga igång de andra metoderna

    messages: ['med1', 'med2'],

    init: function(){//privat function
        var click = document.getElementById("textvalue"); //texten
        var submit = document.getElementById("send"); //knappen
        
        submit.addEventListener("click", function(a){//när vi klickar på submit hoppar vi 
        messageBoard.outputMessage(a);//till outputMessage funktionenegenskapen 
        })
         //skapa nytt objekt med text och datum
         
         
        /*console.log("konstrukot m. meddelande och tid: "+mess);
        console.log("meddelandet: "+mess.getText());
        mess.setText("byter text");
        console.log("Nytt meddelande: "+mess);
        console.log("datum: "+mess.getDate().getHours()+":"+ mess.getDate().getMinutes()+":"+ mess.getDate().getSeconds());
        */
    },
        
    outputMessage: function(a){
        a.preventDefault(); //formuläret skickas inte vidare.
        messageBoard.messages.push(new Message("meddelandet", new Date())) // Läser in texten från textrutan och skickar till funktionen "newObjekt"
        
    },
     newObjekt: function(){
        
    },
    
    makeMessage: function(){//skapa nytt meddelande objekt när send knapp klickad på.
        
        
    }
    
   
    
    
};
    //console.log(messageBoard.messages[1].getText());
window.onload = messageBoard.init;


/*var message = ['Ge inte ut ditt lösenord till någon']; //första meddelandet
message.push('här är ett meddelande');
console.log("Meddelanden i arrayn: "+message);
console.log("längd på arrayn: "+message.length);
console.log("Meddelanden nummer två: "+message);*/