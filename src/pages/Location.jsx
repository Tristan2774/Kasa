import React from "react"

// Mise en place du hook useParams à partir de react-router-dom en vue de faire correspondre routes et url
import { useParams } from "react-router-dom"

// Remontée des locations à partir du fichier logements.json
import locations from "../data/logements.json"

// Import du composant Diaporama à partir du fichier Diaporama.jsx
import Diaporama from "../components/Diaporama"

// Import du composant Tag à partir du fichier Tag.jsx
import Tag from "../components/Tag"

// Import du composant Menuderoulant à partir du fichier Menuderoulant.jsx
import Menuderoulant from "../components/Menuderoulant"

// Import d'un composant react Star à partir du fichier star.svg
import { ReactComponent as Star } from '../images/star.svg'

// Import du composant ErreurPage à partir du fichier ErreurPage.jsx
import ErreurPage from "./ErreurPage"

// Mise en place du css via le fichier Location.css
import "./styles/Location.css"

// Mise en place d'une fonction location pour visualisation des biens avec images, description et menu déroulant

export default function Location() {
  const { id } = useParams();
  const location = locations.find(location => location.id === id);
  window.scrollTo(0, 0);
  if (location === undefined) { return <ErreurPage /> }
  const pictures = location.pictures.map((picture, index) => 
    <img src={picture} alt="" key={index} />
  )
  return (
    <main className="location">
      
      <Diaporama>
        {pictures}
      </Diaporama>

      <div className="cadrebas">
        <div className="texte">
          <h1>{location.title}</h1>
          <h2>{location.location}</h2>
          <div className="tags">
          {location.tags.map((tag, index) => 
            <Tag text={tag} key={index} />
          )}
          </div>
        </div>
        <div className="encartdroit">
          <div className="proprio">
            <span className="nom">{location.host.name.split(" ")[0]}<br />{location.host.name.split(" ")[1]}</span>
            <img src={location.host.picture} alt="" />
          </div>
          <div className="etoiles">
            {[1,2,3,4,5].map(star => 
              <Star key={star} className={ star <= location.rating ? "etoile" : null }/>
            )}
          </div>
        </div>
      </div>

      <div className="deroulant">
        <Menuderoulant text="Description">{location.description}</Menuderoulant>
        <Menuderoulant text="Équipements">
          <ul>
            {location.equipments.map((equipment, index) => 
              <li key={index}>{equipment}</li>
            )}
          </ul>
        </Menuderoulant>
      </div>
    </main>
  );
}