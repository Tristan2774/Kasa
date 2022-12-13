import React from "react"

// Mise en place du css via le fichier Menuderoulant.css
import "./styles/Menuderoulant.css"

// Import d'un composant react flèche via le fichier fleche.svg
import { ReactComponent as Fleche } from '../images/fleche.svg'

// Mise en place d'une fonction MenuGlobal (liste déroulante avec encadré en rouge, sommaire à gauche et flèche d'ouverture à droite)
export default function MenuGlobal(props) {
  return (
    <details className="menuglobal">
      <summary>{props.text}<Fleche /></summary>
      <div>
        {props.children}
      </div>
    </details>
  );
}

// Mise en place d'une fonction MenuGlobalLarge (encadré gris avec zone de texte large contenant un objet de type props qui retourne le contenu déroulant des 4 sommaires (Fiabilité, Respect etc...))
export function MenuGlobalLarge(props) {
  return (
    <details className="menuglobal large">
      <summary>{props.text}<Fleche /></summary>
      <div>
        {props.children}
      </div>
    </details>
  );
}