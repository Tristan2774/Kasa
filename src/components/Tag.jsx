import React from "react"

// Mise en place du css via le fichier Tag.css
import "./styles/Tag.css"

// Mise en place d'une fonction Tag (ou étiquette) contenant un objet de type props et retournant les contenus visibles entre la localisation du bien et les menus déroulants "Description" et "Equipements"
export default function Tag(props) {
  return (
    <span className="tag">
      {props.text}
    </span>
  );
}