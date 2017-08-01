'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var collectionSame=[];
    var k=0;
    for( var i=0; i<collectionA.length;i++){
        for( var j=0;j<collectionB.length;j++){
            if(collectionA[i] === collectionB[j]){
                collectionSame[k++] = collectionB[j];
            }
        }
    }
    return collectionSame;
  //return '实现练习要求，并改写该行代码。';
}

