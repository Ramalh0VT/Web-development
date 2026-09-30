"use client";

import "./filmId.css";

import { useParams } from "next/navigation";
import data from "@/films.json";

export default function Film() {
  const params = useParams<{ id: string }>();
  const film = data.find((f) => String(f.id) === params.id);

  if (!film) {
    return (
      <main className="film-page">
        <div className="film-notfound">
          <h1>Filme não encontrado</h1>
          <p>Não existe nenhum filme com o id "{params.id}".</p>
        </div>
      </main>
    );
  }

  return (
    <main className="film-page">
      <article className="film">
        <div className="film-poster">
          <img
            src={film.imagem}
            width={700}
            alt={`Imagem do filme ${film.titulo}`}
          />
        </div>

        <div className="film-info">
          <p className="film-label">Film title</p>
          <h1 className="film-title">{film.titulo}</h1>

          <p className="film-year">
            <span className="film-label">Release date</span>
            <span className="film-year-value">{film.ano}</span>
          </p>

          <section className="film-description">
            <h2 className="film-label">Description</h2>
            <p>{film.sinopse}</p>
          </section>

          <a
            className="film-link"
            href={film.trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Film link
          </a>
        </div>
      </article>
    </main>
  );
}
