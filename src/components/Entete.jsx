import React from "react"

// Mise en place du composant NavLink à partir de react-router-dom en vue de la navigation dans l'application (Pour les liens vers Accueil et A Propos)
import { NavLink } from "react-router-dom"

// Mise en place du css via le fichier Entete.css
import "./styles/Entete.css"

// Import d'un composant react Logo à partir du fichier logo.svg
import { ReactComponent as Logo } from '../images/logo.svg'


// Mise en place d'une fonction Entete retournant l'en tête
export default function Entete() {
  return (
    <header>
      <Logo className="logo"  />
      
      
      <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A Propos</NavLink>
      </nav>
    
    </header>
  );
}