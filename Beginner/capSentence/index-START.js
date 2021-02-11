/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   let arr = text.split(' ')
   for(let i = 0; i < arr.length; i++){
     let words = arr[i].split('');
     words.forEach((el, index) => {
       if(index == 0){
        words[index] = words[index].toUpperCase()
       } else {
        words[index] = words[index].toLowerCase()
       }
     })
     arr[i] = words.join('')
   }   
   return arr.join(' ')
}



module.exports = capSentence