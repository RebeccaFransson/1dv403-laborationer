"use strict";

//Följande kod ger adressen för att hämta RSS-feeden från svt: 
//"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.svtplay.se/agenda/rss.xml")

function NewRSS(wind){
    console.log('skapar RSS-läsare');
    
    var xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                    //skapa divtaggar och lägg i text och rubik i dem
                    var quest = JSON.parse(xhr.responseText);
                    
                   
                
                
                }else if(xhr.status === 404){
                        console.log('Hittades ej');
                }else{
                    wind.statusX.innerHTML = 'Laddar... ';
                    var load = document.createElement('img');
                    load.setAttribute('src', 'pics/load1.gif');
                    load.setAttribute('width', '20px');
                    load.setAttribute('height', '20px');
                    wind.statusX.appendChild(load);
                    console.log(load);
                }
            
            
            xhr.open('GET', "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.svtplay.se/agenda/rss.xml"), true); //asynkromt anrop
            
            xhr.send(null);
            
}
