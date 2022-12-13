import React from "react"

import ReactDOM from "react-dom"

// Import du router et des routes et du outlet via le package npm react-router-dom
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

// Import du composant En tête à partir du fichier Entete.jsx 
import Entete from "./components/Entete"

// Import du composant Pied de page à partir du fichier Piedpage.jsx 
import Piedpage from "./components/Piedpage"

// Import du composant Page principale à partir du fichier PagePrincipale.jsx 
import PagePrincipale from "./pages/PagePrincipale"

// Import du composant A propos à partir du fichier Apropos.jsx 
import Apropos from "./pages/Apropos"

// Import du composant Location à partir du fichier Location.jsx 
import Location from "./pages/Location"

// Import du composant ErreurPage à partir du fichier ErreurPage.jsx 
import ErreurPage from "./pages/ErreurPage"

// Mise en place du css via le fichier index.css
import "./index.css";

// Utilisation de la méthode ReactDom.render pour prise en compte des routes dans la page
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agencement />}>
          <Route index element={<PagePrincipale />} />
          <Route path="about" element={<Apropos />} />
          <Route path="location/:id" element={<Location />} />
          <Route path="*" element={<ErreurPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Mise en place de de la fonction Agencement (pour agencement de la page) pour la mise en place de l'entête, outlet et pied de page (sont wrappés avec <>)
function Agencement() {
  return (
    <>
      <Entete />
      <Outlet />
      <Piedpage />
    </>
  );
}
