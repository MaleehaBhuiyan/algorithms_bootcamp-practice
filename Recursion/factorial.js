function factorial(num){
    if(num === 1){
        console.log("num: ", num, 
        "***REACHED THE BASE CASE***")
        return 1;
    }  
    console.log("num: ", num)
    return num * factorial(num -1);
}

factorial(3)





