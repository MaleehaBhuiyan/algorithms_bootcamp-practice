function factorial(num){
    if(num === 1){
        console.log("REACHED THE BASE CASE")
        console.log("num: ", num)
        return 1;
    }  
    console.log("num: ", num)
    return num * factorial(num -1);
}

factorial(3)

