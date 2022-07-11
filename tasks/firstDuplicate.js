//=======================================ARRAY==================
const a = [2, 1, 3, 5, 3, 2];

//===================================MAIN FUNCTION==============
const firstDuplicate = (() => {
    function getDuplicateIndex(arr, i) {
      return arr.indexOf(arr[i], i + 1);
    }
  
    return function(arr) {
      let duplicate = -1;
      let duplicIndex = null;
      let nextDuplicIndex = null;
      
      for (let i = 0; i < arr.length; i++) {
      
        if (duplicIndex && duplicIndex <= i) break;
      
        nextDuplicIndex = getDuplicateIndex(arr, i);
      
        if (nextDuplicIndex !== -1) {
          duplicIndex = Math.min(duplicIndex??nextDuplicIndex, nextDuplicIndex);
          duplicate = arr[duplicIndex];
        }
      }
          
      return duplicate;
    };
  })();

console.log(firstDuplicate(a));