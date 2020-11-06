// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern 

// areThereDuplicates(1,2,3) -> false
// areThereDuplicates(1,2,2) -> true
// areThereDuplicates('a', 'b', 'c', 'a') -> true


function areThereDuplicates(){
    let frequencyOfNums = {}

    for(let i of arguments){
        frequencyOfNums[i] = (frequencyOfNums[i] || 0) + 1 
    }

    for(let key in frequencyOfNums){
        if(frequencyOfNums[key] > 1){
            return false  
        }
        else{
            return true 
        }
    }
}

