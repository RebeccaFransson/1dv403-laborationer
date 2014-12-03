'use strict';
//https://www.youtube.com/watch?v=c_ohDPWmsM0
var Memory = {
    
    imgRandom: [],
    
    
    go: function(){
        var row = 4;
        var col = 4;
        
        
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
                img.setAttribute('class', ''+Memory.imgRandom[0][count]+'');

                cell.appendChild(img);
                row.appendChild(cell)
                
                
            }
            tblBody.appendChild(row);
            
        }
        tbl.appendChild(tblBody);
        cards.appendChild(tbl);
        
       
    },
    che: undefined,
    timeout: undefined,
    score: 0,
//KLICK FUNKTIONER
    click: function(){
        var times = 0;
        var cards = document.querySelector('table');
        cards.addEventListener('click', function(e){
                //times++;         //plussar på antal ggr gissade
            if(times < 2 ){
                console.log("times är "+times);
                Memory.flip(e);
                Memory.write();
                times++;
            }else {
                setTimeout(function() {
                    times = 0;
                    Memory.che = 0;
                }, 2000);
            }
            
            
        });
        
    },
    
    flip: function(e){
        
           for(var i = 0; i <= Memory.imgRandom[0].length; i++){ //loopar alla ifsatserna
                var src = 'pics/'+i+'.png';//dimentionella arraysns nr 
                var klickedNode = e.target;
                

                
                if(klickedNode.getAttribute('class') == i){ //Om bildens klass har det slumpadenummret
                    
                    klickedNode.setAttribute('src', src);//Ger bilden en annan source och därför en annan bild
                    
                    console.log("che = " + Memory.che + " i = " + i);
                    if(Memory.che == i){
                        Memory.score++;
                        clearTimeout(Memory.timeout);
                    }else{
                        Memory.timeout = setTimeout(Memory.timer, 1000, klickedNode);
                    }
                    Memory.che = i;
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