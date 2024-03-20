
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  // Utilisez useNavigate pour obtenir la fonction de navigation
  const navigate = useNavigate();

  // STATE
  const [inputValue, setInputValue] = useState("");

  // COMPORTEMENTS
  const handleSubmit = (event) => { 
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Déclenchez la navigation lorsque le bouton est cliqué
  const handleButtonClick = () => {
    navigate('/OrderPage');
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
