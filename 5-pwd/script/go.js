"use strict";

window.onload = function(){
   var desk = new Desktop();
   
   desk.startTime();
   
   desk.addApp('pics/photo.png', NewPhoto, 'Bilder', '#E8C07B','#e0ab50'); // skickar med bildsökväg och appen, namn och färger
   desk.addApp('pics/game.png', NewMemory, 'Memory', '#d7807d','#CB5A56'); // skickar med bildsökväg och appen
   //desk.addApp('pics/rss.png', NewRSS, 'RSS-flöde', '#C7E4AB','#8B9F77'); // skickar med bildsökväg och appen
//desk.addApp('pics/chat.png', NewMemory, 'CatChat');

   //var wind = new Window(desk, 'Google', '#e0ab50','#E8C07B');
   
};