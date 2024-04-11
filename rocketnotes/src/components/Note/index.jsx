import { Container } from './styles'
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags && //renderiza as tag se existirem
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}

/* Se n houvesse o Componente Tag ficaria assim:
{
  data.tags.map(tag => {  //Percore cada tag <span>. Precisa por um ID pois cada elemento é único
    <span key={tag.id}>
      {tag.name}
    </span>
  })
}
*/
