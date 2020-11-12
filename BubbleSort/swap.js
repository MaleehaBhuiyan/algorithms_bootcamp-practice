// For bubble sort you must swap numbers 

// ES5 way 

function swap(arr, idx1, idx2){
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}
    


// ES2015 way 

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}