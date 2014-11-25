"use strict";

function Message(message, date){
    
    this.getText = function () {//hämtar texten
        return message;
    };
    
    this.setText = function(_text){//sätter texten till variablen message
        message = _text || "Här kommer din text komma när du skrivit något i textrutan nedan.";
    };
    
    this.getDate = function(){ //hämtar datumet
        return date;
    };
    
    this.setDate = function(_date){//sätter datumet till variablen the date
        date = _date;
    };
    
    Message.prototype.toString = function(){/*presentation av objektet som ligger 
    på prototypen för att det ska skrivas ut x-antal ggr*/
    return this.getText()+"  ("+this.getDate()+")";
    };
    
    Message.prototype.getHTMLText = function(){//hämtar texten och ersätter \n med <br>
        return this.getText.replace(/\n/gi, "<br/>");
    };
    
    Message.prototype.getDateText = function(){ //hämtar dastumet så som det ska skrivas ut(hh,mm,ss)
        return this.getDate();
    };
     
}