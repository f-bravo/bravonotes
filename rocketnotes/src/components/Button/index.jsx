import { Container } from './styles';

// Para Recuprar a propriedade title passada p/ um componente passe o props como parâmetro
// Para exibir o conteúdo de uma propriedade dentro do return coloque entre chaves {props.title}
// outra maneira desestruturar: passe o parâmetro {title} direto p função sem o props. Será essa forma a ser usada
export function Button({ title, loading=false, ...rest }){ 
  return(
  <Container 
    type="button"
    disabled={loading} // Se o loading for verdadeiro vai desabilitar o botão
    {...rest} // Para tds outras propriedades se forem passadas 
  >

    { loading ? 'Carregando...' : title}
  </Container>
  )
}