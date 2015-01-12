"use strict";
//skapa nytt memory spel
RF222CZ.NewMemory = function(wind){
   
   var imgRandom = [], times = 0, pic1 = '', pic2='', klickedNode = [], target1='', target2='';
   var link1 = "", link2= "", score= 0, count= 0, picValue= 0;
    
    
        //divtaggar i fönstret
        wind.content.style.backgroundColor = '#EF6293';
        var wrap= document.createElement('div');
        wrap.setAttribute('class', 'wrap');
        var cards = document.createElement('div');
        cards.setAttribute('class', 'cards');
        var points = document.createElement('div');
        points.setAttribute('class', 'points');
        points.innerHTML = 'Poäng:  <br> Försök: ';
        var done = document.createElement('div');
        done.setAttribute('class', 'done');
        var p = document.createElement('p');
        
        var tbl     = document.createElement('table');
        var tblBody = document.createElement('tbody');

        wind.content.appendChild(wrap);
        wrap.appendChild(cards);
        wrap.appendChild(points);
        wrap.appendChild(done);
        wrap.appendChild(p);
        
        imgRandom.push(RandomGenerator.getPictureArray(4, 4));//skapas random nummer
        tableCreate(4, 4, cards);//skickar iväf höjd och bredd och skapar tabell
        // });
    
    
    function tableCreate(c, r, cards){
        
        
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
                row.appendChild(cell);
                
                a.addEventListener('click', flip);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        cards.appendChild(tbl);
    
    }
    
    
    function flip(){
        
        var link = this;
        klickedNode.push(link.getAttribute('a')); // sparar bilden vi klickade på
        var alink = this.firstChild; //bilden
        picValue = link.getAttribute('a');//variabel som håller koll på bildens värde
        var src = "pics/memory/"+picValue+".jpg";
        
        
        if(times < 2){//om vi öppnat mindre än två brickor
        count++;
        
        //timer
        
        
        
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
                target2.setAttribute('src', 'pics/memory/0.jpg');
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
         
         points.appendChild(p);
         points.innerHTML = 'Poäng: '+score+'<br> Försök: '+Math.round(count/2);
         if(score === (4*4)/2){
            points.innerHTML = '';
            tbl.innerHTML = '';
            done.innerHTML = "<h2>Grattis!</h2> Du har vunnit, <br>och klarade det på <br><u>"+(count/2)+" försök!</u><br>";
            
            //hann inte göra klart en om-starts-knapp
            // var again = document.createElement('input');
            // done.appendChild(again);
            // again.setAttribute('type', 'submit');
            // again.setAttribute('value', 'Spela igen');
            
            // again.addEventListener('click', function(){
            //     done.innerHTML = '';
                
            //     score = 0;
            //     times = 0;
            //     count = 0;
            //     tableCreate(); 
            // });
         }
         
         
     }
}