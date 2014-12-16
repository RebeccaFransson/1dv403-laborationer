"use strict";

window.onload = function(){
   var desk = new Desktop();
   desk.addApp('pics/photo.png', NewPhoto, 'Bilder'); // skickar med bildsökväg och appen
   desk.addApp('pics/game.png', NewMemory, 'Memory'); // skickar med bildsökväg och appen

   var wind = new Window(desk, name);
   
   
   
};//använda wind, när man klickar på en knapp.

//om knapp klickad på. om target är memory starta newMmory.