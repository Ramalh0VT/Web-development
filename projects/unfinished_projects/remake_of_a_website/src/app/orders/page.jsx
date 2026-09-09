"use client"
import { useState } from "react"

export default function Orders(){
	const [ordens, setOrders] = useState([]);
	

	const [client, setClient] = useState("");
	const [equipment, setEquipment] = useState("");
	const [desc, setDesc] = useState("");

	const [error, setError] = useState("");
	
	function submitOrder(event){
		event.preventDefault();

		if(client.trim() === ""  || equipment.trim() === "" || desc.trim() ===""){
			setError("Fill in all fields!");
			return;
		}
		else if (desc.length > 100 || desc.length < 15){
			setError("The description length should be in a range of 15 to 100 characters!")
		}


	const newOrder = {
		id: Date.now(),
		client: client.trim(),
		equipment:equipment.trim(),
		desc:desc.trim(),
		status:"open"
	}
	
	setOrders([...ordens, newOrder])
	setClient("")
	setEquipment("")
	setDesc("")
	setError("")
	}
	
	console.log(ordens)
	return(
		<main>
			<h1>Service orders</h1>
			<form onSubmit={submitOrde}>
				<div>
					<label htmlFor="client"></label>
			<input type="text" name="client" id="client" value={client} placeholder="Client's name" onChange={(event) => setClient(event.target.value)}/>	
			<input type="text" name="equipment" id="equipment" value={equipment} placeholder="E.g. laptop" onChange={(event) => setEquipment(event.target.value)}/>	
			<input type="text" name="desc" id="desc" value={desc} placeholder="Description" onChange={(event) => setDesc(event.target.value)}/>
			<button type="submit"> Submit </button>
		</div>		
			</form>
			<h1>{error}</h1>
			<table>
				<tr>
					<th></th>
					<th></th>
					<th></th>
				</tr>
			</table>
		</main>
	)
}
