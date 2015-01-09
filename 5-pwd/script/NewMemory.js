"use strict";
//skapa nytt memory spel
function NewMemory(wind){
    console.log('skapar memory');
    //lägga in i content
   //gör funktionerna i konstruktor då nås alla variabler som jag skapat här.
   
   var imgRandom = [], times = 0, pic1 = '', pic2='', klickedNode = [], target1='', target2='';
   var link1 = "", link2= "", score= 0, count= 0, timeout = undefined, picValue= 0, row= 0, col= 0;
    
    window.onload = goMem();
    function goMem(){
        console.log('inne i go');
        var submit = document.createElement('input');//knappen
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Räkna ut');
        submit.setAttribute('id', 'send');
        
        //input rutorna
        var nr1 = document.createElement('input');
        nr1.setAttribute('id', 'nr1');
        nr1.setAttribute('placeholder', 'Minst 2, max 4');
        nr1.setAttribute('type', 'text');
        
        var nr2 = document.createElement('input');
        nr2.setAttribute('id', 'nr2');
        nr2.setAttribute('placeholder', 'Minst 2, max 4');
        nr2.setAttribute('type', 'text');
        
        //divtaggar i fönstret
        var cards = document.createElement('div');
        var points = document.createElement('div');
        var done = document.createElement('div');
        
        //lägger in divtaggarna i fönstret
        var memory = document.createElement('div');
        memory.setAttribute('class', 'memory');
        var form = document.createElement('form');
        memory.appendChild(form);
        form.appendChild(submit);
        form.appendChild(nr1);
        form.appendChild(nr2);
        
        wind.content.appendChild(memory);
        
        console.log(submit);
        submit.addEventListener("click", function(a){
            a.preventDefault();
            row = document.querySelector("#nr1").value;
            col = document.querySelector("#nr2").value;
            
            imgRandom.push(RandomGenerator.getPictureArray(row, col));
            tableCreate(row, col, cards);
        });
    }
    
    function tableCreate(c, r, cards){
        
        var tbl     = document.createElement('table');
        var tblBody = document.createElement('tbody');

        for (var j = 0; j < c; j++) {
            var row = document.createElement('tr');
            
            for (var i = 0; i < r; i++) {
                var cell = document.createElement('td');  
                var a = document.createElement('a');
                var img = document.createElement('img');
                var count = ((j * r) + i);
                
                img.setAttribute('src', 'pics/memory/0.jpg');
                img.setAttribute('a', ''+imgRandom[0][count]+'');
                a.setAttribute('href', '#');
                a.setAttribute('a', ''+imgRandom[0][count]+'');

                cell.appendChild(a);
                a.appendChild(img);
                row.appendChild(cell)
                
                a.addEventListener('click', flip);
            }
            tblBody.appendChild(row);
            
        }
        tbl.appendChild(tblBody);
        cards.appendChild(tbl);
        
       
       document.querySelector('form').setAttribute('class', 'hidden');
    }
    
    function flip(){
        
        var link = this;
        klickedNode.push(link.getAttribute('a')); // sparar bilden vi klickade på
        var alink = this.firstChild; //bilden
        picValue = link.getAttribute('a');//variabel som håller koll på bildens värde
        var src = "pics/memory/"+picValue+".jpg";
        
        if(times < 2){//om vi öppnat mindre än två brickor
        count++;
        
            if(times < 1){ //om vi bara öppnat en bricka
                times++;
                alink.setAttribute('src', src);//Ger frågetecknet en  bild
                pic1 = picValue;// pic1 tilldelas den värdet för den första bilden
                target1 = alink;//sparar den klickade bilden
                link1 = link;//sparar den klickade a-taggen
                
                this.removeEventListener('click', flip);
                
            }else{
                times++;
                alink.setAttribute('src', src);
                pic2 = picValue;// andra bilden
                target2 = alink; //sparar den klickade bilden
                link2 = link;//sparar den klickade a-taggen
                this.removeEventListener('click', flip);
                
                }if(times === 2 && pic1 === pic2 && target1 != target2){//lika
                    score++;
                    times = 0;
                }else if(times === 2){//ej lika vända igen
                    setTimeout(timer, 1000);
                }
            }
            if(times > 2){
                    setTimeout(timer, 1000);
                }
        write();
    }
    
    function timer(){
        if(pic1 != pic2){//om de ej är lika vänd tillbaka dem båda
                target1.setAttribute('src', 'pics/memory/0.jpg');//bilderna återställs efter en sek
                target2.setAttribute('src', 'pics//memory0.jpg');
                times = 0;
                link1.addEventListener('click', flip);
                link2.addEventListener('click', flip);
            //}
        }else if(target1 === target2){//lika vänta 1 sec fortsätt spelet
        console.log("Väldigt lika, ny timer");
            setTimeout(1000);
            times = 0;
        }else{
            target1.setAttribute('src', 'pics/memory/0.jpg');//bilderna återställs efter en sek
            target2.setAttribute('src', 'pics/memory/0.jpg');
            times = 0;
            target1.addEventListener('click', flip);
            target2.addEventListener('click', flip);
        }
        
    }
    
    function write(){
         console.log('row och col är '+(row*col)+'  score är '+score);
         var p = go.points.querySelector('p');
         p.innerHTML = "Antal poäng:<br>"+score;
         if(score === (row*col)/2){
             
             go.done.innerHTML = "Grattis! Du har vunnit, och klarade det på "+(count/2)+" försök!";
         }
        
     }
}