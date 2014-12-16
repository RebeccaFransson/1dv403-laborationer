"use strict";

window.onload = function(){
   var desk = new Desktop();
   
   desk.startTime();
   
   desk.addApp('pics/photo.png', NewPhoto, 'Bilder'); // skickar med bildsökväg och appen
   desk.addApp('pics/game.png', NewMemory, 'Memory'); // skickar med bildsökväg och appen
   //desk.addApp('pics/chat.png', NewMemory, 'CatChat');

   //var wind = new Window(desk, 'Prov');
   
   
   
};