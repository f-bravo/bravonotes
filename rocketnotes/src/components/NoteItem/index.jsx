import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

// Passando as pros de forma separada pois cada uam vai ser usada num lugar p customizar
export function NoteItem({ isNew, value, onClick, ...rest }) {
    return(
      <Container isNew={isNew}>
        <input 
          type='text'
          value={value}
          readOnly={!isNew} //Se já foi add n é editável. Se n é novo pode bloquear
          {...rest}
        />

        <button
          type="button" 
          onClick={onClick}
          className={isNew ? 'button-add' : 'button-delete'} //Classe de cor do botão. New? Orange se não red
        >
          { isNew ? <FiPlus /> : <FiX />}  
        </button>
      </Container> //se for novo renderiza o ícone FiPlus se n renderiza o Fix
    );
} 