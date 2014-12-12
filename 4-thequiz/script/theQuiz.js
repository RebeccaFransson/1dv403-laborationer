
var theQuiz = {

nextURL: '',
    get: function(){
        console.log('innan skall vara undefined '+theQuiz.nextURL);
        //  if(theQuiz.nextURL != null){
        //      console.log('next url finns'+theQuiz.nextURL);
        //      theQuiz.nextURL = theQuiz.nextURL;
        //  }else{
        //      console.log('next url finns INTE');
        //      theQuiz.nextURL = "http://vhost3.lnu.se:20080/question/1";
        //  }
        theQuiz.nextURL = theQuiz.nextURL || "http://vhost3.lnu.se:20080/question/1";
        console.log('nextURL: '+theQuiz.nextURL);
            var xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
                console.log('svar från server');
                if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                    
                    var quest = JSON.parse(xhr.responseText);
                    console.log('OK '+quest.question); //svarstext
                    
                    document.getElementById('quest').innerHTML = quest.question;
                    
                    document.getElementById('send').addEventListener('click', function(e){//hämtar ut knapp, sätter klick
                    e.preventDefault();
                    theQuiz.send(xhr, quest);
                });
                
                }else if(xhr.status === 404){
                        console.log('Hittades ej');
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
                console.log('svar: '+input);
                var ansBox = document.getElementById('answer');
                var answer = JSON.parse(xhr.responseText);
                console.log('meddelande tillbaka: '+answer.message); //svarstext
                
                if(answer.nextURL != null){//RÄTT GRÖN FÄRG
                    ansBox.innerHTML = answer.message;
                    if(answer.nextURL === undefined){//om nexturl finns, skicka till GET
                         console.log('det tog 300 försök du suger!');
                         
                     }else{//om inte skriv ut hur måna försök det tog
                         
                         console.log('gåt vidare URL finns');
                         theQuiz.nextURL = answer.nextURL;
                         theQuiz.get();
                     }
                    
                }else{
                    ansBox.innerHTML = answer.message;//fel BLI RÖD
                    
                }
                document.getElementById('textvalue').value = "";
            };
    }
};
window.onload = theQuiz.get;