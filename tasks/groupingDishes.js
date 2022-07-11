//=======================================ARRAYs==================
const dishes1 = [
    ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
    ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
    ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
    ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese']
  ];
  
const dishes2 =  [
    ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
    ["Chicken Curry", "Chicken", "Curry Sauce"],
    ["Fried Rice", "Rice", "Onions", "Nuts"],
    ["Salad", "Spinach", "Nuts"],
    ["Sandwich", "Cheese", "Bread"],
    ["Quesadilla", "Chicken", "Cheese"]
  ];

//===================================MAIN FUNCTION==============
const groupingDishes = (() => {
    let ingridients = [];

    function deepClone(arr){
      return JSON.parse(JSON.stringify(arr));
    }

    function _cbSort(a, b) {
      const aName = a[0].toUpperCase();
      const bName = b[0].toUpperCase();
      if (aName > bName) {
        return 1;
      };
      if (aName < bName) {
        return -1;
      };
      return 0;
    };
  
    function _sortSubArr(arr) {
      const sliced = arr.splice(1);
      sliced.sort();
      arr.push(...sliced);
    }
  
    function _iterateSubArray(arr, index, mainArr) {
      for (let i = 1; i < arr.length; i++) {
        const newSubArr = [];
  
        if (arr.length === 1) return;
  
        newSubArr.push(arr[i], arr[0]);
  
        let maxSliceItem = _iterateMainArr(mainArr, arr[i], index, newSubArr);

        if(maxSliceItem) ingridients.push(newSubArr);
      }
      return;
    }
  
    function _iterateMainArr(mainArr, item, index, newSubArr) {
      let i = index + 1;
      let maxSliceItem = 0;

      for (i; i < mainArr.length; i++ ) {
        const sliceItem = mainArr[i].indexOf(item, 1);
        maxSliceItem = Math.max(sliceItem, maxSliceItem);

        if (sliceItem > 0) {
          mainArr[i].splice(sliceItem, 1);
          newSubArr.push(mainArr[i][0]);
        }
      }
      return maxSliceItem;
    }
  
    return function(array) {
      ingridients = [];
      const clone = deepClone(array);
      for (const [index, subArr] of clone.entries()) {
        _iterateSubArray(subArr, index, clone);
      }
      ingridients.sort(_cbSort).forEach(_sortSubArr);
      return ingridients;
    };
  })();

console.dir( groupingDishes(dishes1) );
console.dir( groupingDishes(dishes2) );