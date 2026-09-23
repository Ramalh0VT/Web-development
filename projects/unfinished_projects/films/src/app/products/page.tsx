"use client";
import { useState, useEffect } from "react";
// import "./products.css";
// import

export default function Products(){
	const [productsArray, setProductsArray] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	useEffect( () => {
		fetch('https://dummyjson.com/products?limit=10')
		.then(res => res.json())
		.then(info => {
			console.log(info)
			setProductsArray(info)
			setErrorMsg("")
		});
		.catch(error => setErrorMsg(error.message))
	},[])
	return(
		<>
			{errorMsg != "" <h1>An error occurred:{errorMsg}</h1>}
		</>
	)	
}
