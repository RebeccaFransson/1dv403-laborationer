window.onload = function()  {
    
    
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
            console.log('svar');
            if(xhr.readyState === 4 && xhr.status === 200){//allt ok
                
                var quest = JSON.parse(xhr.responseText);
                console.log('OK'+quest.question); //svarstext
                
                document.getElementById('quest').innerHTML = quest.question;
                
                document.getElementById('send').addEventListener('click', function(e){//hämtar ut knapp, sätter klick
                e.preventDefault();
                send(xhr, quest);
            });
            
            
            }else if(xhr.status === 404){
                    console.log('Hittades ej');
            }else{
                console.log('Fått tillbaka svar men annat fel ' + xhr.readyState);
            }
            
            
        };
        
        xhr.open('GET', "http://vhost3.lnu.se:20080/question/1", true); //asynkromt anrop
        
        xhr.send(null);
        
}

var send = function(xhr, quest){
        var input = document.getElementById('textvalue').value;
                
        xhr.open('POST', quest.nextURL, true);//skicka data till nästa url
        xhr.setRequestHeader('Content-Type', 'application/json');//talar om att ypen är json
        
        var product = {
            id: 1,
            answer: input,
        }
        
        xhr.send(JSON.stringify(product));
        
        xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
            console.log('svar');
            var wrong = document.getElementById('wrong');
            var right = document.getElementById('right');
            var answer = JSON.parse(xhr.responseText);
            console.log('OK meddelande : '+answer.message); //svarstext
            if(answer.nextURL != null){
                //right.setAttribute('class', 'hidden');
                right.setAttribute('class', '');
                right.innerHTML = answer.message;
                console.log('FEL!');
            }else{
                wrong.setAttribute('class', '');
                wrong.innerHTML = answer.message;
                
                console.log('RÄTT!');
                
            }
        }
                
        //om svaret är rätt gå vidare till nästa fråga
                
        // xhr.open('GET', quest.nextURL, true);
        // var answer = JSON.parse(xhr.responseText);
        // console.log(answer);
}