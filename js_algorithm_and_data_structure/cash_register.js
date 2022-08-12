function checkCashRegister(price, cash, cid) 
{
	const CURRENC = [
		{ label:'ONE HUNDRED', value:100 },
		{ label:'TWENTY', value:20 },
		{ label:'TEN', value:10 },
		{ label:'FIVE', value:5 },
		{ label:'ONE', value:1 },
		{ label:'QUARTER', value:0.25 },
		{ label:'DIME', value:0.1 },
		{ label:'NICKEL', value:0.05 },
		{ label:'PENNY', value:0.01 },
	];
	const cid_sum = () => {
		return (cid.reduce((sum, item) => sum + item[1], 0).toFixed(2));
	};
	const get_cid_key = (name) => {
		for (const key in cid)
		if (cid[key][0] == name)
			return key;
	};
	let change = [];
	let change_value = cash - price;

	for (let crc_key in CURRENC)
	{ 
		const crc_label = CURRENC[crc_key].label;
		const crc_value = CURRENC[crc_key].value;

		if (change_value >= crc_value)
		{
		const cid_key = get_cid_key(crc_label);

		if (change_value >= cid[cid_key][1])
		{
			change[crc_label] = cid[cid_key][1];
			change_value = parseFloat(change_value - cid[cid_key][1]).toFixed(2);
			cid[cid_key][1] = 0;
		}
		else
		{
			const decrease_change = change_value % crc_value;
			const change_balance = change_value - decrease_change;

			if (change_balance == 0)
			{
			change[crc_label] = change_value;
			cid[cid_key][1] -= change_value;
			change_value = 0;
			}
			else
			{
			change[crc_label] = change_balance;
			cid[cid_key][1] -= change_balance;
			change_value = parseFloat(change_value - change_balance).toFixed(2);
			}
		}
		}
	}

	let change_result = [];
	if (cid_sum() == 0)
		for (let key in CURRENC)
		{ 
		key = (CURRENC.length - 1) - key;
		const label = CURRENC[key].label;
		change_result.push([CURRENC[key].label, !change[label]?0:change[label]]);
		}
	else
		for (let key in change)
		change_result.push([key, change[key]]);

	// Conclude:
	if (change_value > 0) // Case Insufficient funds:
		return ({ status:"INSUFFICIENT_FUNDS", change:[] });
	if (cid_sum() > 0)
		return ({ status:"OPEN", change:change_result });
	else
		return ({ status:"CLOSED", change:change_result });
}