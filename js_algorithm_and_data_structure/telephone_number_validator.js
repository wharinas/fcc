function telephoneCheck(str) 
{
	const cond = [
		/^\d{10}$/,
		/^(\d{3}[-|\s]\d{3}[-|\s]\d{4}){1}$/,
		/^(1\s)(\d{3})[-|\s](\d{3})[-|\s](\d{4})$/,
		/^(1\s\(\d{3}\)\s\d{3}\-\d{4})$/,
		/^\(\d{3}\)\d{3}\-\d{4}$/,
		/^1\(\d{3}\)\d{3}\-\d{4}$/,
	];
	return (cond.some((cond_item) => (cond_item.test(str))));
}
telephoneCheck("1 (555) 555-5555");