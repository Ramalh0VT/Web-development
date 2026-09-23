"use client";
import "./filmId.css"

import { useParams } from "next/navigation";

import { useState, useEffect } from "react";
import data from "@/films.json"

export default function Film(){
	const [film, setFilm] = useState({});
	const params = useParams();
	useEffect( () => {
		const foundFilm = data.find(f => f.id == params.id);
		setFilm(foundFilm);
	}, [])

	return(
		<>
			{film != null &&
			<div>
				<h1>Film title: {film.titulo}</h1>
				<h2>Release date: {film.ano}</h2>
				<h1><b>DESCRIPTION:</b></h1>
				<p>{film.sinopse}</p>
				<img src={film.imagem} width="250" alt="film image"/>
				<a href={film.trailer} >Film link</a>
			</div>
			}
		</>
	)
}
