//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

//countUniqueValues([1,1,1,1,1,2]) -> 2
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
//countUniqueValues([]) -> 0
//countUniqueValues([-2,-1,-1,0,1]) -> 4 

/*
HINT: USE POINTERS 
STEPS:
1) make function and put in the array as an argument 
2) create a variable and set it equal to 0 
3) create one pointer starting at the beginning
4) create a second pointer for the second number
5) create a while loop for while the pointer is less than or equal to array length ... 
6) compare the two numbers
    a) if they are the same don't add anything to the variable 
    b) if they are different add +1 to the variable 
*/

//MY WAY 

function countUniqueValues(arr){
    let uniqueValues = 0;
    let pointerOne = 0
    let pointerTwo = 1 

    while(pointerOne <= arr.length){
        if(arr[pointerOne] === arr[pointerTwo]){
            uniqueValues += 0;
            pointerOne ++;
            pointerTwo ++;
        } else {
            uniqueValues += 1;
            pointerOne ++;
            pointerTwo ++;
        }
    }
    return uniqueValues
}


//RECOMMENDED SOLUTION
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j=1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}