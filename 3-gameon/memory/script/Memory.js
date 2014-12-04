'use strict';
//https://www.youtube.com/watch?v=c_ohDPWmsM0
var Memory = {
    
    imgRandom: [],
    times: 0,
    pic1: "",
    pic2: "",
    klickedNode: [],
    
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
    
    timeout: undefined,
    score: 0,
    picValue: 0,
//KLICK FUNKTIONER
    click: function(){
        var cards = document.querySelector('table');
        cards.addEventListener('click', function(e){
            console.log("Klickar och vår opend är "+Memory.times);
            Memory.flip(e); //Skickas till function som vänder korten
            //Memory.write();
        });
    },
    
    flip: function(e){
        Memory.klickedNode.push(e.target); // sparar bilden vi klickade på
        var link = e.target;
        Memory.picValue = link.getAttribute('a');//variabel som håller koll på bildens värde
        var src = "pics/"+Memory.picValue+".png";
        console.log("värdet på bilden vi klickade på: "+Memory.picValue);
        
        if(Memory.times < 2){//om vi öppnat mindre än två brickor
            if(Memory.times < 1){ //om vi bara öppnat en bricka
            console.log("Här har vi bara klickat på en");
                link.setAttribute('src', src);//Ger frågetecknet en  bild
                Memory.pic1 = Memory.picValue;// pic1 tilldelas den värdet för den första bilden
                Memory.times++;
            }else{
                console.log("Här har vi bara klickat på TVÅ");
               link.setAttribute('src', src);
                Memory.pic2 = Memory.picValue;// andra bilden
                Memory.times++;
                }if(Memory.times === 2 && Memory.pic1 === Memory.pic2){//lika
                    console.log("Dessa två är lika "+Memory.pic1+" är det samma som "+Memory.pic2);
                }else if(Memory.times === 2){//ej lika vända igen
                    console.log("Gissat två ggr ej lika sätter timer");
                    //klickedNode.setAttribute('src', 'pics/0.png');
                }
            }
            if(Memory.times === 2){
                    setTimeout(Memory.timer, 1000, link);
                }
            
        
        
        //   for(var i = 0; i <= Memory.imgRandom[0].length; i++){ //loopar alla ifsatserna
        //         var src = 'pics/'+i+'.png';//dimentionella arraysns nr 
        //         var klickedNode = link;
                
                
        //         if(klickedNode.getAttribute('a') == i){ //Om bildens klass har det slumpadenummret
        //             Memory.opend.push(klickedNode);//pushar första brickan till array
        //             klickedNode.setAttribute('src', src);//Ger bilden en annan source och därför en annan bild
                    
        //             console.log("opend = " + Memory.opend[i] + " i = " + i);
                    // if(Memory.opend[1] == i){
                    //     //Memory.score++;
                    //     clearTimeout(Memory.timeout);
                    // }else{
                    //     Memory.timeout = setTimeout(Memory.timer, 1000, klickedNode);
                    // }
                    
           
    },
    timer: function(link){
        console.log("Vänder tillbaka");
        if(Memory.pic1 != Memory.pic2){//om de ej är lika vänd tillbaka dem båda
            if(Memory.klickedNode[0].getAttribute('a') == Memory.pic1){ 
                console.log("Vänder tillbaka klickednode med attribut "+ Memory.klickedNode[0]+"Som är samma som"+Memory.pic1);
                link.setAttribute('src', 'pics/0.png');//bilden återställs efter en sek
            }else if(Memory.klickedNode[1].getAttribute('a') == Memory.pic1){
                link.setAttribute('src', 'pics/0.png');//bilden återställs efter en sek
            }
        }
        
    },
    // write: function(){
    //     var points = document.querySelector('#points');
    //     var p = document.querySelector('p');
    //     p.innerHTML = "Poäng "+(Memory.score);
        
    // }
};
window.onload = Memory.go;