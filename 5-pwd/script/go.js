"use strict";

var RF222CZ = RF222CZ || {};

RF222CZ.run = function(){
   
   console.log(window);
   var desk = new RF222CZ.Desktop();
   
   desk.startTime();
   
   desk.addApp('pics/photo.png', RF222CZ.NewPhoto, 'Bilder', '#E8C07B','#e0ab50'); // skickar med bildsökväg och appen, namn och färger
   desk.addApp('pics/game.png', RF222CZ.NewMemory, 'Memory', '#d7807d','#CB5A56', 350, 447); // skickar med bildsökväg och appen
   desk.addApp('pics/rss.png', RF222CZ.NewRSS, 'RSS-flöde', '#C7E4AB','#8B9F77', 460); // skickar med bildsökväg och appen

};
window.onload = RF222CZ.run;