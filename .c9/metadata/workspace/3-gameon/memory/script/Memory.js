{"changed":true,"filter":false,"title":"Memory.js","tooltip":"/3-gameon/memory/script/Memory.js","value":"\"use strict\";\n\nvar Memory = {\n    \n    imgRandom: [],\n    \n    go: function(){\n        \n        Memory.imgRandom.push(RandomGenerator.getPictureArray(3, 4));\n        console.log(Memory.imgRandom);\n        console.log();\n        Memory.imgArray();\n    },\n    \n    imgArray: function(){\n        // console.log(img);\n        // var img = [\"pics/0.png\", \"pics/1.png\", \"pics/2.png\", ]\n        \n        // for(var i=0; i < 9; i++){\n        //     img[i] = Memory.imgRandom[i];\n            \n        // }\n        // console.log(img);\n        // return img;\n        \n    },\n\n    \n    \n};\nwindow.onload = Memory.go;","undoManager":{"mark":64,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":10},"action":"remove","lines":["im"]},{"start":{"row":11,"column":8},"end":{"row":11,"column":16},"action":"insert","lines":["imgArray"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":16},"end":{"row":11,"column":18},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":15,"column":11},"action":"insert","lines":["// "]},{"start":{"row":16,"column":8},"end":{"row":16,"column":11},"action":"insert","lines":["// "]},{"start":{"row":18,"column":8},"end":{"row":18,"column":11},"action":"insert","lines":["// "]},{"start":{"row":19,"column":8},"end":{"row":19,"column":11},"action":"insert","lines":["// "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":11},"action":"insert","lines":["// "]},{"start":{"row":22,"column":8},"end":{"row":22,"column":11},"action":"insert","lines":["// "]},{"start":{"row":23,"column":8},"end":{"row":23,"column":11},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":19},"end":{"row":10,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":23},"action":"remove","lines":["Ran"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":35},"action":"insert","lines":["RandomGenerator"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":36},"end":{"row":10,"column":41},"action":"remove","lines":["imgPl"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":44},"action":"insert","lines":["imgPlace"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":44},"end":{"row":10,"column":46},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"remove","lines":["]"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":36},"end":{"row":10,"column":38},"action":"remove","lines":["ge"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":53},"action":"insert","lines":["getPictureArray()"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":53},"end":{"row":10,"column":54},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":54},"end":{"row":10,"column":62},"action":"remove","lines":["imgPlace"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":60},"action":"insert","lines":["imgPlace"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":61},"end":{"row":10,"column":62},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":60},"action":"remove","lines":["imgPlace"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":51},"end":{"row":10,"column":53},"action":"remove","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"remove","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"remove","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":31},"end":{"row":10,"column":32},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":30},"end":{"row":10,"column":31},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":27},"end":{"row":10,"column":28},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"remove","lines":["G"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":8},"end":{"row":16,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417517118603}