import React from "react"

// Mise en place du composant Link à partir de react-router-dom en vue de la navigation dans l'application (Si erreur 404 possibilité de cliquer sur le lien "Retourner sur la page d'accueil" )
import { Link } from "react-router-dom"

// Mise en place du css via le fichier ErreurPage.css
import "./styles/ErreurPage.css"

// Mise en place d'une fonction ErreurPage retournant la page d'erreur 404
export default function ErreurPage() {
  return (
      <main className="ErreurPage">
        <h1>404</h1>
        <h2>Oups! La page que<br /> vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
  );
}