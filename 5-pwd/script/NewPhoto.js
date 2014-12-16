"use strict";

function NewPhoto(wind){
    
    var xhr = new XMLHttpRequest();
    
        //document.createElement('img').setAttribute('src', img.URL);

            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                    wind.bottom.innerHTML = ' ';//tar bort 'laddar..' när allt hämtas
                    console.log('Hittades');
                    var array = JSON.parse(xhr.responseText);
                    
                    //loopa array
                    
                    for(var i = 0; i < array.length; i++){//skapar tum-bilderna
                        console.log('i forloop- skapar bilderna');
                        var pic = document.createElement('img');
                        pic.setAttribute('src', array[i].thumbURL);
                        pic.setAttribute('width', array[i].thumbWidth);
                        pic.setAttribute('height', array[i].thumbHeight);
                        var picBox = document.createElement('div');
                        picBox.setAttribute('class', 'picBox');
                        wind.content.appendChild(picBox);
                        picBox.appendChild(pic);
                        
                        //wind.content.innerHTML = pic;
                    }
                    
                    //wind.content.innerHTML = array[1].URL;
                    //.getElementById('send').onclick = function(e){//hämtar ut knapp, sätter klick
                    
                    //e.preventDefault();
                
                }else if(xhr.status === 404){
                        console.log('Hittades ej');
                }else{
                    // var load = document.createElement('img');
                    // load.setAttribute('src', 'pics/load.gif');
                    // load.setAttribute('width', '100px');
                    // load.setAttribute('height', '50px');

                    wind.bottom.innerHTML = 'Laddar...';
                }
            };
            
            xhr.open('GET', 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); //asynkromt anrop
            
            xhr.send(null);
            
            
    console.log('skapar nytt galleri');
}//skapa nytt galleri