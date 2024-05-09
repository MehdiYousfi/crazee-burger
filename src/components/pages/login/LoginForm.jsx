
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  // Utilisez useNavigate pour obtenir la fonction de navigation
 

  // STATE
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()

  // COMPORTEMENTS
  const handleSubmit = (event) => { 
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`)
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Déclenche la navigation lorsque le bouton est cliqué
  const handleButtonClick = () => {
    // navigate('/OrderPage');
  };

  // AFFICHAGE
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez vous</h2>
      <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required />
      {/* Utilisez la fonction de navigation lorsque le bouton est cliqué */}
      <button onClick={handleButtonClick}> Accédez à votre espace</button>
      
    </form>
  );
}


/** 4 méthodes pour ajouter du style à un composant
 * 1: inline style
 * 2: object style
 * 3: modules CSS (avec className)
 * 4: global style (index.css)
 * Bonus : Styled components
 */