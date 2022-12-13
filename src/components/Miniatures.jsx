import React from "react"

// Mise en place du composant Link à partir de react-router-dom en vue de la navigation dans l'application (Pour les liens cliquables des miniatures)
import { Link } from "react-router-dom"

// Mise en place du css via le fichier Miniatures.css
import "./styles/Miniatures.css"

// Mise en place d'une fonction Miniature contenant un objet de type props et retournant les miniatures visibles sur la page
export default function Miniature(props) {
  return (
    <section className="miniature">
      <img src={props.src} alt={props.text}/>
      <Link className="lien" to={"/location/"+props.id} draggable="false">
        <h2>{props.text}</h2>
      </Link>
    </section>
  );
}