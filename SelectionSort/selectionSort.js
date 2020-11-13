function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j //figuring out the lowest index 
            }
            if(i !== lowest){ //this is so we dont swap an index that is alreaddy the lowest 
                temp = arr[i] //now swap i with the lowest val 
                arr[i] = arr[lowest]
                arr[lowest] = temp
            }
        }
    }
    return arr;
}

selectionSort([2,3,1])

/*
Time complexity O(n^2)
• This is better than bubble sort only if you want to reduce number of swaps (worried about writing to memory)
*/