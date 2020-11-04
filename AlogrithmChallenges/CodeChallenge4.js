// Write a function called averagePair. Given a sorted array of integers andd a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 

// averagePair([1,2,3],2.5) // true 
// averagePair([1,3,3,5,6,7,10,12,19],8) // true 
// averagePair([-1,0,3,4,5,6],4.1) // false
// averagePair([],4) // false  

/* 
STEPS:
1) Create a function and pass in arr and num.
2) Create 2 pointers, one that is starting from the first index and one that is starting from the second index. 
3) Make a while loop statement (while index one <= arr.length)
4) Make another while loop for the second pointer
4) Within the second while statement write 2 if statements
    a) if the conditional is true then return true 
    b) if the conditional is false then keep the while loop going
5) Once the while loop has finished return false 
*/

//MY WAY 
// was wrong because it returned false for the second problem??? still confused as to why but will come back to this 
function averagePair(arr, num){
    let pointer1 = 0
    let pointer2 = 1

    while(arr[pointer1] <= arr.length){
        while(arr[pointer2] <= arr.length){
            if((arr[pointer1] + arr[pointer2]) / 2 === num)
            {
                return true 
            }
            pointer2 ++ 
        }
        pointer1 ++
        pointer2 = 1
    }
    return false 
}

//CORRECT SOLUTION 

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start] + arr[end]) /2
        if(avg < num) start++
        else end-- 
    }
    return false 
}