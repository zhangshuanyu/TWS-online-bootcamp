'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionSame=[];
    var k=0;
    for(var A in collectionA){
        for(var B in objectB.value){
            if(collectionA[A].key === objectB.value[B]){
                collectionSame[k++]=objectB.value[B];
            }
        }
    }
    return collectionSame;
    
  //return '实现练习要求，并改写该行代码。';
}
