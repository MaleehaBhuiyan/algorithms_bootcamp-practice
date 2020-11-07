// Write a recursive function called isPalinddrome which returns true if the string passed to it is a palindrome (read the same foward and backward). Otherwise return false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

/*
Basically what you need to do is write the str backwards and if it matches the original str return true and if it does not then return false
*/

function isPalindrome(str){
    let reverseStr = helper(str)
    if(reverseStr == str){
        return true
    }
    else return false 
}

function helper(str){
    if(str.length <= 1) return str
    return helper(str.slice(1)) + str[0]
}


