function randomNumber(min, max) {
    // Valid args
    if(min >= max) return -1;
    // Math.random -> 0 ~ 0.99999 
    return Math.round(Math.random()*(max - min) + min);
}

console.log(randomNumber(50,10));

function convertHoursToSeconds(hours) {
    if(hours <= 0) return -1;
    
    const SECONDS_PER_HOURS = 3600;
    return hours * SECONDS_PER_HOURS;
}

console.log(convertHoursToSeconds(1));


function findMax(a, b, c){
    if( Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) ) return -1;
    
    if( a - b > 0 && a - c > 0 ) return a;
    if( b - a > 0 && b - c > 0 ) return b; 
    return c;    
} 

console.log(findMax(10,20,30));

function getTheOnesFromNumbers(n){
    //  1 2 3 -> 3
    if(Number.isNaN(n)) return -1;


    return n % 10;
}

console.log(getTheOnesFromNumbers(12345));


function getTheTensFromNumbers(n){
    if(Number.isNaN(n)) return -1;

    n = n - (n % 10);
    return (n / 10) % 10;
}

console.log(getTheTensFromNumbers(1234));


function getTheHundredsFromNumbers(n){
    if(Number.isNaN(n)) return -1;

    n = (n - (n % 10)) / 10;
    n = n - (n % 10);
    return (n / 10) % 10;
}

console.log(getTheHundredsFromNumbers(4321));

