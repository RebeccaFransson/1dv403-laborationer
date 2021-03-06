"use strict";

RF222CZ.Desktop = function(){
   this.content = document.querySelector('#content');//public
   //this.statusX = document.querySelector('.statusX');
   
};
//lägger till appar t skrivbordet
RF222CZ.Desktop.prototype.addApp = function(pic, app, namn, colorbot, colortop, w, h){//lägga till img, onklick på a. skickar till det js som skall skapa appen
    
    //skapar bilder och lägger till attribut till menyn + tooltip
    var img = document.createElement('img');
    img.setAttribute('src', pic);
    img.setAttribute('width', '50px');
    img.setAttribute('height', '50px');
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'tooltip');
    a.setAttribute('title', namn);
    this.meny = document.querySelector('#meny')
    this.meny.appendChild(a);
    a.appendChild(img);
    
    var self = this;//spara gamla this som är knappen
    
    //skapar fönster med appen man klickat på skcikar med appens egenskaper
    a.onclick = function(){
        var wind = new RF222CZ.Window(pic, self, namn, colorbot, colortop, w, h);//fönstret
        var photo = new app(wind);//appen
        
    };
};
   
RF222CZ.Desktop.prototype.startTime = function(){//ta bort kommentarerna ifall du vill se sekunder.
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    //var s=today.getSeconds();
    m = checkTime(m);
    document.querySelector('#time').innerHTML = h+":"+m; //+":"+s;
    var t = setTimeout(function(){RF222CZ.Desktop.prototype.startTime()},500);

    function checkTime(i) {
        if (i<10) {i = "0" + i}  // lägger till nolla om under tio
        return i;
    }
};
