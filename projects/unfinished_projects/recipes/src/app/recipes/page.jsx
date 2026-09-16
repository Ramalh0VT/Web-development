"use client";
import "../globals.css";
import { useState, useEffect } from 'react';
import "../components/recipes_giver/"

export default function recipe_returner(){
	const [recipesArray, setRecipes] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");	
	useEffect( () => {
		fetch("https://dummyjson.com/recipes/")
		.then(res => res.json())
		.then(info => {
			console.log(info);
			setRecipes(info.recipes);
			setErrorMsg("");
		})
		.catch(error => setErrorMsg(error.message))
	}, [] );
	return(
		<div>
			{errorMsg != "" && <p>An error occured: {errorMsg}</p>}
			{recipesArray.length > 0 ?
					<div>
						{recipesArray.map((recipe, idx) => {
							return(
								<recipe_card(recipe)/>
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
