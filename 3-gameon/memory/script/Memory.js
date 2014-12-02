"use strict";

var Memory = {
    
    imgRandom: [],
    
    go: function(){
        
        Memory.imgRandom.push(RandomGenerator.getPictureArray(4, 4));


        Memory.tableCeate(1, 2); //skickar värderna över hur lång den skall vara till table-func
        console.log(Memory.tableHTML());
        console.log("slumpade nummer "+Memory.imgRandom);
        
    },
    
    // createTable: function(tableData) { //skapar en tabell som innehåller bilder
    //   var table = document.createElement('table')
    //     , tableBody = document.createElement('tbody');
    
    //   tableData.forEach(function(rowData) {
    //     var row = document.createElement('tr');
    
    //     rowData.forEach(function(cellData) {
    //       var cell = document.createElement('td');
    //       cell.appendChild(document.createTextNode(cellData));
    //       row.appendChild(cell);
    //     });
    
    //     tableBody.appendChild(row);
    //   });
    
    //   table.appendChild(tableBody);
    //   document.body.appendChild(table);

    // },

    tableCeate: function(c, r){
        //body reference 
        var cards = document.querySelector("#cards");

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // cells creation
        for (var j = 0; j <= c; j++) {
            // table row creation
            var row = document.createElement("tr");

            for (var i = 0; i < r; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
             var cell = document.createElement("td");    
                  var cellText = document.createTextNode("cell is row "+j+", column "+i); 

                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            //row added to end of table body
            tblBody.appendChild(row);
        }

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        cards.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute("border", "2");
    }
    
    
};
window.onload = Memory.go;