window.onload = function()  {
    
    document.getElementById('send').addEventListener('click', function(){//hämtar ut knapp, sätter klick
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){ //denna kod skall köras när vi får ett svar
            
            if(xhr.redyState === 4){
                console.log('Klar');
                if(xhr.status === 200){
                    console.log('OK');
                }else if(xhr.status === 404){
                    console.log('Hittades ej');
                }else{
                    console.log('Annat fel' + xhr.status);
                }
            }
            
        };
        
        xhr.open('GET', "http://vhost3.lnu.se:20080", true); //asynkromt anrop
        
        xhr.send(null);
        
    });
    
}