"use client"
import { useState } from "react"

export default function orders(){
	const [orders_var, setOrder] = useState([]);
	

	const [client, SetClient] = useState("");
	const [equipment, SetEquipment] = useState("");
	const [desc, SetDesc] = useState("");

	const [error, setError] = useState("");
	
	return(
		<main>
			<h1>Service orders</h1>
			<form>
				<div>
					<label htmlFor="client"></label>
			<input type="text" name="client" id="client" value="{client}" placeholder="Client's name">	
			</div>		
			</form>
		</main>
	)
}
