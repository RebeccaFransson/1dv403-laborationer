{"changed":true,"filter":false,"title":"Memory.js","tooltip":"/3-gameon/memory/script/Memory.js","value":"'use strict';\n\nvar Memory = {\n    \n    imgRandom: [],\n    \n    \n    go: function(){\n        var row = 4;\n        var col = 4;\n        Memory.imgRandom.push(RandomGenerator.getPictureArray(row, col));\n        \n        Memory.tableCreate(row, col, Memory.imgRandom); //skickar värderna över hur lång den skall vara till table-func\n        Memory.click(Memory.imgRandom);\n\n\n        console.log('slumpade nummer '+Memory.imgRandom);\n        \n    },\n\n    tableCreate: function(c, r, array){\n        //body reference \n        var cards = document.querySelector('#cards');\n\n        // create elements <table> and a <tbody>\n        var tbl     = document.createElement('table');\n        var tblBody = document.createElement('tbody');\n\n        // cells creation\n        for (var j = 0; j < c; j++) {\n            // table row creation\n            var row = document.createElement('tr');\n            //.setAttribute('class', j) // Göra ny klass så att klickmetoden fungerar?\n\n            for (var i = 0; i < r; i++) {\n                // create element <td> and text node \n                //Make text node the contents of <td> element\n                // put <td> at end of the table row\n                var cell = document.createElement('td');   \n                var img = document.createElement('img');\n                var count = ((j * r) + i);\n                \n                img.setAttribute('src', 'pics/0.png');\n                img.setAttribute('class', ''+array[0][count]+'');\n\n                cell.appendChild(img);\n                row.appendChild(cell)\n                \n                \n            }\n            //row added to end of table body\n            tblBody.appendChild(row);\n            \n        }\n        // append the <tbody> inside the <table>\n        tbl.appendChild(tblBody);\n        // put <table> in the <body>\n        cards.appendChild(tbl);\n        \n       \n    },\n//KLICK FUNKTIONER\n    click: function(array){\n        var cards = document.querySelector('table');\n        cards.addEventListener('click', function(e){\n            Memory.flip(array, e);\n        });\n    },\n    \n    flip: function(array, e){\n        \n           for(var i = 0; i <= array[0].length; i++){\n                var src = 'pics/'+i+'.png';//dimentionella arraysns nr \n                var klickedNode = e.target;\n                \n                //loopar alla ifsatserna\n                if(klickedNode.getAttribute('class') == i){ //Om bildens klass har det slumpadenummret\n                    klickedNode.setAttribute('src', src);//Ger bilden en annan source och därför en annan bild\n                    setTimeout(Memory.timer, 1000, klickedNode);\n                    \n                }\n           }\n    },\n    timer: function(klickedNode){\n        klickedNode.setAttribute('src', 'pics/0.png');//bilden återställs efter en sek\n    }\n    \n    \n    \n};\nwindow.onload = Memory.go;","undoManager":{"mark":81,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":90,"column":84},"end":{"row":90,"column":85},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":85},"end":{"row":90,"column":86},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":86},"end":{"row":90,"column":87},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":36},"end":{"row":79,"column":37},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":35},"end":{"row":79,"column":36},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":34},"end":{"row":79,"column":35},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":34},"end":{"row":79,"column":35},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":35},"end":{"row":79,"column":36},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":36},"end":{"row":79,"column":37},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":37},"end":{"row":79,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":39},"end":{"row":79,"column":41},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":43},"end":{"row":79,"column":44},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":42},"end":{"row":79,"column":43},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":41},"end":{"row":79,"column":42},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":87},"end":{"row":79,"column":88},"action":"insert","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":87},"end":{"row":79,"column":88},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":87},"end":{"row":79,"column":88},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":81,"column":20},"end":{"row":81,"column":21},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":39},"end":{"row":79,"column":40},"action":"insert","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"insert","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":39},"end":{"row":79,"column":41},"action":"remove","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":34},"end":{"row":79,"column":36},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":35},"end":{"row":79,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":36},"end":{"row":79,"column":37},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":35},"end":{"row":79,"column":36},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":34},"end":{"row":79,"column":35},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":38},"end":{"row":91,"column":39},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":37},"end":{"row":91,"column":38},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":36},"end":{"row":91,"column":37},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":37},"end":{"row":79,"column":38},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":36},"end":{"row":79,"column":37},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":35},"end":{"row":79,"column":36},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":34},"end":{"row":79,"column":35},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":34},"end":{"row":79,"column":35},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":35},"end":{"row":79,"column":36},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":36},"end":{"row":79,"column":37},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":36},"end":{"row":79,"column":37},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":83},"end":{"row":79,"column":84},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":37},"end":{"row":79,"column":48},"action":"remove","lines":["setInterval"]},{"start":{"row":79,"column":37},"end":{"row":79,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":39},"end":{"row":79,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":41},"end":{"row":79,"column":42},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":42},"end":{"row":79,"column":43},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":43},"end":{"row":79,"column":44},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":44},"end":{"row":79,"column":45},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":45},"end":{"row":79,"column":46},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":46},"end":{"row":79,"column":47},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":9},"end":{"row":91,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":10},"end":{"row":91,"column":11},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":9},"end":{"row":91,"column":10},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":20},"end":{"row":79,"column":37},"action":"remove","lines":["Memory.counter = "]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":8},"end":{"row":91,"column":9},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":9},"end":{"row":91,"column":10},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":9},"end":{"row":91,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":68,"column":4},"end":{"row":68,"column":95},"action":"remove","lines":["counter: [], // Fick deklarera counter här ute för att båda funtionerna skall kunna nå den."]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":86},"end":{"row":91,"column":7},"action":"remove","lines":["=\");","       "]}]}],[{"group":"doc","deltas":[{"start":{"row":89,"column":7},"end":{"row":91,"column":8},"action":"remove","lines":[" console.log(\"detta är i inne i  time = \" + i);","        console.log(\"================================================================= //clearInterval(Memory.counter);//intervallet försvinner","        "]}]}],[{"group":"doc","deltas":[{"start":{"row":80,"column":19},"end":{"row":82,"column":42},"action":"remove","lines":[" console.log(\"detta är i efter inte = \" + i);","                    console.log(Memory.counter);","                    //Memory.counter+1[i];"]}]}],[{"group":"doc","deltas":[{"start":{"row":80,"column":18},"end":{"row":80,"column":19},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":80,"column":17},"end":{"row":80,"column":18},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":80,"column":16},"end":{"row":80,"column":17},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":67},"end":{"row":80,"column":16},"action":"remove","lines":["","                "]}]}],[{"group":"doc","deltas":[{"start":{"row":85,"column":86},"end":{"row":86,"column":7},"action":"remove","lines":["","       "]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":33},"end":{"row":84,"column":34},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":32},"end":{"row":84,"column":33},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":31},"end":{"row":84,"column":32},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":64},"end":{"row":79,"column":65},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":63},"end":{"row":79,"column":64},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":62},"end":{"row":79,"column":63},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":21},"end":{"row":78,"column":63},"action":"remove","lines":["onsole.log(\"detta är i före inte = \" + i);"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":20},"end":{"row":79,"column":19},"action":"remove","lines":["","                   "]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":17},"end":{"row":80,"column":16},"action":"remove","lines":["","                "]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":21},"end":{"row":78,"column":22},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":22},"end":{"row":78,"column":23},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":23},"end":{"row":78,"column":24},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":24},"end":{"row":78,"column":25},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":25},"end":{"row":79,"column":0},"action":"insert","lines":["",""]},{"start":{"row":79,"column":0},"end":{"row":79,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":68},"end":{"row":79,"column":69},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":68},"end":{"row":81,"column":20},"action":"insert","lines":["","                        ","                    "]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":23},"end":{"row":78,"column":61},"action":"insert","lines":["klickedNode.getAttribute('class') == i"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":23},"end":{"row":78,"column":61},"action":"remove","lines":["klickedNode.getAttribute('class') == i"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":24},"end":{"row":78,"column":25},"action":"remove","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":23},"end":{"row":78,"column":24},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":22},"end":{"row":78,"column":23},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":21},"end":{"row":78,"column":22},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":20},"end":{"row":78,"column":21},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":20},"end":{"row":79,"column":24},"action":"remove","lines":["","                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":21},"end":{"row":80,"column":21},"action":"remove","lines":["   ","                    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":20},"end":{"row":79,"column":21},"action":"remove","lines":[" "]}]}]]},"ace":{"folds":[],"scrolltop":874,"scrollleft":79,"selection":{"start":{"row":79,"column":20},"end":{"row":79,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":61,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1417608170728}