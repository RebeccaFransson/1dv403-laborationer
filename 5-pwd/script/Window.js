"use strict";

function Window(desk, namn, colorbot, colortop, w, h){
    //default storlek 
    w = w || "350";
    h = h || "410";
    
    this.desktop = desk;
    var template = document.querySelector('#temp');
    var windowtemp = template.content.querySelector('.window');
    this.w = windowtemp.cloneNode(true);
    
    //sätter storlek på nytt fönster
    this.w.style.width = w+'px';
    this.w.style.height = h+'px';
    
    //skickar med top och left till funktionen som sätter style
    this.moveWind(10, 10);
    
    this.w.querySelector('.topbar').innerHTML = namn + this.w.querySelector('.topbar').innerHTML;
    this.w.querySelector('.topbar').setAttribute('style', 'background-color:'+colortop);//sätt färg på  topbar
    this.w.querySelector('.statusX').setAttribute('style', 'background-color:'+colorbot);
    desk.content.appendChild(this.w);
    
    this.content = this.w.querySelector('.content');
    this.statusX = this.w.querySelector('.statusX');
    
    var self = this;
    var close = this.w.querySelector('.close');
    close.onclick = function(){//klick på stänga-knappen, skickar till prototypen.close.
        self.close();
    };
}

Window.prototype.close = function(){//plockar bort kopian utav templaten
    this.w.parentNode.removeChild(this.w);
};

Window.prototype.moveWind = function(t, l){
    //sätter top och left på första window
    var top = Window.globalTop + 29;
    var left = Window.globalLeft + 20;
    console.log('i funk top: '+top+' left: '+left)
    
    this.w.style.top = top+'px';
    this.w.style.left = left+'px';
    
    //sätter globala variablem som top och left
    Window.globalTop = top;
    Window.globalLeft = left;
};

// global variabel med top och left
Window.globalTop = 0;
console.log('top: '+Window.globalTop);
Window.globalLeft = 0;

//http://tech.pro/tutorial/650/javascript-draggable-elements   DRAGEBLE ELEMENTS