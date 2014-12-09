'use strict';
//https://www.youtube.com/watch?v=c_ohDPWmsM0 - inte till någon hjälp...
var Memory = {
    
    imgRandom: [],
    times: 0,
    pic1: "",
    pic2: "",
    klickedNode: [],
    target1: "",
    target2: "",
    score: 0,
    timeout: undefined,
    picValue: 0,
    
    go: function(){
        var row = 4;
        var col = 4;
        //var done = row + col;
        
        
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
                var a = document.createElement('a');
                var img = document.createElement('img');
                var count = ((j * r) + i);
                
                img.setAttribute('src', 'pics/0.png');
                img.setAttribute('a', ''+Memory.imgRandom[0][count]+'');
                a.setAttribute('href', '#');
                //a.setAttribute('a', ''+Memory.imgRandom[0][count]+'');
                //a.setAttribute('src', 'pics/0.png');

                cell.appendChild(a);
                a.appendChild(img);
                row.appendChild(cell)
                
                
            }
            tblBody.appendChild(row);
            
        }
        tbl.appendChild(tblBody);
        cards.appendChild(tbl);
        
       
    },
    
    
//KLICK FUNKTIONER
    click: function(){
        var cards = document.querySelector('table');
        cards.addEventListener('click', function(e){
            console.log("Klickar och vår opend är "+Memory.times);
            Memory.flip(e); //Skickas till function som vänder korten
            Memory.write();
            e.preventDefault();
        });
        
    },
    
    flip: function(e){
        var link;
        var img = e.target.firstChild;
         //for(var i = 0; i < Memory.imgRandom.length; i++){
           //  console.log('forloop');
         if(e.target.getAttribute('href') === '#'){ //Om det är en sträng.   Ifsatsen skall bestämma vad link ska betyda, antingen tangent eller mus
                 console.log('tangentklick på a-tag '+e.target);
                 link = e.target; 
             }else{
                 console.log('musklick på IMG '+e.target);
                 link = img;//img
             }
             
        // } //Måste ha en ifsats. annars fungerar inte både mus och tangentbord.
        
        
        Memory.klickedNode.push(link.getAttribute('a')); // sparar bilden vi klickade på
        //var link = e.target;
        //var alink = e.target.firstChild;
        console.log("arrayn med värden på de vi klickat på "+Memory.klickedNode);
        Memory.picValue = link.getAttribute('a');//variabel som håller koll på bildens värde
        var src = "pics/"+Memory.picValue+".png";
        console.log("värdet på bilden vi klickade på: "+Memory.picValue);
        
        if(Memory.times < 2){//om vi öppnat mindre än två brickor
            if(Memory.times < 1){ //om vi bara öppnat en bricka
                Memory.times++;
                console.log("Här har vi bara klickat på en");
                link.setAttribute('src', src);//Ger frågetecknet en  bild
                Memory.pic1 = Memory.picValue;// pic1 tilldelas den värdet för den första bilden
                Memory.target1 = link; //sparar den klickade noden
                console.log("Skriver ut target1:  "+Memory.target1);
                
            }else{
                Memory.times++;
                console.log("Här har vi bara klickat på TVÅ");
                link.setAttribute('src', src);
                Memory.pic2 = Memory.picValue;// andra bilden
                Memory.target2 = e.target; //sparar den klickade noden
                
                }if(Memory.times === 2 && Memory.pic1 === Memory.pic2 && Memory.target1 != Memory.target2){//lika
                    Memory.score++;
                    console.log("Dessa två är lika "+Memory.pic1+" är det samma som "+Memory.pic2+" MITT SCORE ÄR: "+Memory.score);
                    Memory.times = 0;
                }else if(Memory.times === 2){//ej lika vända igen
                    //Memory.target1.setAttribute('src', 'pics/0.png');
                    //Memory.target2.setAttribute('src', 'pics/0.png');
                    console.log("Sätter frågetäcken utan timer");
                    //Memory.times = 0;
                    setTimeout(Memory.timer, 1000);
                }
            }
            if(Memory.times > 2){
                    setTimeout(Memory.timer, 1000);
                    console.log("Gissat två ggr ej lika sätter timer");
                }
                    
           
    },
    
    timer: function(){
        console.log("Vänder tillbaka");
        if(Memory.pic1 != Memory.pic2){//om de ej är lika vänd tillbaka dem båda
        console.log("Ej lika");
            //if(Memory.target1.getAttribute('a') === Memory.pic1 && Memory.target2.getAttribute('a') === Memory.pic2){ 
                console.log("Vänder tillbaka klickednode med attribut "+ Memory.klickedNode[0]+"Som är samma som"+Memory.pic1);
                Memory.target1.setAttribute('src', 'pics/0.png');//bilderna återställs efter en sek
                Memory.target2.setAttribute('src', 'pics/0.png');
                Memory.times = 0;
            //}
        }else if(Memory.target1 != Memory.target2){//lika vänta 1 sec fortsätt spelet
        console.log("Väldigt lika, ny timer");
            setTimeout(1000);
            Memory.times = 0;
        }else{
            Memory.target1.setAttribute('src', 'pics/0.png');//bilderna återställs efter en sek
            Memory.target2.setAttribute('src', 'pics/0.png');
            Memory.times = 0;
        }
        
    },
     write: function(){
         var p = document.querySelector('p');
         p.innerHTML = "Antal poäng:<br>"+(Memory.score);
         if(Memory.score === 8){
             var done = document.querySelector('#done');
             done.innerHTML = "Grattis! Du har vunnit, och klarade det på  försök!";
         }
        
     },
};
window.onload = Memory.go;