
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm"
import styled from 'styled-components';

export default function LoginPage() {

// AFFICHAGE

  return (
  
   <LoginPagStyled>
     <Logo />
     <LoginForm />
   </LoginPagStyled>

  )
}

const LoginPagStyled = styled.div`
  background: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;






