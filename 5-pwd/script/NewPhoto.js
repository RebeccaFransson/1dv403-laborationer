"use strict";

function NewPhoto(wind){
    
    var xhr = new XMLHttpRequest();
    
        //document.createElement('img').setAttribute('src', img.URL);

            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                    //wind.bottom.innerHTML = ' ';//tar bort 'laddar..' när allt hämtas
                    console.log('Hittades');
                    var array = JSON.parse(xhr.responseText);
                    
                    for(var i = 0; i < array.length; i++){//skapar tum-bilderna
                        console.log('i forloop- skapar bilderna');
                        var pic = document.createElement('img');
                        pic.setAttribute('src', array[i].thumbURL);
                        pic.setAttribute('width', array[i].thumbWidth);
                        pic.setAttribute('height', array[i].thumbHeight);
                        var picA = document.createElement('a');
                        picA.setAttribute('href', '#');
                        var picBox = document.createElement('div');
                        picBox.setAttribute('class', 'picBox');
                        wind.content.appendChild(picA);
                        picA.appendChild(picBox);
                        picBox.appendChild(pic);
                        
                        pic.data = array[i]; //sparar arrayn så att jag kan få ut värdena för den stora bilden sen
                    }
                    wind.content.addEventListener('click', function(e){
                           var klickedNode = e.target;
                           if(klickedNode.getAttribute('src') != null){
                               var picwin = new Window(wind.desktop, 'Förstorngsglas');//skapa nytt fönster med bilden Skapar fönstret på=(wind.desktop = skrivbordet)
                               
                               var picBig = document.createElement('img');
                                picBig.setAttribute('src', klickedNode.data.URL);
                                picBig.setAttribute('width', klickedNode.data.width);
                                picBig.setAttribute('height', klickedNode.data.height);
                                //se till att fönstret anpassar sig efter bilden
                                
                            picwin.content.appendChild(picBig);
                           }
                    });
                        
                    
                
                }else if(xhr.status === 404){
                        console.log('Hittades ej');
                }else{
                    var load = document.createElement('img');
                    load.setAttribute('src', 'pics/load.gif');
                    load.setAttribute('width', '100px');
                    load.setAttribute('height', '50px');
                    wind.bottom.appendChild(load);

                    wind.bottom.innerHTML = 'Laddar...';
                }
            };
            
            xhr.open('GET', 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); //asynkromt anrop
            
            xhr.send(null);
            
            
    console.log('skapar nytt galleri');
}//skapa nytt galleri