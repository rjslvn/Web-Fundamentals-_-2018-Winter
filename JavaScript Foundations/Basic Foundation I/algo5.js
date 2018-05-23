// Get 1 to 255
function oneTo255() {
    var arr = []
    for (var i=0; i<256; i++) {
      if (i%2 !== 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  
  console.log(oneTo255());

// Get even 1000

function getEven() {
    var sum = 0;
    for (var i=0; i <= 1000; i++) {
        if (i%2 == 0) {
            sum += i;
        }
    }
    return sum;
}
// another way for get even 1000

function getEven() {
    var sum = 0; 
    for (var i=2; i<1001; i+=2) {
        sum += i;
    }
    return sum; 
}

console.log(getEven());

// Sum odd 5000

function sumOdd5k() {
    var sum = 0; 
    for (var i=1; i<5001; i+=2) {
        sum += i;
    }
    return sum;
}

console.log(sumOdd5k());

// Iterate an array that returns sum of contents

function iterateArray(arr) {
    var sum = 0;
    for (var i=0; i<arr.length-1; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(iterateArray([1,2,5]));
console.log(iterateArray([-5,2,5,12]));

// Find max

function findMax(arr) {
    var temp = []
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr.pop();
}

//another way to do max



function findMax() {
    var max = arr[0];
    for (var i=0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}



console.log(findMax([-3,3,5,7]));


// Find average given an array

function findAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(findAverage([1,3,5,7,20]));

// Array odd

function oddIn50() {
    var arr = [];
    for (var i=1; i<51; i++) {
        if (i%2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(oddIn50());

// Greater than Y

function greaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
        }
    }
    return count;
}

console.log(greaterThanY([1,3,5,7], 3));

// Squares

function squares(arr) {
    var square = [];
    for (var i=0; i<arr.length; i++) {
        square[i] = arr[i]*arr[i];
    }
    return square;
}

console.log(squares([1,5,10,-2]));

// Negatives 

function replaceNegatives(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(replaceNegatives([1,5,10,-2]));

// Max/Min/Avg

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
    var temp2 = x[x.length-1];
    x[x.length-1] = x[0];
    x[0] = temp2;
    console.log("Average: " + sum/x.length); 
    console.log("Minimum: " + temp);
    console.log("Maximum: " + x.pop());
}

console.log(maxMinAverage([1,5,-10,-2]));

// Swap values 

function swapValues(arr) {
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log(swapValues([1,5,10,-2]));

// Number to String

function numberToString(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr;
}

console.log(numberToString([-1,3,2]));