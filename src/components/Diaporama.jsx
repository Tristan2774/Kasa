import React, { useState } from "react"

// Mise en place du css via le fichier Diaporama.css
import "./styles/Diaporama.css"

// Import d'un composant react flèche via le fichier fleche.svg
import { ReactComponent as Fleche } from '../images/fleche.svg'

// Mise en place d'une fonction Diaporama contenant un objet de type props 
export default function Diaporama(props) {

  // Mise en place du hook useState sur les composants
  const [diaporama, setDiaporama] = useState(0);
  

  // Déclaration de la variable diapos pour utilisation des images via les props
  let diapos = props.children;

  // Si la méthode Array.isArray associée à la props.children et que la longueur de la props.children est supérieure à 1 alors les diapos passent
  if (Array.isArray(props.children) && props.children.length > 1) {
    diapos = props.children[diaporama]
    diapos = <>
      <bouton className="precedent" onClick={() => {
          if (diaporama <= 0) {
            setDiaporama(props.children.length - 1)
          } else { setDiaporama(diaporama - 1) }
        }}>
        <Fleche />
      </bouton>
      {diapos}
      <bouton className="suivant" onClick={() => {
        if (diaporama >= props.children.length - 1) {
          setDiaporama(0)
        } else { setDiaporama(diaporama + 1) }
      }}>
        <Fleche />
      </bouton>
    </>
  }

  // Ajout d'un span en ligne 45 reprenant le diaporama et le props.childen pour afficher le nombre de photos (1/4, 2/4 etc...)
  return (
    <div className="diaporama">
      {diapos}
      <span className="compteur">{diaporama +1} / {props.children.length}</span>
      
    </div>
  );
}