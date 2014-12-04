'use strict';
//https://www.youtube.com/watch?v=c_ohDPWmsM0
var Memory = {
    
    imgRandom: [],
    
    
    go: function(){
        var row = 4;
        var col = 4;
        var done = row + col;
        
        
        Memory.imgRandom.push(RandomGenerator.getPictureArray(row, col));
        
        Memory.tableCreate(row, col); //skickar värderna över hur lång den skall vara till table-func
        Memory.click();

        console.log('slumpade nummer '+Memory.imgRandom);
        
    },

    tableCreate: function(c, r){
        var cards = document.querySelector('#cards');

        var tbl     = document.createElement('table');
        var tblBody = document.createElement('tbody');

        for (var j = 0; j < c; j++) {
            var row = document.createElement('tr');
            //.setAttribute('class', j) // Göra ny klass så att klickmetoden fungerar?

            for (var i = 0; i < r; i++) {
                var cell = document.createElement('td');   
                var img = document.createElement('img');
                var count = ((j * r) + i);
                
                img.setAttribute('src', 'pics/0.png');
                img.setAttribute('a', ''+Memory.imgRandom[0][count]+'');

                cell.appendChild(img);
                row.appendChild(cell)
                
                
            }
            tblBody.appendChild(row);
            
        }
        tbl.appendChild(tblBody);
        cards.appendChild(tbl);
        
       
    },
    opend: [],
    timeout: undefined,
    score: 0,
    picValue: 0,
//KLICK FUNKTIONER
    click: function(){
        var cards = document.querySelector('table');
        cards.addEventListener('click', function(e){
            var klickedNode = e.target; // bilden vi klickade på
            console.log("Klickar och vår opend är "+Memory.opend.length);
            Memory.picValue = klickedNode.getAttribute('a');//variabel som håller koll på bildens värde
            Memory.flip(e, Memory.picValue); //Skickas till function som vänder korten
            //Memory.write();
        });
    },
    
    flip: function(e){
        
        if(Memory.opend.length < 2){//om vi öppnat mindre än två brickor
            if(Memory.opend.length < 1){ //om vi bara öppnat en bricka
                klickedNode.setAttribute('src', src);//Ger frågetecknet en  bild

            }
        }
        
        
           for(var i = 0; i <= Memory.imgRandom[0].length; i++){ //loopar alla ifsatserna
                var src = 'pics/'+i+'.png';//dimentionella arraysns nr 
                var klickedNode = e.target;
                
                
                if(klickedNode.getAttribute('a') == i){ //Om bildens klass har det slumpadenummret
                    Memory.opend.push(klickedNode);//pushar första brickan till array
                    klickedNode.setAttribute('src', src);//Ger bilden en annan source och därför en annan bild
                    
                    console.log("opend = " + Memory.opend[i] + " i = " + i);
                    // if(Memory.opend[1] == i){
                    //     //Memory.score++;
                    //     clearTimeout(Memory.timeout);
                    // }else{
                    //     Memory.timeout = setTimeout(Memory.timer, 1000, klickedNode);
                    // }
                    
                }
                
           }
    },
    timer: function(klickedNode){
        klickedNode.setAttribute('src', 'pics/0.png');//bilden återställs efter en sek
    },
    write: function(){
        var points = document.querySelector('#points');
        var p = document.querySelector('p');
        p.innerHTML = "Poäng "+(Memory.score);
        
    }
   
    
    
};
window.onload = Memory.go;