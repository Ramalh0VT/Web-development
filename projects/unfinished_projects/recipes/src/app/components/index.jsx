"use client";

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
		<>
			
		</>
	);
}
