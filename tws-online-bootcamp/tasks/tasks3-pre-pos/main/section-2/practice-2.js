'use strict';
/*module.exports = function countSameElements(collection) {
    
    var key_value="";
    var count_value=0;
    var result=[];  
    var arr=[];
    
    for(var i=0;i<collection.length;i++){
        if(collection[i] !=-1){
            if(collection[i].indexOf("-")> -1){
              arr=collection[i].split("-");  
             key_value=arr[0];
             count_value=parseInt(arr[1]);
             var result1={key:key_value,count:count_value};
             result.push(result1);
             count_value=0;
        }
        else{
        key_value=collection[i];
        var result1=a(key_value,collection,count_value);
        result.push(result1);
        count_value=0;
        }
    }
}
return result;

}
    function a(key_value,collection,count_value){
        for(var j=0;j<collection[j];j++){
            if(key_value===collection[j]){
                count_value++;
                collection[j]=-1;
                count_value=0;
            }
          
        }
         var result2={key:key_value,count:count_value}
        return result2;
}
*/
module.exports = function countSameElements(collection) {
  var result = [];
  var count = 1;
  var n = 0;
  var a = collection.pop();

  for(var i = 0; i < collection.length; i++){
    if (collection[i] === collection[i + 1]){
      count++;
    }
    else{
      result[n]= { key:collection[i],count: count};
      count = 1;
      n++;
    }
  }

  result[n] = { 
    key: a.split("-")[0], 
    count: parseInt(a.split("-")[1])
  };
  
  return result;
}
