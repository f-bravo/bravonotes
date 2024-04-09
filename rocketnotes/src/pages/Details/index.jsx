import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'


// title="Login" --> é uma props. Props são passadas dessa forma dentro dos componentes

export function Details() {
  
  return(
    <Container>

      <Header/>
      <Button title="Voltar" />

    </Container>
  )
}