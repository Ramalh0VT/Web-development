import "./filmCard.css"
export default function filmCard({film}){
	return(
		<div className="film-wrapper">
			<img src={film.imagem} alt="film image"/>
			<h2>{film.titulo}</h2>
			<a href={`/films/${film.id}`}>Know more...</a>
		</div>
	)
}
