import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled className="right-side">
      {/* <div className="admin-button">Admin Button</div> */}
    {/* <div className="profile">
      <p>Bonjour {username}</p>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
    <div className="picture"></div> */}
    <Profile/>
  </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    /* .admin-button{
      background: lightblue;
    } */

    .profile {
      background: yellow;
    }
  
`;