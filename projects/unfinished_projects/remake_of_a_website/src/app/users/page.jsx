"use client";

import { useState, useEffect } from 'react';

export default function users(){
	const [usersArray, setUsers] = useState([]);
	const [error, setError] = useState("");

	useEffect( () => {}, [] )
	return (
		<>
			<h1>Users list</h1>	
		</>
	);
}
