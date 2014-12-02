"use strict";

var Memory = {
    
    imgRandom: [],
    
    go: function(){
        var row = 4;
        var col = 4;
        Memory.imgRandom.push(RandomGenerator.getPictureArray(row, col));


        Memory.tableCeate(row, col, Memory.imgRandom); //skickar värderna över hur lång den skall vara till table-func
       
        console.log("slumpade nummer "+Memory.imgRandom);
        
    },

    tableCeate: function(c, r, array){
        //body reference 
        var cards = document.querySelector("#cards");

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // cells creation
        for (var j = 0; j < c; j++) {
            // table row creation
            var row = document.createElement("tr");

            for (var i = 0; i < r; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                var cell = document.createElement("td");   
                var img = document.createElement("img");
                var count = ((j * r) + i);
                var src = "pics/"+array[0][count]+".png";
                img.setAttribute("src", src);
                 
                 var cellImg = img;

                cell.appendChild(cellImg);
                row.appendChild(cell);
            }

            //row added to end of table body
            tblBody.appendChild(row);
        }

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        cards.appendChild(tbl);
        
    },
    
    
};
window.onload = Memory.go;