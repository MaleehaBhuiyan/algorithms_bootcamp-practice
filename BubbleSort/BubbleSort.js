// My Way 

function bubbleSort(arr){
    for(var i = arr.length; i >= 0; i--){
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp 
            }
        }
    }
    return arr 
}

bubbleSort([5,3,4,1,2])


// Another version, different ES25 syntax 

function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
            }
        }
    }
    return arr 
}

// Optimized version (w/a nearly sorted array)

function bubbleSort(arr){
    var noSwaps
    for(var i = arr.length; i > 0; i --){
        noSwaps = true 
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp 
                noSwaps = false 
            }
        }
        if(noSwaps) break 
    }
    return arr 
}