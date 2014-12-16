"use strict";

function Desktop(){
   this.content = document.querySelector('#content');//public
   
};

Desktop.prototype.addApp = function(pic, app, namn){//lägga till img, onklick på a. skickar till det js som skall skapa(tex newPhoto)
    var img = document.createElement('img');
    img.setAttribute('src', pic);
    img.setAttribute('width', '50px');
    img.setAttribute('height', '50px');
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    document.querySelector('#meny').appendChild(a);
    a.appendChild(img);
    
    var self = this;//spara gamla this
    
    a.onclick = function(){
        var wind = new Window(self, namn);
        var photo = new app();
        
    }
}