"use client";
import data from "@/films.json";
import { useState, useEffect } from "react";
import Filmcard from "@/components/filmCard";

export default function Films(){
	const [filmsArray, setFilmsArray] = useState([]);
	useEffect( () => {
		setFilmsArray(data);
	}, [])
	return(
		<>
			{filmsArray.length > 0 &&
				<div className="films-container">
					{filmsArray.map(f => {
						return <Filmcard key={f.id} film={f}/>
					})}			
				</div>
			}
		</>
	)
}

