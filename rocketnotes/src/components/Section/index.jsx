import { Container } from "./styles";

// O conteúdo vai ser passado pelo children
export function Section({ title, children }){
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}