import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  
  // A propriedade isNew está sendo passada para o container. Então da p recuperar ela no Theme
  // Item novo n tem background. Se é um item já add tem background. 
  // É um background condicional. Se for novo fica transparente se não terá background
  background-color: ${({ theme, isNew }) => isNew ? "trasnparente" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  // Se tem a propriedade isNew aplique a borda pontilhada se não é none
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }


  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme })=> theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme })=> theme.COLORS.GRAY_300};
    }
  }
`;
