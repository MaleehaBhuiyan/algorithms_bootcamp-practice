// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false 


function someRecursive(arr, callBack){
    let val = null 
    if(arr.length > 0){
        for(let i in arr){
            let val = arr[i]
            if(callBack(val) == true){
                return true 
            }
            else return someRecursive(arr.slice(1), callBack)
        }
    }
    return false 
}










