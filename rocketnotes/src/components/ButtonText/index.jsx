import { Container } from "./styles";

// isActive é um booleano mas tem que passar a propiedade para o componente com uma string
// A DOM perrcisa que seja string p usar ela na estrutura de elementos
export function ButtonText({ title, isActive = false, ...rest }) {
  return(
    <Container 
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}

    </Container>
  );
}