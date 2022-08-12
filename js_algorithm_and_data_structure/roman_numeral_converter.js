function convertToRoman(num) 
{
	const ROM_NUMERALS = [
		{ 'value':1000, 'label':'M'},
		{ 'value':900, 'label':'CM'},
		{ 'value':500, 'label':'D'},
		{ 'value':400, 'label':'CD'},
		{ 'value':100, 'label':'C'},
		{ 'value':90, 'label':'XC'},
		{ 'value':50, 'label':'L'},
		{ 'value':40, 'label':'XL'},
		{ 'value':10, 'label':'X'},
		{ 'value':9, 'label':'IX'},
		{ 'value':5, 'label':'V'},
		{ 'value':4, 'label':'IV'},
		{ 'value':1, 'label':'I'},
	];

	for (let key in ROM_NUMERALS)
	{
		const value = ROM_NUMERALS[key].value;
		const label = ROM_NUMERALS[key].label;
		
		if ((num / value) >= 1)
		{
		num -= value;
		if (num > 0)
			label += convertToRoman(num);
		return (label);
		}
	}
	return (num);
}
console.log('result: ', convertToRoman(0));