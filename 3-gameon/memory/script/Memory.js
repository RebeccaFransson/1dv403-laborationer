'use strict';

var Memory = {
    
    imgRandom: [],
    
    
    go: function(){
        var row = 4;
        var col = 4;
        Memory.imgRandom.push(RandomGenerator.getPictureArray(row, col));
        
        Memory.tableCreate(row, col, Memory.imgRandom); //skickar värderna över hur lång den skall vara till table-func
        Memory.click(Memory.imgRandom);


        console.log('slumpade nummer '+Memory.imgRandom);
        
    },

    tableCreate: function(c, r, array){
        //body reference 
        var cards = document.querySelector('#cards');

        // create elements <table> and a <tbody>
        var tbl     = document.createElement('table');
        var tblBody = document.createElement('tbody');

        // cells creation
        for (var j = 0; j < c; j++) {
            // table row creation
            var row = document.createElement('tr');
            //.setAttribute('class', j) // Göra ny klass så att klickmetoden fungerar?

            for (var i = 0; i < r; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                var cell = document.createElement('td');   
                var img = document.createElement('img');
                var count = ((j * r) + i);
                
                img.setAttribute('src', 'pics/0.png');
                img.setAttribute('class', ''+array[0][count]+'');

                cell.appendChild(img);
                row.appendChild(cell)
                
                
            }
            //row added to end of table body
            tblBody.appendChild(row);
            
        }
        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        cards.appendChild(tbl);
        
       
    },
//KLICK FUNKTIONER
    click: function(array){
        var cards = document.querySelector('table');
        cards.addEventListener('click', function(e){
            Memory.flip(array, e);
        });
    },
    counter: undefined,
    flip: function(array, e){
        
           for(var i = 0; i <= 8; i++){
                var src = 'pics/'+i+'.png';//dimentionella arraysns nr 
                var klickedNode = e.target;
                
                //loopar alla ifsatserna
                if(klickedNode.getAttribute('class') == i){ 
                    klickedNode.setAttribute('src', src);//Ger bilden en annan source och därför en annan bild
                    //var counter = undefined
                    Memory.counter = setInterval(Memory.timer, 1000, klickedNode);
                    console.log("COUNTER ÄR I IF + " + Memory.counter);
                    
                    /*
                    if(counter > 1){
                        clearInterval(counter);
                    }*/
                    
                }
                
           }
    },
    timer: function(klickedNode){
        klickedNode.setAttribute('src', 'pics/0.png');//Ger bilden en annan source och därför en annan bild
        console.log("COUNER ÄR I TIMER + " + Memory.counter);
        clearInterval(Memory.counter)
        
    }
    
    
    
};
window.onload = Memory.go;