{"filter":false,"title":"Memory.js","tooltip":"/3-gameon/memory/script/Memory.js","undoManager":{"mark":-1,"position":-1,"stack":[[{"group":"doc","deltas":[{"start":{"row":23,"column":8},"end":{"row":32,"column":11},"action":"remove","lines":["var submit = document.getElementById(\"send\");//knappen","        console.log(submit);","        submit.addEventListener(\"click\", function(a){","            a.preventDefault();","            Memory.row = document.querySelector(\"#nr1\").value;","            Memory.col = document.querySelector(\"#nr2\").value;","            ","            Memory.imgRandom.push(RandomGenerator.getPictureArray(Memory.row, Memory.col));","            Memory.tableCreate(Memory.row, Memory.col);","        });"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":8},"end":{"row":23,"column":19},"action":"insert","lines":["tableCreate"]}]}]]},"ace":{"folds":[],"scrolltop":159,"scrollleft":0,"selection":{"start":{"row":15,"column":4},"end":{"row":15,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418223509000,"hash":"4efe3392eb04caa87c4a70d41d4e0ca1a4b5aa62"}