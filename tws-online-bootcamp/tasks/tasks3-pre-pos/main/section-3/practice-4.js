'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  var count = 1;
  var n = 0;
  var a = collectionA.pop();

  for(var i = 0; i < collectionA.length; i++){
    if (collectionA[i] === collectionA[i + 1]){
      count++;
    }
    else{
      collectionC[n]= { key:collectionA[i],count: count};
      count = 1;
      n++;
    }
  }
collectionC[n] = { 
    key: a.split("-")[0], 
    count: parseInt(a.split("-")[1])
  };
  
  for(var C in collectionC){
      for(var B in objectB.value){
          if(collectionC[C].key===objectB.value[B]){
              collectionC[C].count-=Math.floor((collectionC[C].count)/3);
          }
      }
      
  }
  return collectionC;
  
}
