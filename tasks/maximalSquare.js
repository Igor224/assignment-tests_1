//=======================================ARRAY==================
const matrix = [
        ['1', '0', '1', '1', '1'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
        ['1', '0', '0', '1', '0']
      ];

//===================================MAIN FUNCTION==============

const maximalSquare = (() => {
  function _isBeginOfSubArray(i, arr) {
    return ( (arr[i - 1]) === 0 || i === 0 ) && arr[i] === 1;
  };

  function _isEndOfSubArray(i, arr) {
    return ( (arr[i + 1]) === 0 || i === (arr.length - 1) ) && arr[i] === 1;
  };

  function _getMaxSubArraySum(arr) {
    let maxSum = 0;
    let indexStart = 0;
    let indexEnd = 0;

    for (const [i] of arr.entries()) {
      if (_isBeginOfSubArray(i, arr)) {
        indexStart = i;
      }
      if (_isEndOfSubArray(i, arr)) {
        indexEnd = i;
        maxSum = Math.max( (indexEnd - indexStart + 1), maxSum );
        indexStart = 0;
        indexEnd = 0;
      }
    }

    return maxSum;
  }

  function _arrBitwiseAnd(arr1, arr2) {
    return arr1.map( (v, i) => {
      return v & arr2[i];
    } );
  }

  return function(array) {
    let interception;
    let maxSumOfOne = 0;
    let sideOfSquare = 0;
    let area = 0;

    for (const [index, item] of array.entries()) {
      interception = item;
      let count = 2;

      for ( let i = index; i <= array.length; i++ ) {
        if (!array[i + 1]) break;

        interception = _arrBitwiseAnd(interception, array[i + 1]);
        maxSumOfOne = _getMaxSubArraySum(interception);
        sideOfSquare = Math.min(maxSumOfOne, count);

        if (area >= maxSumOfOne ** 2) {
          break;
        } else {
          area = Math.max(area, sideOfSquare ** 2);
        };

        count++;
      }
    }
    return area;
  };
})();

console.log(maximalSquare(matrix));
