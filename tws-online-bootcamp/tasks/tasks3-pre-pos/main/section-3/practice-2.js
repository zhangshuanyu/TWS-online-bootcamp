'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(var A in collectionA){
        for(var B in objectB.value){
            if(collectionA[A].key===objectB.value[B]){
                collectionA[A].count -= Math.floor((collectionA[A].count)/3);


            }
        }
    }
    return collectionA;
}

