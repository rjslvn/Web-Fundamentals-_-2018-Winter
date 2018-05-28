// Sigma 
// while loop solution
function sigma(n) {
    var sum = 0;
    var i = 0;
    while (i <= n) {
        sum+= i; 
        i++;
    }
    return sum;
}

console.log(sigma(3));

// Sigma
// for loop solution 

function sigma(n) {
    var sum = 0; 
    for (var i = 0; i<= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sigma(3));

// 

// Fibonacci 

function fib(n) {
    if (n <= 1) {
        return 1;
    }
    a = fib(n-2);
    b = fib(n-1);
    return (a+b);
}

console.log(fib(5));

// Array: Nth-toLast

function nthLast(arr, n) {
    return arr[arr.length-n];
}

console.log(nthLast([5,2,3,6,4,9,7],3));

// Return second largest element in the array

function secondLargest(arr) { 
    var temp = 0; 
    var max = arr[0];
    if (arr.length < 3) {
        return null;
    }
    for(var i = 0; i<arr.length; i++) {
        if (max > arr[i+1]) {
            temp = max;
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr[arr.length-2];
}

console.log(secondLargest([42,1,4,3.14,7]));

// Double Trouble 

function doubleTrouble(arr) {
    var temp = [];
    for (var i=0; i<arr.length; i++) {
        temp.push(arr[i], arr[i]);
    }
    return temp;
}

console.log(doubleTrouble([4, "Ulysses", 42, false]));

