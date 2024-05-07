import { Link, useParams } from "react-router-dom";

export default function OrderPage() {

  // STATE
  const {username} = useParams ()
  


  // COMPORTEMENTS 


  //AFFICHAGE
  return (
  <div>
    <h1>Bonjour {username}</h1> 
    <Link to='/'> 
      <button>Déconnexion</button>
    </Link>
  </div>
  )
}
