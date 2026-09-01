const products = [
	{
		id:1,
		name:'Keyboard',
		price: 40,
		category:'Peripherals'
	},
	{
		id:2,
		name:'Monitor',
		price: 400,
		category:'Peripherals'
	},
	{
		id:1,
		name:'Intel 4004',
		price: 400,
		category:'Hardware'
	}
]

const names = products.map(({name}) =>name);

console.log(names);

const peripherals = products.filter(
	({ category }) => category === 'Peripherals'
);

console.log(peripherals);

const monitor = products.find(({id}) => id === 2);

console.log(monitor);
