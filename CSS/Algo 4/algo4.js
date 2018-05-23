// Given an array and a value Y, count and print the number of array values greater than Y.

function printGreaterY(arr, y) {
    for (var i=0; i<arr.length - 1; i++) {
        if (arr[i] > y) {
            console.log(arr[i]);
        }
    }
}

console.log(printGreaterY([2,4,1,2,6,8,12,1], 6));

// Given an array, print the max, min and average values for that array.

function maxMinAverage(x) {
    var temp = 0;
    var sum = 0;
    for (var i=0; i<x.length; i++) {
        if (x[i] > x[i+1]) {
            temp = x[i+1]; 
            x[i+1] = x[i];
            x[i] = temp;
        } 
    }
    for (var j=0; j<x.length; j++) {
      sum += x[j];
    }
    console.log("Average: " + sum/x.length); 
    console.log("Minimum: " + x[0]);
    console.log("Maximum: " + x.pop());
}

console.log(maxMinAverage([2,1,7]));

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceDojo(arr) {
    for (var i=0; i<arr.length-1; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    } 
    return arr;
}

console.log(replaceDojo([1,8,-2,4,10,22,-23,1,2]));

// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, start, stop) { 
    var splice = [];
    for (var i = 0; i <arr.length; i++) {
        if (i < (start-1)) {
          splice.push(arr[i]);
        } else if (i > (stop-1)) {
          splice.push(arr[i]);
        }
    }
   return splice; 
}

console.log(removeVals([20,30,40,50,60,70],3,4));


