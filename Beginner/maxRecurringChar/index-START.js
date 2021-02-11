/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let map = {}
    let arrText = text.split('')
    for(let i = 0; i <= arrText; i++) {
        const char = arrText[i]
        if(map.char){
            map.char += 1
        } else {
            map.char = 1
        }
    }
    console.log(map);
}



module.exports = maxRecurringChar;