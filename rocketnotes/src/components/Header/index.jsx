// https://react-icons.github.io/react-icons/search/#q=RiShut
import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles";

/* A img está ao lado do texto com um <span> e um <strong>
Precisa por uma div para encaixar o conteúdo 
um ao lado do outro mas os textos vao ficar um em baixo do outro. Para isso aplique
um flex direction nele.*/

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/f-bravo.png" alt="Foto do user" />

        <div>
          <span>Bem vindo</span>
          <strong>Felipe Bravo</strong>
        </div>
      
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
        
    </Container>
  )
}