import React from "react"

// Mise en place du css via le fichier PagePrincipale.css
import "./styles/PagePrincipale.css"

// Import du composant Miniature à partir du fichier Miniatures.jsx
import Miniature from "../components/Miniatures"

// Import du composant locations pour l'appel au fichier logements.json faisant office de db (avec logements, photos, descriptifs, notations etc...)
import locations from "../data/logements.json"

// Import de la bannière image ("Chez vous, partout et ailleurs") pour la page principale 
import Banniere from "../images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"

// Mise en place d'une fonction PagePrincipale retournant la page principale avec bannière et miniatures
export default function PagePrincipale() {
  return (
      <main className="pageprincipale">
        <div className="interieurpage">
          <img src={Banniere} alt="" draggable="false"/>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="miniatures">
          {locations.map(location => {
            return <Miniature text={location.title} src={location.cover} id={location.id} key={location.id} />
          })}
        </div>
      </main>
  );
}