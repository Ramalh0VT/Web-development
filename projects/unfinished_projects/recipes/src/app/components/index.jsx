"use client";

import "../globals.css";

import { useState, useEffect } from 'react';

export default function recipe_returner(){
	const [recipesArray, setRecipes] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	
	useEffect( () => {
		fetch('https://dummyjson.com/recipes/10')
		.then(res => res.json())
		.then(info =>{
			console.log(info);
			setRecipes(info.recipes);
			setError("");
		});
		.catch(error => setErrorMsg(error.message))

	}, []);
	return(
		<div>
			{errorMsg != "" && <p>An error occured: {errorMsg}</p>}
			{recipesArray.length > 0 ?
					<div>
						{recipesArray.map((user, idx) => {
							return(
								<div>
									// recipes info here
								</div>
							);
						})}
					</div>
					:
					<div>
						<p>No recipes at the moment :(</p>
					</div>
			}
		</div>
	);
}
