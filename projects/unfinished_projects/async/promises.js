function queryProduct(id){
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if (id ===1) resolve({id:1, nome:'Keyboard'});
		else reject(new Error(`Product ${id} not found!`));

	},150);
})
}

queryProduct(1).then((product)=>console.log('Sucess: ',product))
.catch((error)=>console.error('Error:', error.message))
