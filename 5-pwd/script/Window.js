"use strict";

var RF222CZ = RF222CZ || {};

RF222CZ.Window = function(pic, desk, namn, colorbot, colortop, w, h, scroll){
    
    //default storlek 
    w = w || "350";
    h = h || "410";
    
    this.desktop = desk;
    var template = document.querySelector('#temp');//template
    
    //lösning till att template.content ej fungerar i IE
    var windowTemplate;
    var tmp = document.documentMode;
    if(tmp){
         windowTemplate = template.querySelector(".window");
    }else{
         windowTemplate = template.content.querySelector(".window");
    }
    
    //Kopierar min window-klass från templaten
    this.w = windowTemplate.cloneNode(true);
    
    //publica variabler
    this.content = this.w.querySelector('.content');
    this.statusX = this.w.querySelector('.statusX');
    this.closeButton = this.w.querySelector('.close');
    
    //sätter storlek på nytt fönster
    this.content.style.width = w+'px';
    this.content.style.height = h+'px';
    
    //tvungen att lägga till en scroll för bilderna i förtoringsglaset.
    this.content.style.overflow = scroll;
    
    //skickar med höjden och bredden på fönstret till functionen 
    //som kommer flytta fönstrerna innanför skrivbordet
    this.moveWind(h, w, this.desktop);
    
    
    var topPic = document.createElement('img');
    topPic.setAttribute('class', 'app');
    topPic.setAttribute('src', pic);
    topPic.setAttribute('width', '25px');
    topPic.setAttribute('height', '25px');
    var topbar = this.w.querySelector('.topbar');
    topbar.appendChild(topPic);
    
    //namn, färg
    topbar.innerHTML += namn;
    topbar.setAttribute('style', 'background-color:'+colortop);//sätt färg på  topbar
    this.w.querySelector('.statusX').setAttribute('style', 'background-color:'+colorbot);
    
    //lägger till fösntret på skrivbordet
    desk.content.appendChild(this.w);
    
    var self = this;//gör om this så vi kan använda detta this i functionen under(utan att det ska bli this i den funktionen)
   
   //stänger fönstret
    this.closeButton = this.w.querySelector('.close');
    this.closeButton.onclick = function(){
        self.close();
    };
    //sätter focus på önnat fönster
    this.focus();
    
    //klick någonstans på ett fönster kallar på focus() 
    //som tar reda på senaste z-index och lägger på ett till det klickade fönstret
    this.w.addEventListener('mousedown', function(e){
        self.focus();
    });
    
}

//plockar bort kopian utav templaten
RF222CZ.Window.prototype.close = function(){
    this.w.parentNode.removeChild(this.w);
};

//funtionen som flyttar fönstrer
RF222CZ.Window.prototype.moveWind = function(h, w, desk){
    
    //FÖRSTA FÖNSTRET
    var top = RF222CZ.Window.globalTop + 10;
    var left = RF222CZ.Window.globalLeft + 10;
    
   //sätter top och left på nästa nya window
    this.w.style.top = top+'px';
    this.w.style.left = left+'px';
   
   //resten av fönsterna
    top = RF222CZ.Window.globalTop + 35;
    left = RF222CZ.Window.globalLeft + 35;
    
   //kolla utanför top+höjd större än desktop.content.clientHeight
    if((parseInt(top)+parseInt(h))>(this.desktop.content.clientHeight-(this.desktop.meny.clientHeight*2.2))){
        //utanför nedåt sätt globalTop som 0
        RF222CZ.Window.globalTop = 0;
    }else{
        RF222CZ.Window.globalTop = top;
        RF222CZ.Window.globalLeft = left;
        if((parseInt(left)+parseInt(w))>(this.desktop.content.clientWidth)){
            //utanför år höger sätt globalleft som 0
            RF222CZ.Window.globalLeft = 0;
        }else{
            RF222CZ.Window.globalTop = top;
            RF222CZ.Window.globalLeft = left;
        }
    }
};

// global variabel med top och left
RF222CZ.Window.globalTop = 0;
RF222CZ.Window.globalLeft = 0;
RF222CZ.Window.globalIndex = 0;

RF222CZ.Window.prototype.focus = function(){
    //on klick på hela fönstret z-index = 99
    var indexCount = 1 + RF222CZ.Window.globalIndex;
    this.w.style.zIndex = indexCount;
    
    RF222CZ.Window.globalIndex = indexCount;
};

//http://tech.pro/tutorial/650/javascript-draggable-elements   DRAGEBLE ELEMENTS