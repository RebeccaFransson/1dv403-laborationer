"use strict";

window.onload = function(){//här ska vara en metod som kommer trigga igång de andra metoderna
    var mess = new Message("meddelandet", new Date()); //skickar värden till konstruktor som skapar nytt objekt
    
    alert("konstrukot m. meddelande och tid: "+mess);
    alert("meddelandet: "+mess.getText);
    mess.setText("byter text");
    alert("Nytt meddelande: "+mess);
};
