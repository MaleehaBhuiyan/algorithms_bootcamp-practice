// Given two strings, write a function to determine is the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') -> true
// validAnagram('aaz', 'zza') -> false
// validAnagram('anagram', 'nagaram') -> true
// validAnagram('rat', 'car') -> false
// validAnagram('awesome', ''awesom) -> false
// validAnagram('qwerty', ''qeywrt) -> true
// validAnagram('texttwisttime', 'timetwisttext') -> true

/*
STEPS:
1) write a conditional to see if the string lengths are the same 
2) set two frequency objects 
3) add the keys and values ti those objects 
4) write the conditional statements for those objects 
    a) they need to have the same keys 
    b) each key must have the same frequency 
*/

//MY WAY//
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false 
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false 
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false 
        }
    }
    return true 
}

validAnagram("hello", "llohe")


//HIS SOLUTION//

function validAnagram(first,second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {}

    for(let i = 0; i < first.length; i++){
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -= 1
        }
    }

    return true 
}