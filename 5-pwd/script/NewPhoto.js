"use strict";
//skapa nytt galleri
function NewPhoto(wind){
    
    var xhr = new XMLHttpRequest();
    
        //document.createElement('img').setAttribute('src', img.URL);

            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                    wind.statusX.innerHTML = ' ';//tar bort 'laddar..' när allt hämtas
                    console.log('Hittades');
                    var array = JSON.parse(xhr.responseText);
                    
                    var arrayWidth = [];
                    var arrayHeight = [];
                    var picBox;
                    
                    //loop för alla thumbnails width och height
                    for(var i = 0; i < array.length; i++){
                       //spara thumb width och height i arrayer
                        arrayWidth.push(array[i].thumbWidth);
                        arrayHeight.push(array[i].thumbHeight);
                    }
                    //loop för att skapa thumb-bilderna
                    for(var i = 0; i < array.length; i++){
                        console.log('i forloop- skapar bilderna');
                        var pic = document.createElement('img');
                        pic.setAttribute('src', array[i].thumbURL);
                        pic.setAttribute('width', array[i].thumbWidth);
                        pic.setAttribute('height', array[i].thumbHeight);
                        var picA = document.createElement('a');
                        picA.setAttribute('href', '#');
                        picBox = document.createElement('div');
                        picBox.setAttribute('class', 'picBox');
                        //skapar tooltip
                        picA.setAttribute('class', 'tooltip');
                        var toolSpan = document.createElement('span');
                        toolSpan.innerHTML = 'Klicka för att förstora i nytt fönster <br> Högerklicka för att sätta som bakgrund';
                        
                        wind.content.appendChild(picA);
                        picA.appendChild(picBox);
                        picBox.appendChild(pic);
                        picA.appendChild(toolSpan);
                        
                        //sätter max height och width från den sparade arrayn i CSS 
                        //tvungen att skapa ny variabel.
                        var picBoxWidth = Math.max.apply(Math, arrayWidth)+'px';
                        var picBoxHeight = Math.max.apply(Math, arrayHeight)+'px';
                        picBox.style.width = picBoxWidth;
                        picBox.style.height = picBoxHeight;
                        //picBox.setAttribute('width', picBoxWidth);
                        //picBox.setAttribute('height', picBoxHeight);
                         
                        pic.data = array[i]; //sparar arrayn så att jag kan få ut värdena för den stora bilden sen
                        
                        
                    }
                    
                    
                    //nytt fönster för stora bilder 
                    wind.content.addEventListener('click', function(e){
                           var klickedNode = e.target;
                           if(klickedNode.getAttribute('src') != null){
                               var picwin = new Window(wind.desktop, 'Förstorngsglas', '#858585', '#5f5f5f', klickedNode.data.width, klickedNode.data.height);//skapa nytt fönster med bilden Skapar fönstret på=(wind.desktop = skrivbordet)
                               
                               var picBig = document.createElement('img');
                                picBig.setAttribute('src', klickedNode.data.URL);
                                picBig.setAttribute('width', klickedNode.data.width);
                                picBig.setAttribute('height', klickedNode.data.height);
                                //se till att fönstret anpassar sig efter bilden
                                
                            picwin.content.appendChild(picBig);
                           }
                    });
                    
                    //högerklick = ändra bakgrundsbild   
                    wind.content.addEventListener('contextmenu', function(e){
                        e.preventDefault(); 
                        var klickedNodeRight = e.target;
                         if(klickedNodeRight.getAttribute('src') != null){
                             document.querySelector('body').style.backgroundImage = 'url('+klickedNodeRight.data.URL+')';
                             document.querySelector('body').style.backgroundSize = 'auto';
                         }
                        
                        console.log('högerklick');
                    });
                
                }else if(xhr.status === 404){
                        console.log('Hittades ej');
                }else{
                    wind.statusX.innerHTML = 'Laddar... ';
                    var load = document.createElement('img');
                    load.setAttribute('src', 'pics/load.gif');
                    load.setAttribute('width', '150px');
                    load.setAttribute('height', '100px');
                    wind.statusX.appendChild(load);
                    console.log(load);

                    
                }
            };
            
            xhr.open('GET', 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/', true); //asynkromt anrop
            
            xhr.send(null);
            
            
    console.log('skapar nytt galleri');
}