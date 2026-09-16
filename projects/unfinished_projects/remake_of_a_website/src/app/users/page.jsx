"use client";

import { useState, useEffect } from 'react';

export default function users(){
	const [usersArray, setUsers] = useState([]);
	const [errorMsg, setError] = useState("");

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=10")
		.then(res => res.json())
		.then(info => {
			console.log(info);
			setUsers(info);
			setError("");
		})
		.catch(error => setError(error.message))
	}, [] );
	return (
		<>
			<h1>Users list</h1>
			{errorMsg != "" && <p>ERROR: {error}</p>}
			{usersArray.length > 0 ?

				<div>
						
				</div>

				:

				<div>

				</div>
			}
		</>
	);
}
