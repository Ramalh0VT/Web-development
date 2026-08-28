const original ={
	id: 1,
	to_name:'milk',
	amount:5
};

const updated = {...original, amount:150};

console.log({original, updated})

const {to_name, amount} = updated;

console.log(`${to_name} has ${amount} unit(s)`);

