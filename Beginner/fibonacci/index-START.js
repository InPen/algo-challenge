/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
	if (n < 2) return 1;
	if (n === 2) return 2
	return fibonacci(n-1) + fibonacci(n-2);
}

module.exports = fibonacci