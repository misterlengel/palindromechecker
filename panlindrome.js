
function checkPalindrome(word){
	var word2 = word.split("").reverse().join("");

	if (word == word2){
		document.getElementById('palindromeCheck').innerHTML = 'It is a palindrome.';
	} else {
		document.getElementById('palindromeCheck').innerHTML = 'It is not a palindrome.';
	};
};
