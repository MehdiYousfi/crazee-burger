
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous</h1>
        <br />
        <h2>Connectez vous</h2>
      </div>
      <div>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required />
        {/* Utilisez la fonction de navigation lorsque le bouton est cliqué */}
        <button onClick={handleButtonClick}> Accédez à votre espace</button>
      </div>  
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
background: green;



`