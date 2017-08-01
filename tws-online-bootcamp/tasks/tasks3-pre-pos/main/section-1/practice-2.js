'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var collectionSame=[];
    var k=0;
    for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<collectionB.length;j++){
            for(var n=0;n<collectionB[j].length;n++){
                if(collectionA[i] === collectionB[j][n]){
                    collectionSame[k++]=collectionB[j][n];
                }
            }
        }
    }
    return collectionSame;
  
  
  
  
  
  //return '实现练习要求，并改写该行代码。';
}
