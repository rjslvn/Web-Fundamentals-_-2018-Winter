// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(arr) { 
    for(var i=0; i<arr.length; i++) {
        if (arr[i] < 0) { 
            arr[i] = 0;
        }
    }
    return arr;
}

a = resetNegatives([1, 2, -1, -3]); 
console.log(a);

// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(arr) {
    var temp = 0;
    for(var i=0; i<arr.length; i++) {
        temp = arr[i]; 
        arr[i+1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(moveForward[1,2,3]);