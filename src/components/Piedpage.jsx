import React from "react"

// Mise en place du css via le fichier Piedpage.css
import "./styles/Piedpage.css"

// Import d'un composant react Logo via le fichier logo.svg
import { ReactComponent as Logo } from '../images/logo.svg'

// Mise en place d'une fonction Piedpage retournant le pied de page
export default function Piedpage() {  
  return (
    <footer>
      <Logo className="logo"/>
      <p className="copyright">© 2022 Kasa. All rights reserved</p>
    </footer>
  );
}