// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

/*
1) Declare main function and pass in two strings 
2) Create a helper function that extracts all the same letters and puts it into a new string 
    a) if it cant extract all the letters return empty string 
    b) if it can return a new string 
3) Put the helper function into the main function and set the first
string equal to the new string 
    a) if the words are equal then return true 
    b) if not return false 
*/

function isSubsequence(str1, str2){

}

function extractWord(str1, str2){
    let pointer1 = str1[0]
    let pointer2 = str2[0]
    let i = 0 

    while(i <= str2.length){
        console.log(str2[i])
        i++
    }
}