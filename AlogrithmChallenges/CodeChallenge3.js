//Write a function called sameFrequency. Given two positive integer, find out if the two numbers have the same frequency of digits.

// sameFrequency(182, 281) -> true
// sameFrequency(34, 14) -> false
// sameFrequency(3589578, 5879385) -> true
// sameFrequency(22, 222) -> false

/*
STEPS:
1) declare function and pass in num1 and num2 
2) If the length of each num is not equal then return false 
3) else create 2 objects: frequencyCount1 and frequencyCount2
4) loop through the first num 
5) loop through the second num 
6) if the key in frequencyCounter1 is not in frequencyCounter2, return false 
7) if the key value in frequencyCounter1 does not equal to the key value in frequecyCounter2, return false 
*/

function sameFrequency(number1, number2){
    let num1 = number1.toString();
    let num2 = number2.toString();

    if(num1.length !== num2.length){
        return false
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of num1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of num2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true 
}