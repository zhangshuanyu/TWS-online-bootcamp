/*'use strict';

function find(collection, ch) {
  for(let item of collection){
    if (item.name === ch){
      return item;
    }
  }
  return null;
    
}
function summarize(collection) {
  let result =[];
  for(let item of collection){
    let obj = find(result,item);
    if(obj){
      obj.summary++;
    }else {
      result.push({name:item,summary:1});
    }
    return result;

  }
    
}
function split(item) {
  if(item.includes("-")) {
        let array = item.split("-");
        return {key: array[0], count: parseInt(array[1], 10)};
  }
  if(item.includes("[")) {
        let key = item.charAt(0);
        let count = parseInt(item.substr(2,item.length - 1));
        return {key, count};
  }
  if(item.includes(":")) {
        let array = item.split(":");
        return {key: array[0], count: parseInt(array[1], 10)};
  }
}
function push(result,key,count){
  for(var i=0;i<count;i++){
    result.push(key);
  }
}
function expand(collection) {
  let result=[];
  for (let item of collection){
    if(item.length === 1){
      result.push(item);
    }else {
      let {key,count}=split(item);
      push(result,key,count);
    }
    return result;
  }
    
}
module.exports = function countSameElements(collection) {
  let  expandedArray = expand(collection);
  return summarize(expandedArray);

}*/
'use strict';


module.exports = function countSameElements(collection) {
    var arr=[];
    var result=[];
    var resultArray=[];
    collection.forEach((element,index) => {
        if (element.length > 1){
            var Array=element.split("");
            var num=parseInt(element.replace(/[^0-9]/ig, ""));
            for (var i=0;i<num-1;i++){
                arr.push(Array[0]);
            }
            collection.splice(index,1,Array[0]);
            resultArray=collection.concat(arr);
        }
    });

    resultArray.forEach( item => {
        if (!result.find(element => element.name === item)){
            result.push({name:item,summary:resultArray.filter(element => element === item).length});
        }
    });
    return result;
}
