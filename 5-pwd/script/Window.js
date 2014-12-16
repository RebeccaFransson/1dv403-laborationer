"use strict";

function Window(desk, namn){
    var template = document.querySelector('#temp');
    var windowtemp = template.content.querySelector('.window');
    this.w = windowtemp.cloneNode(true);
    this.w.querySelector('.topbar').innerHTML = namn + this.w.querySelector('.topbar').innerHTML;
    desk.content.appendChild(this.w);
    
    this.content = this.w.querySelector('.content');
    this.bottom = this.w.querySelector('.status');
    
    var self = this;
    var close = this.w.querySelector('.close');
    close.onclick = function(){//klick på stänga-knappen, skickar till prototypen.close.
        self.close();
    };
}
Window.prototype.close = function(){//ploickar bort kopian
    this.w.parentNode.removeChild(this.w);
};