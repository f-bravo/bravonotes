import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header; // Grip-area: Ao rolar a barra o cabeçalho fica fixo

  height: 105px;
  width: 100%;
// linha que fica embaixo do cabeçalho
  border-bottom-width: 1px; 
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
  
`;

export const Profile = styled(Link)` // Trocou a Div pelo Link. Ao clicar no header volta p a home
  display: flex;
  align-items: center; // para alinhar no centro da DIV - alinhamento horizontal

  
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
// Trabalhando a DIV para mudar o direcionamento dos textos
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px; // N usou paddin e sim altura da linha para afastar os textos na vertical

    // A especificidade já é grande. N  precisa colocar sinal de maior > aqui
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
  }
`;

  // Botão logout
  export const Logout = styled.button`
    border: none;
    background: none;
    
    > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
    }
  `;
