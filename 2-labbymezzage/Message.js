"use strict";

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){//sätter texten till variablen message
        message = _text || "Här kommer din text komma när du skrivit något i textrutan nedan.";
    };
    
    this.getDate = function(){ //hämtar datumet
        return date;
    };
    
    this.setDate = function(_date){//sätter datumet till variablen date
        date = _date;
    };
    
    Message.prototype.toString = function(){/*presentation av objektet som ligger 
    på prototypen för att det ska skrivas ut x-antal ggr*/
    
    //skapar variabler som tilldelas datumet per specifikt
    var date = this.getDate();
    
    var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = date.getDate();
    var hour = Message.Zero(date.getHours());
    var minute = Message.Zero(date.getMinutes());
    var second = Message.Zero(date.getSeconds());
    
    return "Detta meddelande skapades "+day+" "+month+" "+year+"     Klockan "+hour+":"+minute+":"+second;
    };
    
    Message.prototype.getHTMLText = function(){//hämtar texten och ersätter \n med <br>
        return this.getText().replace(/[\n\r]/g, "<br />");
    };
    
    Message.prototype.getDateText = function(){ //hämtar datumet så som det ska skrivas ut(hh,mm,ss)
        var thisDate = this.getDate();
        
        var seconds = Message.Zero(thisDate.getSeconds());
        var minutes = Message.Zero(thisDate.getMinutes());
        var hours = Message.Zero(thisDate.getHours());
        
        return hours+":"+minutes+":"+seconds;
    };
     
    Message.Zero = function(n){
        if(n < 10){
            n = "0"+n;
        }
        return n;
    }
}