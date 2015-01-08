"use strict";

function Window(pic, desk, namn, colorbot, colortop, w, h){
    //default storlek 
    w = w || "350";
    h = h || "410";
    
    console.log('w: '+w+' h: '+h)
    this.desktop = desk;
    var template = document.querySelector('#temp');
    var windowtemp = template.content.querySelector('.window');
    this.w = windowtemp.cloneNode(true);
     
    this.content = this.w.querySelector('.content');
    this.statusX = this.w.querySelector('.statusX');
    
    //sätter storlek på nytt fönster
    this.content.style.width = w+'px';
    this.content.style.height = h+'px';
    
    //skickar med top och left till funktionen som sätter style
    this.moveWind(10, 10);
    
    var topPic = document.createElement('img');
    topPic.setAttribute('src', pic);
    topPic.setAttribute('width', '25px');
    topPic.setAttribute('height', '25px');
    var topbar = this.w.querySelector('.topbar');
    topbar.appendChild(topPic);
    
    topbar.innerHTML += namn;
    topbar.setAttribute('style', 'background-color:'+colortop);//sätt färg på  topbar
    this.w.querySelector('.statusX').setAttribute('style', 'background-color:'+colorbot);
    desk.content.appendChild(this.w);
    
    
    
    var self = this;//gör om this så vi kan använda detta this i functionen under(utan att det ska bli this i den funktionen)
    //stänger fönstret
    var close = this.w.querySelector('.close');
    close.onclick = function(){
        self.close();
    };
    
    this.focus();
    //on klick på hela fönstret z-index = 99
    this.w.addEventListener('click', function(e){
        self.focus();
        console.log('klick på fönstret');
    });
    
    // var resize = this.w.querySelector('.resize').querySelector('img');
    // console.log(resize);
    // resize.addEventListener('mousedown', function(e){
    //     console.log('inne i list');
    //     self.w.style.resize = 'both';
    // });
    // resize.addEventListener('mouseup', function(e){
    //     console.log('inne i list ip');
    //     self.w.style.resize = '';
    // });
}

Window.prototype.close = function(){//plockar bort kopian utav templaten
    this.w.parentNode.removeChild(this.w);
};

Window.prototype.moveWind = function(t, l){
    //sätter top och left på första window
    var top = Window.globalTop + 29;
    var left = Window.globalLeft + 29;
    console.log('top: '+top+' left: '+left)
    
    this.w.style.top = top+'px';
    this.w.style.left = left+'px';
    
    //sätter globala variablem som top och left
    Window.globalTop = top;
    Window.globalLeft = left;
};

// global variabel med top och left
Window.globalTop = 0;
Window.globalLeft = 0;
Window.globalIndex = 0;

Window.prototype.focus = function(){
    //on klick på hela fönstret z-index = 99
    var indexCount = 1 + Window.globalIndex;
    this.w.style.zIndex = indexCount;
    
    Window.globalIndex = indexCount;
};
//http://tech.pro/tutorial/650/javascript-draggable-elements   DRAGEBLE ELEMENTS