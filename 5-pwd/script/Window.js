"use strict";

function Window(desk, namn){
    var template = document.querySelector('#temp');
    var windowtemp = template.content.querySelector('.window');
    var w = windowtemp.cloneNode(true);
    w.querySelector('.topbar').innerHTML = namn + w.querySelector('.topbar').innerHTML;
    desk.content.appendChild(w);
    
}
