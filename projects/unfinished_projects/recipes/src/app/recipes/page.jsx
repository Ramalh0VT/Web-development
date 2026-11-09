"use client";
import "../globals.css";
import { useState, useEffect } from 'react';
//import recipe_card from "../components/recipes_giver/"

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
								<div>
			<h1>Name</h1>
			<p>{recipe.name}</p>
			<h1>Cuisine</h1>
			<p>{recipe.cuisine}</p>
			<h1>Calories per serving (average)</h1>
			<p>{recipe.caloriesPerServing}</p>
			<h1>Difficulty</h1>
			<p>{recipe.difficulty}</p>
			<h1>Image</h1>
			<img src={recipe.image} alt="Food image"/>
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
