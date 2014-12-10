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
    link1:"",
    link2: "",
    score: 0,
    count: 0,
    timeout: undefined,
    picValue: 0,
    row: 0,
    col: 0,
    
    
    go: function(){
        
        var submit = document.getElementById("send");//knappen
        console.log(submit);
        submit.addEventListener("click", function(a){
            a.preventDefault();
            Memory.row = document.querySelector("#nr1").value;
            Memory.col = document.querySelector("#nr2").value;
            
            Memory.imgRandom.push(RandomGenerator.getPictureArray(Memory.row, Memory.col));
            Memory.tableCreate(Memory.row, Memory.col);
        });

        console.log('slumpade nummer '+Memory.imgRandom);
    },

    tableCreate: function(c, r){
        
        var cards = document.querySelector('#cards');

        var tbl     = document.createElement('table');
        var tblBody = document.createElement('tbody');

        for (var j = 0; j < c; j++) {
            var row = document.createElement('tr');
            
            for (var i = 0; i < r; i++) {
                var cell = document.createElement('td');  
                var a = document.createElement('a');
                var img = document.createElement('img');
                var count = ((j * r) + i);
                
                img.setAttribute('src', 'pics/0.jpg');
                img.setAttribute('a', ''+Memory.imgRandom[0][count]+'');
                a.setAttribute('href', '#');
                a.setAttribute('a', ''+Memory.imgRandom[0][count]+'');

                cell.appendChild(a);
                a.appendChild(img);
                row.appendChild(cell)
                
                a.addEventListener('click', Memory.flip);
            }
            tblBody.appendChild(row);
            
        }
        tbl.appendChild(tblBody);
        cards.appendChild(tbl);
        
       
       document.querySelector('form').setAttribute('class', 'hidden');
    },
    
    flip: function(){
        
        var link = this;
        Memory.klickedNode.push(link.getAttribute('a')); // sparar bilden vi klickade på
        var alink = this.firstChild; //bilden
        Memory.picValue = link.getAttribute('a');//variabel som håller koll på bildens värde
        var src = "pics/"+Memory.picValue+".jpg";
        
        if(Memory.times < 2){//om vi öppnat mindre än två brickor
        Memory.count++;
        
            if(Memory.times < 1){ //om vi bara öppnat en bricka
                Memory.times++;
                alink.setAttribute('src', src);//Ger frågetecknet en  bild
                Memory.pic1 = Memory.picValue;// pic1 tilldelas den värdet för den första bilden
                Memory.target1 = alink;//sparar den klickade bilden
                Memory.link1 = link;//sparar den klickade a-taggen
                
                this.removeEventListener('click', Memory.flip);
                
            }else{
                Memory.times++;
                alink.setAttribute('src', src);
                Memory.pic2 = Memory.picValue;// andra bilden
                Memory.target2 = alink; //sparar den klickade bilden
                Memory.link2 = link;//sparar den klickade a-taggen
                this.removeEventListener('click', Memory.flip);
                
                }if(Memory.times === 2 && Memory.pic1 === Memory.pic2 && Memory.target1 != Memory.target2){//lika
                    Memory.score++;
                    Memory.times = 0;
                }else if(Memory.times === 2){//ej lika vända igen
                    setTimeout(Memory.timer, 1000);
                }
            }
            if(Memory.times > 2){
                    setTimeout(Memory.timer, 1000);
                }
        Memory.write();
    },
    
    timer: function(){
        if(Memory.pic1 != Memory.pic2){//om de ej är lika vänd tillbaka dem båda
                Memory.target1.setAttribute('src', 'pics/0.jpg');//bilderna återställs efter en sek
                Memory.target2.setAttribute('src', 'pics/0.jpg');
                Memory.times = 0;
                Memory.link1.addEventListener('click', Memory.flip);
                Memory.link2.addEventListener('click', Memory.flip);
            //}
        }else if(Memory.target1 === Memory.target2){//lika vänta 1 sec fortsätt spelet
        console.log("Väldigt lika, ny timer");
            setTimeout(1000);
            Memory.times = 0;
        }else{
            Memory.target1.setAttribute('src', 'pics/0.jpg');//bilderna återställs efter en sek
            Memory.target2.setAttribute('src', 'pics/0.jpg');
            Memory.times = 0;
            Memory.target1.addEventListener('click', Memory.flip);
            Memory.target2.addEventListener('click', Memory.flip);
        }
        
    },
     write: function(){
         console.log('row och col är '+(Memory.row*Memory.col)+'  score är '+Memory.score);
         var points = document.getElementById('points');
         var p = points.querySelector('p');
         p.innerHTML = "Antal poäng:<br>"+Memory.score;
         if(Memory.score === (Memory.row*Memory.col)/2){
             
             var done = document.querySelector('#done');
             done.innerHTML = "Grattis! Du har vunnit, och klarade det på "+(Memory.count/2)+" försök!";
         }
        
     },
};
window.onload = Memory.go;