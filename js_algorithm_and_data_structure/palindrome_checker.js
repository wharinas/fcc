function palindrome(str) 
{
	let str_match = str.match(/[a-z0-9]+/ig);
		str_match = str_match.join('');
		str_match = str_match.toLowerCase();
	const is_palindrome = (str) => {
		const half_length = Math.ceil(str.length / 2);
		const back        = str.slice(str.length - half_length, str.length);
		let back_flip     = "";

		for (let i in back)
		back_flip += back[(back.length - 1) - i];
		return (str.slice(0, half_length) == back_flip);
	};
	return (is_palindrome(str_match));
}

// palindrome("eye");
palindrome("_eye");