"use strict";

var theQuiz = {

nextURL: '',
times: 0,
timedArr: [],

    get: function(){
        
        if(theQuiz.times != 0){
            theQuiz.timedArr.push(theQuiz.times);
            console.log('ARRAYN!! '+theQuiz.timedArr);
            theQuiz.times = 0;
        }
        
        //theQuiz.timedArr.length = 0;
        
        theQuiz.nextURL = theQuiz.nextURL || "http://vhost3.lnu.se:20080/question/1";
            var xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                    
                    var quest = JSON.parse(xhr.responseText);
                    
                    document.getElementById('quest').innerHTML = quest.question;
                    document.getElementById('send').onclick = function(e){//hämtar ut knapp, sätter klick
                    theQuiz.times++;
                    console.log('FÖRSÖK FÖR DENNA FRÅGA ÄR: '+theQuiz.times);
                    e.preventDefault();
                    theQuiz.send(xhr, quest);
                };
                
                }else if(xhr.status === 404){
                        console.log('Hittades ej');
                }else{
                    console.log('Annat problem med att ta emot från server');
                }
            };
            
            xhr.open('GET', theQuiz.nextURL, true); //asynkromt anrop
            
            xhr.send(null);
    },
    
    send: function(xhr, quest){
            var input = document.getElementById('textvalue').value;
            
            xhr.open('POST', quest.nextURL, true);//skicka data till nästa url
            xhr.setRequestHeader('Content-Type', 'application/json');//talar om att ypen är json
            
            var product = {
                id: 1,
                answer: input,
            };
            
            xhr.send(JSON.stringify(product));
            
            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                
                if(xhr.readyState === 4){
                    var ansBox = document.getElementById('answer');
                    var answer = JSON.parse(xhr.responseText);
                    
                    if(answer.nextURL != undefined){//RÄTT GRÖN FÄRG
                        ansBox.innerHTML = answer.message;
                        ansBox.setAttribute('style', 'border: 2px solid rgba(115, 240, 44, 0.5)');
                        
                        theQuiz.nextURL = answer.nextURL;
                        theQuiz.get();
                    }else if(xhr.status === 400){//fel BLI RÖD
                        ansBox.innerHTML = answer.message;
                        ansBox.setAttribute('style', 'border: 2px solid rgba(255, 44, 44, 0.5)');
                        
                    }else{//slut på frågor
                        ansBox.setAttribute('style', 'border: 2px solid #8B6B45');
                        ansBox.innerHTML = 'GRATTIS!<br>';
                        theQuiz.timedArr.push(theQuiz.times);
                        for(var i = 1; i <= theQuiz.timedArr.length; i++){
                            ansBox.innerHTML += 'Fråga '+i+' tog '+theQuiz.timedArr[i-1]+' försök<br>';
                        }
                    }
                    document.getElementById('textvalue').value = "";
                }
                    
            };
    }
};
window.onload = theQuiz.get;