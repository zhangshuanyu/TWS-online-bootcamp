'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var count=1;
  var collectionC=[];
  var n=0;
 
  for(var i;i<collectionA.length;i++){
      if(collectionA[i]===collectionA[i+1]){
          count++;
      }else{
          collectionC[n]= { key:collectionA[i],count: count};
          count = 1;
          n++;        
      }
  }    
for(var C in collectionC){
      for(var B in objectB.value){
          if(collectionC[C].key===objectB.value[B]){
              collectionC[C].count-=Math.floor((collectionC[C].count)/3);
          }
      }
      
  }
  return collectionC;

}