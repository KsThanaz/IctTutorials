// Write a JS function to get an array and to read the first element of an array.

let array=[3,2,5,4,7,6];
function arr(){
    let first=array[0];
    console.log("First element is " + first);
}
arr();

// Check whether it is prime or not

function test_prime(n) {

    if (n === 1) {
      return false;
    }
    else if (n === 2) {
      return true;
    } else {
     
      for (var x = 2; x < n; x++) {
      
        if (n % x === 0) {
          return false;//not prime
        }
      }
    
      return true;// prime
    }
  }
  
  // Log the result of calling test_prime with the input number 37 to the console
  console.log(test_prime(3));