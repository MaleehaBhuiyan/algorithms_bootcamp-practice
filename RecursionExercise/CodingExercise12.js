// write a function called productOfArray which takes in an array of numbers and returns the product of them all

// productArray([1,2,3]) -> 6 
// productArray([1,2,3,10]) -> 60

function productOfArray(arr){
    if(arr.length === 0){
        console.log("***BASE CASE***")
        console.log(arr)
        return 1 
    }
    console.log("arr[0]: ", arr[0], "| Array: ", arr)
    return arr[0] * productOfArray(arr.slice(1)) 
}

productOfArray([1,2,3])



