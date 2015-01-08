"use strict";

function Desktop(){
   this.content = document.querySelector('#content');//public
   //this.statusX = document.querySelector('.statusX');
   
};
//lägger till ikoner t programmen
Desktop.prototype.addApp = function(pic, app, namn, colorbot, colortop){//lägga till img, onklick på a. skickar till det js som skall skapa(tex newPhoto)
    
    //skapar bilder och lägger till attribut till menyn + tooltip
    var img = document.createElement('img');
    img.setAttribute('src', pic);
    img.setAttribute('width', '50px');
    img.setAttribute('height', '50px');
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'tooltip');
    a.setAttribute('title', namn);
    document.querySelector('#meny').appendChild(a);
    a.appendChild(img);
    
    var self = this;//spara gamla this som är knappen
    
    //skapar fönster med appen man klickat på
    a.onclick = function(){
        var wind = new Window(pic, self, namn, colorbot, colortop);
        var photo = new app(wind);
        
    };
};
   
Desktop.prototype.startTime = function(){//ta bort kommentarerna ifall du vill se sekunder.
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    //var s=today.getSeconds();
    m = checkTime(m);
    document.querySelector('#time').innerHTML = h+":"+m; //+":"+s;
    var t = setTimeout(function(){Desktop.prototype.startTime()},500);

    function checkTime(i) {
        if (i<10) {i = "0" + i}  // lägger till nolla om under tio
        return i;
    }
};
