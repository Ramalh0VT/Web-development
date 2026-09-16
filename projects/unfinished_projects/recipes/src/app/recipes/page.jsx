import "../globals.css"
import recipes_giver from "@/app/components/recipes_giver" 
export default function recipes_page(){
	return(
		<>
			<h1>List of recipes: </h1>
			<recipes_giver/>
		</>
	)
}
