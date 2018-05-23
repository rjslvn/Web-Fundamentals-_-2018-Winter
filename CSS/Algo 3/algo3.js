
// Part 2: Return average of array values

function printAverage(x){
    sum = 0;
    for (var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5

//  Part 2: Print odd integers between 1 - 255

function returnOddArray(){
    var x = []; 
    for (var i=0; i<256; i++) {
      if (i%2 === 1) {
          x.push(i);
      } 
    }
   return x;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

// Part 3: Print squared values of array

function squareValue(x){
    for (var i=0; i<x.length; i++) {
      x[i] = x[i]*x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]