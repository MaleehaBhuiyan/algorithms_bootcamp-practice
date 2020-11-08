// Write a function called averagePair. Given a sorted array of integers andd a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 

// averagePair([1,2,3],2.5) // true 
// averagePair([1,3,3,5,6,7,10,12,19],8) // true 
// averagePair([-1,0,3,4,5,6],4.1) // false
// averagePair([],4) // false  

/*
1. Create function and pass a sorted array as well as a target average
2. create 2 pointers: pointer 1 and pointer 2 
3. if target average is higher than average let pointer2 -- 
4. if target average is lower than average let last pointer ++   
5. If average == target average return true else false 
*/

function averagePair(arr, targetAvg){
    let pointer1 = 0
    let pointer2 = arr.length - 1 

    while(pointer1 < pointer2){
        let avg = (arr[pointer1] + arr[pointer2]) / 2 
        if(targetAvg === avg){
            return true 
        }
        else if(targetAvg < avg){
            pointer2--
        }
        else if(targetAvg > avg){
            pointer1++ 
        }
    }
    return false 
}



