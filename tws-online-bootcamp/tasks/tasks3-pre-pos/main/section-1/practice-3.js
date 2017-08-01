'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var collectionSame=[];
  var k=0;
  for(var i=0;i<collectionA.length;i++){
      for(var j=0;j<objectB.value.length;j++){
          if(collectionA[i] === objectB.value[j]){
              collectionSame[k++]=objectB.value[j];
          }
      }
  }
  return collectionSame;
  //return '实现练习要求，并改写该行代码。';
  
}
