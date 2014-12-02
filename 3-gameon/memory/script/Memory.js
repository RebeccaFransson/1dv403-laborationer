"use strict";

var Memory = {
    
    imgRandom: [],
    
    go: function(){
        
        Memory.imgRandom.push(RandomGenerator.getPictureArray(3, 4));
        console.log(Memory.imgRandom);
        console.log(RandomGenerator.getPictureArray(imgPlace));
        Memory.imgArray();
    },
    
    imgArray: function(){
        // console.log(img);
        // var img = ["pics/0.png", "pics/1.png", "pics/2.png", ]
        
        // for(var i=0; i < 9; i++){
        //     img[i] = Memory.imgRandom[i];
            
        // }
        // console.log(img);
        // return img;
        
    },
    
    
    
};
window.onload = Memory.go;