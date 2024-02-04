//function takes an array as parameter
//give me the average number of the odd number in the array...//
//put add number in an array
function oddAverage(numbers){
for(const number of numbers){
    if(number % 2 === 1){
        console.log(number);
     }
}
 }
const numbers = [42, 13, 58, 56, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd number is:',avg)


// bijor shonkhar somosti////
// let sum = 0;
// for(const number of odds){
//     sum = sum + number;
// }
// console.log(sum);