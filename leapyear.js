// a year will be a leap year if it is divided by 4//
//simple logic//

function leapYear(year){
if(year % 4 === 0){
return true;
}

else{
    return false;
}
} 
const isLipi = leapYear(2024);
console.log(isLipi)