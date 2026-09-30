"use client";
import data from "@/films.json";
import { useState, useEffect } from "react";
import FilmCard from "@/components/filmCard";
import "@/components/filmCard/filmCard.css";

export default function Films() {
	const [filmsArray, setFilmsArray] = useState<any[]>([]);

	useEffect(() => {
		setFilmsArray(data);
	}, []);

	return (
		<main className="films-page">
			<header className="films-header">
				<h1 className="films-title">Filmes</h1>
				<p className="films-count">
					{filmsArray.length}{" "}
					{filmsArray.length === 1 ? "filme no catálogo" : "filmes no catálogo"}
				</p>
			</header>

			{filmsArray.length > 0 ? (
				<div className="films-container">
					{filmsArray.map((f) => (
						<FilmCard key={f.id} film={f} />
					))}
				</div>
			) : (
				<p className="films-empty">Nenhum filme encontrado.</p>
			)}
		</main>
	);
}
