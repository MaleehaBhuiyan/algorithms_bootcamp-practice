//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow - do not worry about negative base exponents. 


/* 
STEPS:
1) Write function name and pass in a base and an exponent (base, exponent)
2) Write the base case... this will be when the exponent is equal to 0, return 1 
3) Write the recursion part... call the function again with the base and subtracting one from the exponent 


4^4 = 
4 * 4 
16 * 4
64 * 4 

result = 256 
*/

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent -1)
}


