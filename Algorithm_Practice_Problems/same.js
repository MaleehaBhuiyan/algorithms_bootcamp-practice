//Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared int he second array. The frequescy of the valye must be the same.

// same([1,2,3], [4,1,9]) -> true 
// same([1,2,3], [1,9]) -> false
// same([1,2,3], [4,4,1]) -> false 


/* 
STEPS:

1) Check if arrays are the same length 
2) Iterate through the first array and square the numbers, put the squared numbers in a new array 
3) Check to see if the values in the new array are equal to the values in the second array, if they are equal return truem if not return false 
*/

//MY WAY//
function same(arrayOne, arrayTwo){
    let newArray = []
    if(arrayOne.length === arrayTwo.length)
    {
        for(let i = 0; i < arrayOne.length; i++){
            newArray.push(arrayOne[i]**2)
        }
        
        return checker(arrayTwo, newArray)
    }
    else
    {
        return false
    }
}

function checker(arrayOne, arrayTwo){
    if(arrayTwo.every(i => arrayOne.includes(i)))
    {
        return true 
    }
    else 
    {
        return false 
    }
}

same([1,2,3], [1,9])


//NAIEVE WAY FROM VIDEO//
// big O = O(n^2)

function same(arr1, arr2){
    if(arr1.length !== arr2.length)
    {
        return false 
    }
    for(let i = 0; i < arr1.length; i++)
    {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1)
        {
            return false; 
        }
        arr2.splice(correctIndex,1)
    }
    return true 
}


//RECOMMENDED WAY FROM VIDEO//
// big O = O(n)

function same(arr1, arr2){
    if(arr1.length !== arr2.length)
    {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1)
    {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false 
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false 
        }
    }
    return true 
}