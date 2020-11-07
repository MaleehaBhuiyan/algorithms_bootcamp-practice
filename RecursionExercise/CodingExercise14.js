//Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence

// fib(4) -> 3
// fib(10) -> 55
// fib(28) -> 317811
// fib(35) -> 9227465

/*
fib(8)
1+1+2+4

Base when 
*/

function fib(n){
    if(n <= 2) return 1 
    return fib(n-1) + fib(n-2)
}

