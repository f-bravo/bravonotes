// Importanto a biblioteca de ícones. Deposi da / a biblioteca. Na importação os íncones 
// https://react-icons.github.io/react-icons/search/#q=RiShut

import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles";

/* A img está ao lado do texto com um <span> e um <strong>
Com isso p que fique como no projeto preciisa por uma div para encaixar o conteúdo 
um ao lado do outro mas os textos vao ficar um em baixo do outrro. Para isso aplique
um flex direction nele.*/

export function Header(){
  return(
    <Container>
      <Profile>
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