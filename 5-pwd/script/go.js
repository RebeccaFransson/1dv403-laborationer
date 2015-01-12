"use strict";

var RF222CZ = RF222CZ || {};

RF222CZ.run = function(){
   
   console.log(window);
   var desk = new RF222CZ.Desktop();
   
   desk.startTime();
   
   desk.addApp('pics/photo.png', RF222CZ.NewPhoto, 'Bilder', '#FA9D55','#F06A47'); // skickar med bildsökväg och appen, namn och färger
   desk.addApp('pics/game.png', RF222CZ.NewMemory, 'Memory', '#EF6293','#E9407B', 350, 412); // skickar med bildsökväg och appen
   desk.addApp('pics/rss.png', RF222CZ.NewRSS, 'RSS-flöde', '#0092B3','#2864AD', 460); // skickar med bildsökväg och appen

};
window.onload = RF222CZ.run;