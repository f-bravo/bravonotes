import { Container, Links, Content } from './styles'

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

      <main>
        <Content>

          <ButtonText title="Excluir nota"/>

          <h1>introdução ao React</h1>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quasi rem, asperiores culpa quam commodi incidunt voluptas. Quibusdam provident amet doloribus perferendis dolorum architecto, expedita necessitatibus impedit distinctio numquam autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur est quibusdam quaerat voluptatum fuga alias in fugiat, velit deserunt doloremque sequi cumque culpa nam neque? Vel sed quibusdam perspiciatis.</p>

          <Section title="Link úteis" >
            <Links>
              <li><a href="#">https://github.com/f-bravo/gptblog</a></li>
              <li><a href="#">https://github.com/f-bravo/bravonotes</a></li>
            </Links>
          </Section>  

          <Section title="Marcadores" >
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}