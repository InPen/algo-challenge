/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let longest = "";
	text.split(' ').forEach(w => {
		if (w.length > longest.length) {
			longest = w
		}
	})
	return longest;
}


module.exports = longestWord