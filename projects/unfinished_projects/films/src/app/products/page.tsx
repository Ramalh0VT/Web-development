"use client";
import { useState, useEffect } from "react";
// import "./products.css";
// import Productscard from "@/components/Productscard"

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
			{errorMsg != "" && <h1>An error occurred:{errorMsg}</h1>}
			{productsArray.length > 0 
			
			?

			<div className="products-container">
				{productsArray.map(p => {
					return <Productscard key={p.id} product={p}/>
				})}
			</div>
		

			:

			<div>
				<h1>No products yet :(</h1>
			</div>

			}
		</>
	)	
}
