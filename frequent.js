// Write a javascript program to find the most frequent item of an array

var arr = [3, 7, 7, 7, 2, 3, 7, 3, 7, 2, 4, 9, 3];

var mostfre = 1;
var fre = 0;
var item;

for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j])
            fre++;
        if (mostfre < fre) {
            mostfre = fre;
            item = arr[i];
        }
    }
    fre = 0;
}
console.log(item + " ( " + mostfre + " times ) ");