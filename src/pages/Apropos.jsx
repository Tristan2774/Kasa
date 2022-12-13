import React from "react"

// Mise en place du css via le fichier Apropos.css
import "./styles/Apropos.css"

// Import du composant MenuGlobalLarge à partir du fichier Menuderoulant.jsx 
import { MenuGlobalLarge } from "../components/Menuderoulant"

// Import de la bannière image pour la page A Propos
import banniere from "../images/kalen-emsley-Bkci_8qcdvQ-unsplash.png"

// Mise en place d'une fonction A propos retournant les boutons déroulants et leur contenu
export default function Apropos() {
  return (
      <main className="Apropos">
        <div className="agencement">
          <img src={banniere} alt="" draggable="false"/>
        </div>
        <div className="deroulant">
          <MenuGlobalLarge text="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </MenuGlobalLarge>
          <MenuGlobalLarge text="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </MenuGlobalLarge>
          <MenuGlobalLarge text="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </MenuGlobalLarge>
          <MenuGlobalLarge text="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </MenuGlobalLarge>
        </div>
      </main>
  );
}