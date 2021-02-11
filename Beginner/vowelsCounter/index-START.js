/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let count = 0 
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let letters = text.toLowerCase().split('')

    letters.forEach(el => {
        if(vowels.has(el)){
            count++
        }
    })
    return count 
}



module.exports = vowelsCounter;
