"use strict";
//skapa nytt memory spel
function NewMemory(){
    console.log('skapar memory');
    
   //gör funktionerna i konstruktor då nås alla variabler som jag skapat här.
   
   var imgRandom = [], times = 0, pic1 = '', pic2='', klickedNode = [], target1='', target2='';
   var link1 = "", link2= "", score= 0, count= 0, timeout = undefined, picValue= 0, row= 0, col= 0;
    
    function go(){
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
        
        console.log(submit);
        submit.addEventListener("click", function(a){
            a.preventDefault();
            row = document.querySelector("#nr1").value;
            col = document.querySelector("#nr2").value;
            
            imgRandom.push(RandomGenerator.getPictureArray(row, col));
            tableCreate(row, col);
        });
    }
    
    
    
}
NewMemory.prototype.create = function(){
    
}