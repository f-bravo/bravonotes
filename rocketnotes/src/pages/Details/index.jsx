import { Container, Links } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'

// title="Login" --> é uma props. Props são passadas dessa forma dentro dos componentes

// O children é passado dentro da TAG e tudo que tiver dentro o children captura 
// e repassa para o {children} do componente Section

export function Details() {
  
  return(
    <Container>
      <Header />

      <ButtonText title="Excluir nota"/>

      <Section title="Link úteis" >
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
        </Links>
      </Section>  

      <Section title="Marcadores" >
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}