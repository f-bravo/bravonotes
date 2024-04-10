import { Container } from "./styles";

// O rest é para dizer que tipo de input. Text, email, etc.
// icon: Icon - prercisa fazer essa conversão pois td componente precisa iniciar com letra maiúscula
// {Icon && <Icon />} -> nem td propriedade vai ter ícone. Só vai mostrar se o ícone existir
export function Input({icon: Icon, ...rest}){
  return(
    <Container >
      {Icon && <Icon size={20} />}
      <input {...rest}/>
    </Container>
  );
}