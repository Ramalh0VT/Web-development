import "./filmCard.css";

type Film = {
	id: number | string;
	imagem: string;
	titulo: string;
};

export default function FilmCard({ film }: { film: Film }) {
	return (
		<div className="film-wrapper">
			<img src={film.imagem} alt={film.titulo} />
			<h2>{film.titulo}</h2>
			<a href={`/films/${film.id}`}>Know more...</a>
		</div>
	);
}
