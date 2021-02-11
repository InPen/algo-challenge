/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let ans = [];
    let subArr = [];

    for(let i = 0; i < array.length; i++){
      if(subArr.length === size){
        ans.push(subArr)
        subArr = []
      }
      if(subArr.length < size){
        subArr.push(array[i]);
      }
    }
    if(subArr.length >= 1) ans.push(subArr);
    return ans;
}


module.exports = chunkArray