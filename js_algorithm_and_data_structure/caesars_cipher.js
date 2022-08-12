function rot13(str) 
{
	let newStr = "";
	const charCipher = (char) => {
		const charCode = (char.charCodeAt(0) + 13) > 90 ? char.charCodeAt(0) - 13 : char.charCodeAt(0) + 13 ;
		return String.fromCharCode(charCode);
	};

	for (let key in str)
		newStr += /[A-Z]/.test(str[key]) ? charCipher(str[key]) : str[key];
	return (newStr);
}
rot13("SERR PBQR PNZC");